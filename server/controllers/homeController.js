'use strict';

const router = require('express').Router();
import utils from '../lib/utils';
import axios from 'axios';
import store from '../../client/js/redux/store';
import cityService from '../services/cityService';

const config = require('../../config');

const querystring = require('querystring');
const url = require('url');


router.get('/landing', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];

    const cloudinaryUrl = `${config.cloudinary.imageUrlPrefix}`;
    const preloadedState = store.getState();

    res.render('landing', {
        cloudinaryUrl,
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang, translations
        })
    });
});

router.get('/', async (req, res) => {
    const isChat = req.query.chat;
    const lang = req.locale;
    const translations = req.localeData[lang];
    const cities = await cityService.getCities(true);

    const queryObject = {
        'sort.field': 'priority',
        'sort.direction': 'ASC',
        'filters[0].field': 'priority',
        'filters[0].value': 1,
        'filters[0].operation': 'GREATER_THAN_OR_EQUAL'
    };

    // TODO: API should combine request to reduce round trip
    const popularActivityUrl = `${config.api.defaultApiUrl}/public/activities?${querystring.stringify(queryObject)}`;
    const popularActivityGetResponse = await axios.get(popularActivityUrl);

    const cloudinaryUrl = `${config.cloudinary.imageUrlPrefix}`;
    const activitySectionUrl = `${config.api.defaultApiUrl}/public/activities/sections`;
    const activitySectionGetResponse = await axios.get(activitySectionUrl);

    const recommendedActivities = activitySectionGetResponse.data.filter(it => it.recommended && it.section === 'RECOMMENDED');
    const footerVideoActivity = activitySectionGetResponse.data.find(it => it.footerVideo && it.section === 'RECOMMENDED');
    const f1Activities = activitySectionGetResponse.data.filter(it => it.section === 'F1');

    const bannersUrl = `${config.api.defaultApiUrl}/public/banners?filters[0].field=type&filters[0].value=1,5,6,7&filters[0].operation=IN&page.index=1&page.size=50`;
    const bannersGetResponse = await axios.get(bannersUrl);
    const banners = bannersGetResponse.data.data || [];

    const popupBanner = banners.filter(it => it.bannerTypeId === 1);
    const campaignBanners = banners.filter(it => it.bannerTypeId === 5);
    const topSlider = banners.filter(it => it.bannerTypeId === 6);
    const promotionsSlider = banners.filter(it => it.bannerTypeId === 7);

    const preloadedState = store.getState();

    res.render('index', {
        cloudinaryUrl,
        userInfo: req.session.userInfo,
        citiesSpotlight: cities,
        popularActivities: popularActivityGetResponse.data.activities.data,
        recommendedActivities,
        f1Activities,
        footerVideoActivity,
        popupBanner: req.cookies.hidePopup ? null : popupBanner[0],
        topSlider,
        campaignBanners,
        promotionsSlider,
        preloadedState: JSON.stringify(preloadedState),
        isChat,
        appData: JSON.stringify({
            lang, translations
        })
    });
});

router.post('/change-lang/:lang', async (req, res) => {
    let parseUrl = url.parse(req.body.url, true);

    const languageCode = req.params.lang;
    utils.setLanguage(res, languageCode);

    if (req.session && req.session.userToken) {
        const selectedLanguage = utils.languages[languageCode];

        const updateLanguage = `${config.api.defaultApiUrl}/api/users/${req.session.userInfo.userId}/language/${selectedLanguage.id}`;
        await axios.patch(updateLanguage);
    }

    const match = parseUrl.path.match(/^\/([A-Za-z]{2}-[A-Za-z]{2})([\/\?].*)?$/i);

    let pathname = parseUrl.path;
    if (match) {
        pathname = match[2] || '';
    }

    const langUrl = `/${languageCode}`;

    res.json(`${langUrl}${pathname}`);
});

router.post('/change-ccy/:ccy', async (req, res) => {
    const currencyCode = req.params.ccy;
    utils.setCurrency(res, currencyCode);

    if (req.session && req.session.userToken) {
        const updateCurrency = `${config.api.defaultApiUrl}/api/users/${req.session.userInfo.userId}/currency/${currencyCode}`;
        await axios.patch(updateCurrency);
    }

    res.json(req.body.url);
});


module.exports = router;
