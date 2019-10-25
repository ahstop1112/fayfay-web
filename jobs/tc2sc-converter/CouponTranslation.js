const convertService = require('../services/convertService');
const utils = require('../common/utils');
const log = utils.log;

async function process(conn, startIndex, endIndex) {
    log.info(`READING CouponTranslation`);

    const rows = await conn.query(`
            SELECT  title,
                    description,
                    couponId
            FROM CouponTranslation
            WHERE languageId = 3 
                AND couponId BETWEEN ? AND ?
            ORDER BY couponId
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
            log.warning(`SKIP CouponTranslation couponId: ${row.couponId}`);
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
                UPDATE CouponTranslation
                SET title = ?, 
                    description = ?
                WHERE couponId = ? 
                    AND languageId = 2
            `,
            [
                item.title,
                item.description,
                item.couponId
            ]);

        log.success(`UPDATED CouponTranslation couponId ${item.couponId}`);
    }
}

module.exports = {
    process: process
};
