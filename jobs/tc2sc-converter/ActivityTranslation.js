const spliter = '@@@@@';
const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING ActivityTranslation`);

    const rows = await conn.query(`
            SELECT  metaTitle, 
                    metaDescription, 
                    location, 
                    title, 
                    brief, 
                    description, 
                    whatToExpect, 
                    information, 
                    howToUse, 
                    cancelationPolicy, 
                    faq, 
                    activityId
            FROM ActivityTranslation 
            WHERE languageId = 3 
                AND activityId BETWEEN ? AND ? 
            ORDER BY activityId
        `,
        [
            startIndex,
            endIndex
        ]);

    let items = [];
    for (const row of rows) {

        if (!utils.containsChinese(row.metaTitle)
            && !utils.containsChinese(row.metaDescription)
            && !utils.containsChinese(row.location)
            && !utils.containsChinese(row.title)
            && !utils.containsChinese(row.brief)
            && !utils.containsChinese(row.description)
            && !utils.containsChinese(row.whatToExpect)
            && !utils.containsChinese(row.information)
            && !utils.containsChinese(row.howToUse)
            && !utils.containsChinese(row.cancelationPolicy)
            && !utils.containsChinese(row.faq)
        ) {
            log.warning(`SKIP ActivityTranslation activityId: ${row.activityId}`);
            log.warning(`REASON: NONE CHINESE CHARACTERS`);

            continue;
        }

        items.push(row);

        if (items.length === 100) {
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
                UPDATE ActivityTranslation 
                SET metaTitle = ?, 
                    metaDescription = ?, 
                    location = ?,
                    title = ?, 
                    brief = ?, 
                    description = ?, 
                    whatToExpect = ?, 
                    information = ?,
                    howToUse = ?, 
                    cancelationPolicy = ?, 
                    faq = ?
                WHERE activityId = ? 
                    AND languageId = 2
            `,
            [
                item.metaTitle,
                item.metaDescription,
                item.location,
                item.title,
                item.brief,
                item.description,
                item.whatToExpect,
                item.information,
                item.howToUse,
                item.cancelationPolicy,
                item.faq,
                item.activityId
            ]);

        log.success(`UPDATED ActivityTranslation activityId: ${item.activityId}`);
    }
}

module.exports = {
    process: process
};
