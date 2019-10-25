"use strict";
import React from 'react'
import axios from "axios/index";
const config = require('../../config');
import store from "../../client/js/redux/store";
const router = require('express').Router();

router.get('/press/:type(contact|coverage|release)', async (req, res) => {
    const type = req.params.type;
    const url = `${config.api.defaultApiUrl}/public/articles?page.index=1&page.size=1000&filters[0].field=type&filters[0].value=`;
    let data = [];
    if (type !== 'contact') {
        const fullType = (type === 'release' ? 'PRESS_RELEASES' : 'MEDIA_CLIPPINGS');
        const response = await axios.get(`${url}${fullType}&filters[0].operation=EQUALS&sort.field=publishedDate&sort.direction=DESC`);
        data = response.data.data || [];
    }

    const lang = req.locale;
    const translations = req.localeData[lang];

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('press', {
        userInfo: req.session.userInfo,
        dataContainer: data,
        articleData: '',
        toList: type,
        pageType: type,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

router.get('/press/:type(contact|coverage|release)/:slug', async (req, res) => {
    const url = `${config.api.defaultApiUrl}/public/articles/${req.params.slug}`;
    const response = await axios.get(url);

    const lang = req.locale;
    const translations = req.localeData[lang];

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('press', {
        userInfo: req.session.userInfo,
        articleData: response.data,
        toList: '',
        pageType: req.params.type,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

module.exports = router;
