"use strict";
import React from 'react'
import store from "../../client/js/redux/store";
import cityService from "../services/cityService";
import axios from "axios/index";
import config from '../../config';

const router = require('express').Router();
const showdown = require('showdown');
const converter = new showdown.Converter();
converter.setOption('tables', true); // tables
converter.setOption('tasklists', true); // checkbox

router.get('/sale/double11', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();

    res.render('campaign/double11', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

router.get('/sale/vnshow', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();

    res.render('campaign/vnshow', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});


router.get('/sale/blackfriday', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();

    res.render('campaign/blackfriday', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

router.get('/sale/christmas', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();

    res.render('campaign/christmas', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});


router.get('/keepsakes', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();
    const cities = await cityService.getCities(true);

    res.render('campaign/keepsakes', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        citiesSpotlight: cities,
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

router.get('/travel-must-haves', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();
    const cities = await cityService.getCities(true);

    res.render('campaign/musthaves', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        citiesSpotlight: cities,
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

router.get('/keepsakes-tmp', async (req, res) => {
    await renderPage(req, res, 'dynamic-keepsakes', 'keepsakes');
});

router.get('/travel-must-haves-tmp', async (req, res) => {
    await renderPage(req, res, 'dynamic-musthaves', 'travel-must-haves');
});

router.get('/authentic-experiences', async (req, res) => {
    await renderPage(req, res, 'fathersday', 'fathersday');
});

router.get('/sale/easter', async (req, res) => {
    await renderPage(req, res, 'easter', 'easter');
});

router.get('/sale/central-vietnam-travel', async (req, res) => {
    await renderPage(req, res, 'central-vietnam-travel', 'central-vietnam-travel');
});

router.get('/the-coffee-house', async (req, res) => {
     await renderPage(req, res, 'coffeehouse', 'the-coffee-house');
});

router.get('/one-year-anniversary', async (req, res) => {
    await renderPage(req, res, 'one-year-anniversary', 'one-year-anniversary');
});

router.get('/property-tour', async (req, res) => {
    await renderPage(req, res, 'property-tour', 'property-tour');
});

router.get('/sale/christmas2019', async (req, res) => {
    await renderPage(req, res, 'christmas2019', 'christmas2019');
});


async function renderPage(req, res, page, key) {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();
    const cities = await cityService.getCities(true);

    let response = {};
    try {
        if (req.query.k) {
            response = await axios.get(`${config.api.defaultApiUrl}/public/campaigns/preview?k=${req.query.k}`);
        } else {
            response = await axios.get(`${config.api.defaultApiUrl}/public/campaigns/${key}`);
        }
    } catch (ex) {
        res.redirect('/');
        return;
    }

    const bannersUrl = `${config.api.defaultApiUrl}/public/banners?filters[0].field=type&filters[0].value=1,5,6,7&filters[0].operation=IN&page.index=1&page.size=50`;
    const bannersGetResponse = await axios.get(bannersUrl);
    const banners = bannersGetResponse.data.data || [];

    const campaignBanners = banners.filter(it => it.bannerTypeId === 5);
    const promotionsSlider = banners.filter(it => it.bannerTypeId === 7);

    res.render('campaign/' + page, {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        citiesSpotlight: cities,
        campaignData: response.data || {},
        campaignBanners,
        promotionsSlider,
        converter: converter,
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
}

router.get('/sale/cny', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();
    const cities = await cityService.getCities(true);

    res.render('campaign/cny', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        citiesSpotlight: cities,
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

module.exports = router;
