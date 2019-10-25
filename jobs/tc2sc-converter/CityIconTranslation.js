const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING CityIconTranslation`);

    const rows = await conn.query(`
            SELECT cit.title, 
                    cit.description,
                    cit.cityIconId,
                    ci.cityId
            FROM CityIconTranslation cit
                INNER JOIN CityIcon ci ON cit.cityIconId = ci.id
            WHERE cit.languageId = 3 
                AND ci.cityId BETWEEN ? AND ? 
            ORDER BY ci.cityId, ci.id
        `,
        [
            startIndex,
            endIndex
        ]);

    let items = [];
    for (const row of rows) {
        if (!utils.containsChinese(row.title)
            && !utils.containsChinese(row.description)
        ) {
            log.warning(`SKIP CityIconTranslation cityId: ${row.cityId} cityIconId: ${row.cityIconId}`);
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
                UPDATE CityIconTranslation 
                SET title = ?, 
                    description = ? 
                WHERE cityIconId = ? 
                    AND languageId = 2
            `,
            [
                item.title,
                item.description,
                item.cityIconId
            ]);

        log.success(`UPDATED CityIconTranslation cityId: ${item.cityId} cityIconId ${item.cityIconId}`);
    }
}

module.exports = {
    process: process
};
