const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING CitySectionTranslation`);

    const rows = await conn.query(`
            SELECT  cst.introduction,
                    cst.citySectionId,
                    cs.cityId
            FROM CitySectionTranslation cst 
                INNER JOIN CitySection cs ON cst.citySectionId =  cs.id
            WHERE languageId = 3 
                AND cs.cityId BETWEEN ? AND ? 
            ORDER BY cs.cityId, cst.id
        `,
        [
            startIndex,
            endIndex
        ]);

    let items = [];
    for (const row of rows) {
        if (!utils.containsChinese(row.introduction)) {
            log.warning(`SKIP CitySectionTranslation cityId: ${row.cityId} citySectionId: ${row.citySectionId}`);
            log.warning(`REASON: NONE CHINESE CHARACTERS`);

            continue;
        }

        items.push(row);

        if (items.length === 400) {
            await translate(conn, items);

            items = [];
        }
    }

    if (items.length) {
        await translate(conn, items);
    }
}

async function translate(conn, items) {
    const requestString = JSON.stringify(items);
    const response = await convertService.convert(requestString);

    const translatedItems = response.items;

    if (!translatedItems.length) {
        log.error('CANNOT PARSE RESPONSE');
        log.error(`ORIGINAL STRING: ${requestString}`);
        log.error(`RESPONSE TEXT: ${response}`);

        return;
    }

    for (const item of translatedItems) {
        await conn.query(`
                UPDATE CitySectionTranslation 
                SET introduction = ? 
                WHERE citySectionId = ? 
                    AND languageId = 2
            `,
            [
                item.introduction,
                item.citySectionId
            ]);

        log.success(`UPDATED CitySectionTranslation cityId:${item.cityId} citySectionId ${item.citySectionId}`);
    }
}

module.exports = {
    process: process
};
