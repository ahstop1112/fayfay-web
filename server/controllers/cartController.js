import axios from "axios/index";

const router = require('express').Router();

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStoreWithState } from '../../client/js/redux/store';
import ShoppingCartContainer from '../../client/js/containers/ShoppingCartContainer';
import IntlWrapper from '../../IntlWrapper';
import config from '../../config';
import querystring from 'querystring';
import requiredLogin from '../middlewares/requiredLogin';
import cityService from "../services/cityService";

router.get('/cart', requiredLogin, async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const response = await axios.get(`${config.api.defaultApiUrl}/api/carts?city=true`);
    const cartItems = response.data.filter(item => item.valid);

    const store = createStoreWithState({
        cart: {
            cartItems: cartItems,
            previewCartItems: [],
            selectedCartIds: cartItems.filter(item => !item.expired && item.valid).map(item => item.id),
            availableDates: {},
            packageOptionMap: {}
        }
    });

    const shoppingCartContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <ShoppingCartContainer/>
        </IntlWrapper>
    );
    const preloadedState = store.getState();

    const activeItemCount = response.data.filter(item => item.valid && !item.expired).length;

    let popularActivityGetResponse;
    let cityData = null;
    if(!activeItemCount) {
        const queryObject = {
            'sort.field': 'priority',
            'sort.direction': 'ASC',
            'filters[0].field': 'priority',
            'filters[0].value': 1,
            'filters[0].operation': 'GREATER_THAN_OR_EQUAL',
        };

        popularActivityGetResponse = await axios.get(`${config.api.defaultApiUrl}/public/activities?${querystring.stringify(queryObject)}`);
    }
    else {
        let expCityId = null;
        let cityIds = cartItems.map(it => it.city.id);
        cityIds = [...new Set(cityIds)];

        if (cityIds.length > 1){
            expCityId = cityIds[Math.floor(Math.random() * cityIds.length)];
        }
        else {
            if (!cityIds[0] || cityIds[0] === config.cityIds.vietnam) {
                const citiesData = await cityService.getCities();
                const nonVN = citiesData.filter(it => it.id !== cityIds[0]).map(it => it.id);
                expCityId = nonVN[Math.floor(Math.random() * nonVN.length)];
            }
            else {
                expCityId = cityIds[0];
            }
        }

        cityData = await cityService.getById(expCityId);
    }

    res.render('cart', {
        cityData: cityData || {},
        shoppingCartContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        userInfo: req.session.userInfo,
        popularActivities: popularActivityGetResponse ? popularActivityGetResponse.data.activities.data : null,
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
        })
    });
});

module.exports = router;
