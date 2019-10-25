"use strict";
import React from 'react'
import store from "../../client/js/redux/store";
import axios from "axios/index";
const router = require('express').Router();
const config = require('../../config');

router.get('/faysim', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const preloadedState = store.getState();

    const bannersUrl = `${config.api.defaultApiUrl}/public/banners?filters[0].field=type&filters[0].value=1,5,6&filters[0].operation=IN&page.index=1&page.size=50`;
    const bannersGetResponse = await axios.get(bannersUrl);
    const banners = bannersGetResponse.data.data || [];

    const campaignBanners = banners.filter(it => it.bannerTypeId === 5);

    res.render('faysim', {
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        campaignBanners: campaignBanners,
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

module.exports = router;
