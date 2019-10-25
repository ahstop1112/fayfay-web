"use strict";
import React from 'react'
const router = require('express').Router();
import store from '../../client/js/redux/store';
import ReactDOMServer from "react-dom/server";
import IntlWrapper from "../../IntlWrapper";
import EarlyAccessContainer from "../../client/js/containers/EarlyAccessContainer";
const config = require('../../config');

router.get('/earlyaccess', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const reCaptcha = {
        siteKey: config.reCaptcha.siteKey
    };

    const EarlyAccessContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <EarlyAccessContainer data={{
                reCaptcha: reCaptcha
            }}/>
        </IntlWrapper>
    );
    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('earlyAccess', {
        userInfo: req.session.userInfo,
        InfoContainerHtml: EarlyAccessContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            reCaptcha: reCaptcha
        })
    });
});

module.exports = router;
