"use strict";
import React from 'react'
import store from "../../client/js/redux/store";

const router = require('express').Router();

router.get('/terms', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();
    res.render('terms', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        termPage: "terms",
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
        })
    });
});

router.get('/dispute-settlement', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();
    res.render('terms', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        termPage: "dispute-settlement",
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
        })
    });
});

router.get('/privacy-policy', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();

    res.render('terms', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        termPage: 'privacy-policy',
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
        })
    });
});

module.exports = router;
