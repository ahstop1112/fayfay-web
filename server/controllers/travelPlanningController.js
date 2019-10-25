"use strict";
import React from 'react'
const router = require('express').Router();
import store from '../../client/js/redux/store';
import ReactDOMServer from "react-dom/server";
import IntlWrapper from "../../IntlWrapper";
import TravelPlanningContainer from "../../client/js/containers/TravelPlanningContainer";
import axios from "axios/index";
import cityService from '../services/cityService';
const config = require('../../config');

router.get('/vietnam-travel-planning', async (req, res) => {
    await formRender(req, res);
});

async function formRender(req, res) {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const cities = await cityService.getCities();

    const TravelPlanningContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <TravelPlanningContainer data={{
                cities: cities
            }}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('travel.planning.ejs', {
        userInfo: req.session.userInfo,
        InfoContainerHtml: TravelPlanningContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            cities: cities
        })
    });
}

router.post('/contact-itinerary-planning', async (req, res) => {
    const url = `${config.api.defaultApiUrl}/public/contact-itinerary-planning?g-recaptcha-response=${req.query['g-recaptcha-response']}`;

    const body = req.body;
    const response = await axios.post(url, body);

    res.json(response.data);
});

module.exports = router;
