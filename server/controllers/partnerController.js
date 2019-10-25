"use strict";
import React from 'react'
const router = require('express').Router();
import store from '../../client/js/redux/store';
import ReactDOMServer from "react-dom/server";
import IntlWrapper from "../../IntlWrapper";
import PartnerContainer from "../../client/js/containers/PartnerContainer";
import axios from "axios/index";
const config = require('../../config');

router.get('/partner', async (req, res) => {
    await formRender(req, res);
});

router.get('/influencer', async (req, res) => {
    await formRender(req, res);
});

async function formRender(req, res) {
    const pageName = req.url.substring(1);
    const lang = req.locale;
    const translations = req.localeData[lang];
    const reCaptcha = {
        siteKey: config.reCaptcha.siteKey
    };

    const partnerContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <PartnerContainer data={{
                pageName: pageName,
                reCaptcha: reCaptcha
            }}/>
        </IntlWrapper>
    );
    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('partner', {
        pageName: pageName,
        userInfo: req.session.userInfo,
        InfoContainerHtml: partnerContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            pageName: pageName,
            reCaptcha: reCaptcha
        })
    });
}

router.post('/experience-provider', async (req, res) => {
    const url = `${config.api.defaultApiUrl}/public/partner/experience-provider?g-recaptcha-response=${req.query['g-recaptcha-response']}`;

    const body = req.body;
    const response = await axios.post(url, body);

    res.json(response.data);
});

router.post('/partner-influencer', async (req, res) => {
    const url = `${config.api.defaultApiUrl}/public/partner/fayfay-influencer?g-recaptcha-response=${req.query['g-recaptcha-response']}`;

    const body = req.body;
    const response = await axios.post(url, body);

    res.json(response.data);
});

module.exports = router;
