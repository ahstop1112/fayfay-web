const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING CategoryTranslation`);

    const rows = await conn.query(`
            SELECT  value,
                    categoryId
            FROM CategoryTranslation 
            WHERE languageId = 3 
                AND categoryId BETWEEN ? AND ?
        `,
        [
            startIndex,
            endIndex
        ]);

    let items = [];
    for (const row of rows) {
        if (!utils.containsChinese(row.value)) {
            log.warning(`SKIP CategoryTranslation categoryId: ${row.categoryId}`);
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
                UPDATE CategoryTranslation 
                SET value = ?
                WHERE categoryId = ? 
                    AND languageId = 2
            `,
            [
                item.value,
                item.categoryId
            ]);

        log.success(`UPDATED CategoryTranslation categoryId: ${item.categoryId}`);
    }
}

module.exports = {
    process: process
};
