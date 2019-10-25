const chalk = require('chalk');

function trace(message) {
    console.log(chalk.black(`[${new Date().toISOString()}] ${message}`));
}

function success(message) {
    console.log(chalk.green(`[${new Date().toISOString()}] ${message}`));
}

function warning(message) {
    console.log(chalk.yellow(`[${new Date().toISOString()}] ${message}`));
}

function info(message) {
    console.log(chalk.cyan(`[${new Date().toISOString()}] ${message}`));
}

function error(message) {
    console.log(chalk.red(`[${new Date().toISOString()}] ${message}`));
}

// https://github.com/anton-bot/contains-chinese/blob/master/index.js
/**
 * @fileOverview Checks for presence of any Chinese text in a string.
 * @author Anton Ivanov <anton@ivanov.hk>
 */

/** Regex equivalent to \p{Han} in other programming languages. */
const HAN_REGEX = /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FD5\uF900-\uFA6D\uFA70-\uFAD9]/;

/**
 * Returns true if the `text` contains at least one Chinese characters;
 * false otherwise.
 * @param {string} text - The text to be checked for Chinese.
 * @returns {boolean}
 */
function containsChinese(text) {
    // Empty strings don't contain Chinese.
    if (text === null || text === undefined || text === '') {
        return false;
    }

    // If you passed a number or object, it's kind of OK too.
    if (typeof text !== 'string') {
        text = text.toString();
    }

    // Check for any match using regex; cast boolean
    return !!text.match(HAN_REGEX);
}

// Export regex as a static member in case someone needs it.
/** Regex equivalent to \p{Han} in other programming languages. */
containsChinese.HAN_REGEX = HAN_REGEX;

module.exports = {
    log: {
        success: success,
        warning: warning,
        info: info,
        error: error,
        trace: trace
    },
    containsChinese: containsChinese
};
