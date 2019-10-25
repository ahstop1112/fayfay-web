import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import store from '../../client/js/redux/store';
import ActivityContainer from '../../client/js/containers/ActivityContainer';
import IntlWrapper from '../../IntlWrapper';
import activityService from '../services/activityService';
import commonService from '../services/commonService';
const queryString = require('query-string');

const config = require('../../config');
const router = require('express').Router();
const showdown = require('showdown');

const converter = new showdown.Converter();
converter.setOption('tables', true); // tables
converter.setOption('tasklists', true); // checkbox

router.get('/activity/:id-:slug', async (req, res) => {
    res.redirect(301, `${req.langUrl}/experience/${req.params.id}-${req.params.slug}`);
});

router.get('/experience/preview', async (req, res) => {
    const secretKey = encodeURIComponent(req.query.k);

    const activityUrl = `${config.api.defaultApiUrl}/public/activities/preview?k=${secretKey}`;

    const response = await axios.get(activityUrl);
    const countries = await axios.get(`${config.api.defaultApiUrl}/public/countries`);
    const general = await commonService.getGeneralData();
    const activityData = response.data;

    renderActivityPage(req, res, activityData, countries.data, general);
});

router.get('/:id([0-9]{5})', async (req, res) => {
    const id = req.params.id;

    const activityData = await activityService.getById(req, id);

    res.redirect(301, `${req.langUrl}/experience/${activityData.id}-${activityData.slug}`);
});

router.get('/experience/:id-:slug', async (req, res) => {
    const id = req.params.id;
    const slug = req.params.slug;

    const activityData = await activityService.getById(req, id);
    const countries = await axios.get(`${config.api.defaultApiUrl}/public/countries`);
    const general = await commonService.getGeneralData();
    const relatedExperiences = await axios.get(`${config.api.defaultApiUrl}/public/activities/${id}/related`);

    if (activityData.slug !== slug) {
        if (req.query) {
            res.redirect(301, `${req.langUrl}/experience/${activityData.id}-${activityData.slug}?${queryString.stringify(req.query)}`);
        } else {
            res.redirect(301, `${req.langUrl}/experience/${activityData.id}-${activityData.slug}`);
        }

        return;
    }

    if (activityData.statusId !== 1) {
        res.redirect(`/city/${activityData.cityId}-${activityData.citySlug}`);

        return;
    }
    renderActivityPage(req, res, activityData, countries.data, general, relatedExperiences.data);
});

function renderActivityPage(req, res, activityData, countries, general, relatedExperiences) {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const packageId = req.query.packageId;

    const activityContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <ActivityContainer
                data={{
                    activityData: activityData,
                    countries: countries,
                    instantMessengers: general ? general.instantMessengers.filter(it => it !== 'FACEBOOK') : [],
                    facebookPixelID: `${config.facebook.pixelID}`,
                    packageId: packageId,
                    langId: req.langId,
                    relatedExperiences
                }}
            />
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('activity', {
        activityContainerHtml,
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            activityData: activityData,
            countries: countries,
            instantMessengers: general ? general.instantMessengers.filter(it => it !== 'FACEBOOK') : [],
            translations: translations,
            packageId: packageId,
            langId: req.langId,
            relatedExperiences
        }),
        tplData: activityData,
        converter: converter
    });
}

module.exports = router;
