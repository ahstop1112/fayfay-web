const axios = require('axios');
const querystring = require('querystring');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const utils = require('../common/utils');
const log = utils.log;

function msleep(miliseconds) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, miliseconds);
}

function sleep(seconds) {
    msleep(seconds * 1000);
}

async function convert(requestString) {
    if (!utils.containsChinese(requestString)) {
        log.info('CANNOT PARSE RESPONSE');
        log.info(`ORIGINAL STRING: ${requestString}`);
        log.info(`RESPONSE TEXT: NONE CHINESE CHARACTERS`);

        return {
            items: []
        };
    }

    sleep(3);

    log.info(`SENDING TRANSLATION REQUEST`);

    const response = await axios.post('https://convert.cdict.info/b2gtext.php', querystring.stringify({
        'textbody': requestString
    }));

    log.info(`RECEIVE TRANSLATION RESPONSE`);

    const html = response.data;

    const dom = new JSDOM(html);
    const textall = dom.window.document.getElementById('textall');
    const jsonString = textall.value;

    try {
        return {
            items: JSON.parse(jsonString)
        };
    } catch (e) {
        console.log(e);
    }

    return {
        items: []
    };
}

module.exports = {
    convert: convert
};
