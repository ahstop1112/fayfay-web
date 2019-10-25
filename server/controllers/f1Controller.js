"use strict";
import React from 'react';
import store from "../../client/js/redux/store";
import ReactDOMServer from "react-dom/server";
import IntlWrapper from "../../IntlWrapper";
import F1FormContainer from "../../client/js/containers/F1FormContainer";
import commonService from "../services/commonService";
const config = require('../../config');
import axios from "axios";
const router = require('express').Router();

router.get('/f1', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const response = await axios.get(`${config.api.defaultApiUrl}/public/countries`);
    const general = await commonService.getGeneralData();

    const f1FormContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <F1FormContainer data={{
                langId: req.langId,
                countries: response.data,
                instantMessengers: general ? general.instantMessengers.filter(it => it !== 'FACEBOOK') : []
            }}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('f1', {
        f1FormContainerHtml,
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            langId: req.langId,
            countries: response.data,
            instantMessengers: general ? general.instantMessengers.filter(it => it !== 'FACEBOOK') : []
        })
    });
});

router.get('/f1/terms-of-sales-privacy-policy', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const response = await axios.get(`${config.api.defaultApiUrl}/public/countries`);
    const general = await commonService.getGeneralData();

    const f1FormContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <F1FormContainer data={{
                langId: req.langId,
                countries: response.data,
                instantMessengers: general ? general.instantMessengers.filter(it => it !== 'FACEBOOK') : []
            }}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('f1.terms.ejs', {
        f1FormContainerHtml,
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            langId: req.langId,
            countries: response.data,
            instantMessengers: general ? general.instantMessengers.filter(it => it !== 'FACEBOOK') : []
        })
    });
});

module.exports = router;
