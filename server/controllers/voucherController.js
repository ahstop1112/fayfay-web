import axios from 'axios';
import requiredLogin from "../middlewares/requiredLogin";

const config = require('../../config');
const router = require('express').Router();

const showdown = require('showdown');
const converter = new showdown.Converter();
converter.setOption('tables', true); // tables
converter.setOption('tasklists', true); // checkbox

router.get('/voucher/:code', async function (req, res) {

    const voucherCode = req.params.code;
    const token = req.query.token;

    const getResponse = await axios.get(`${config.api.defaultApiUrl}/public/vouchers/${voucherCode}?token=${token}`);

    const lang = req.locale;
    const translations = req.localeData[lang];

    var getResponseEN = "";

    if (lang === 'zh-hk'){
        getResponseEN = await axios.get(`${config.api.defaultApiUrl}/public/vouchers/${voucherCode}?token=${token}&langId=1`);
    }

    res.render('voucher', {
        order: getResponse.data,
        orderEN: getResponseEN.data,
        converter: converter,
        translations: translations
    });
});

router.get('/receipt/:orderId', requiredLogin, async function (req, res) {
    const orderId = req.params.orderId;
    const url = `${config.api.defaultApiUrl}/api/orders/${orderId}`;
    const getResponse = await axios.get(url);

    const lang = req.locale;
    const translations = req.localeData[lang];

    res.render('receipt', {
        order: getResponse.data,
        translations: translations
    });
});

router.get('/receipt', async function (req, res) {
    const voucherCode = req.query.code;
    const token = req.query.token;

    // reuse voucher token logic ...
    const getResponse = await axios.get(`${config.api.defaultApiUrl}/public/receipts/${voucherCode}?token=${token}`);

    const lang = req.locale;
    const translations = req.localeData[lang];

    res.render('receipt', {
        order: getResponse.data,
        translations: translations
    });
});

module.exports = router;
