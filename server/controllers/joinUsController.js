"use strict";
import React from 'react'
import store from "../../client/js/redux/store";
const router = require('express').Router();

router.get('/joinus', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();

    res.render('joinus', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

module.exports = router;
