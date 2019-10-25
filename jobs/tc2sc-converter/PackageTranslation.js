const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING PackageTranslation`);

    const rows = await conn.query(`
            SELECT  title,
                    description,
                    packageId,
                    activityId
            FROM PackageTranslation 
            WHERE languageId = 3 
                AND activityId BETWEEN ? AND ? 
            ORDER BY activityId, packageId
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
            log.warning(`SKIP PackageTranslation activityId: ${row.activityId} packageId: ${row.packageId}`);
            log.warning(`REASON: NONE CHINESE CHARACTERS`);

            continue;
        }

        items.push(row);

        if (items.length === 300) {
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
                UPDATE PackageTranslation
                SET title = ?, 
                    description = ?
                WHERE activityId = ? 
                    AND packageId = ? 
                    AND languageId = 2
            `,
            [
                item.title,
                item.description,
                item.activityId,
                item.packageId
            ]);

        log.success(`UPDATED PackageTranslation activityId: ${item.activityId} packageId: ${item.packageId}`);
    }
}

module.exports = {
    process: process
};
