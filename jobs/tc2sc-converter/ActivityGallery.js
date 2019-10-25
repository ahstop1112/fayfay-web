const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING ActivityGallery`);

    const rows = await conn.query(`
            SELECT  description, 
                    groupId, 
                    activityId, 
                    mediaId 
            FROM ActivityGallery
            WHERE languageId = 3 
                AND activityId BETWEEN ? AND ? 
            ORDER BY activityId, groupId, mediaId
        `,
        [
            startIndex,
            endIndex
        ]);

    let items = [];
    for (const row of rows) {
        if (!utils.containsChinese(row.description)) {
            log.warning(`SKIP ActivityGallery activityId: ${row.activityId}, groupId: ${row.groupId}, mediaId: ${row.mediaId}`);
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
                UPDATE ActivityGallery 
                SET description = ? 
                WHERE groupId = ? 
                    AND activityId = ? 
                    AND mediaId = ? 
                    AND languageId = 2
            `,
            [
                item.description,
                item.groupId,
                item.activityId,
                item.mediaId
            ]);

        log.success(`UPDATED ActivityGallery activityId: ${item.activityId}, groupId: ${item.groupId}, mediaId: ${item.mediaId}`);
    }
}

module.exports = {
    process: process
};
