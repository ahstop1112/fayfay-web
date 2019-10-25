const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING ArticleTranslation`);

    const rows = await conn.query(`
            SELECT  title,
                    content, 
                    ogTitle,
                    articleId
            FROM ArticleTranslation 
            WHERE languageId = 3 
                AND articleId BETWEEN ? AND ?
        `,
        [
            startIndex,
            endIndex
        ]);

    let items = [];
    for (const row of rows) {
        if (!utils.containsChinese(row.title)
            && !utils.containsChinese(row.content)
            && !utils.containsChinese(row.ogTitle)
        ) {
            log.warning(`SKIP ArticleTranslation articleId: ${row.articleId}`);
            log.warning(`REASON: NONE CHINESE CHARACTERS`);

            continue;
        }

        items.push(row);

        if (items.length === 200) {
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
                UPDATE ArticleTranslation 
                SET title = ?, 
                    content = ?, 
                    ogTitle = ? 
                WHERE articleId = ? 
                    AND languageId = 2
            `,
            [
                item.title,
                item.content,
                item.ogTitle,
                item.articleId
            ]);

        log.success(`UPDATED ArticleTranslation articleId: ${item.articleId}`);
    }
}

module.exports = {
    process: process
};
