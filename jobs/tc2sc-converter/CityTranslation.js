const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING CityTranslation`);

    const rows = await conn.query(`
            SELECT  metaTitle, 
                    metaDescription,
                    value,
                    cityId
            FROM CityTranslation 
            WHERE languageId = 3 
                AND cityId BETWEEN ? AND ? 
            ORDER BY cityId
        `,
        [
            startIndex,
            endIndex
        ]);

    let items = [];
    for (const row of rows) {
        if (!utils.containsChinese(row.metaTitle)
            && !utils.containsChinese(row.metaDescription)
            && !utils.containsChinese(row.value)
        ) {
            log.warning(`SKIP CityTranslation cityId: ${row.cityId}`);
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
                UPDATE CityTranslation
                SET metaTitle = ?, 
                    metaDescription = ?, 
                    value = ?
                WHERE cityId = ? 
                    AND languageId = 2
            `,
            [
                item.metaTitle,
                item.metaDescription,
                item.value,
                item.cityId
            ]);

        log.success(`UPDATED CityTranslation cityId ${item.cityId}`);
    }
}

module.exports = {
    process: process
};
