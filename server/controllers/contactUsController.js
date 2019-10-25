"use strict";
import React from 'react'
import ReactDOMServer from "react-dom/server";
import IntlWrapper from "../../IntlWrapper";

const config = require('../../config');
const router = require('express').Router();
import store from '../../client/js/redux/store';
import ContactUsContainer from "../../client/js/containers/ContactUsContainer";
import axios from "axios/index";
import commonService from "../services/commonService";

router.get('/contactus', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const general = await commonService.getGeneralData();
    const countries = await axios.get(`${config.api.defaultApiUrl}/public/countries`);

    const reCaptcha = {
        siteKey: config.reCaptcha.siteKey
    };

    const contactUsContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <ContactUsContainer data={{
                instantMessengers: general ? general.instantMessengers.filter(it => it !== 'FACEBOOK') : [],
                countries: countries.data,
                reCaptcha: reCaptcha
            }}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('contactus', {
        userInfo: req.session.userInfo,
        InfoContainerHtml: contactUsContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            instantMessengers: general ? general.instantMessengers.filter(it => it !== 'FACEBOOK') : [],
            countries: countries.data,
            reCaptcha: reCaptcha
        })
    });
});

router.post('/public-email', async (req, res) => {
    const url = `${config.api.defaultApiUrl}/public/email/inquiry?langId=1&g-recaptcha-response=${req.query['g-recaptcha-response']}`;
    const response = await axios.post(url, req.body);
    res.json(response.data)
});

module.exports = router;
