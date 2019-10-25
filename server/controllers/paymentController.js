import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import store from '../../client/js/redux/store';
import PaymentContainer from '../../client/js/containers/PaymentContainer';
import IntlWrapper from '../../IntlWrapper';

import requiredLogin from '../middlewares/requiredLogin';
import cityService from '../services/cityService';
import commonService from '../services/commonService';

const config = require('../../config');
const router = require('express').Router();
const queryString = require('query-string');

router.get('/checkout', requiredLogin, async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const cartId = req.query.cartId;
    const countries = await axios.get(`${config.api.defaultApiUrl}/public/countries`);
    const general = await commonService.getGeneralData();

    const url = cartId ? `${config.api.defaultApiUrl}/api/carts/${cartId}?gateway=ONEPAY` : `${config.api.defaultApiUrl}/api/carts/pay?gateway=ONEPAY`;

    const checkout = await axios.get(url);

    const paymentContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <PaymentContainer data={{
                cartItems: checkout.data.cartItems ? checkout.data.cartItems.filter(item => !item.expired && item.valid) : [],
                payment: checkout.data.payment
            }}/>
        </IntlWrapper>
    );
    const preloadedState = store.getState();

    res.render('checkout', {
        paymentContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        userInfo: req.session.userInfo,
        appData: JSON.stringify({
            countries: countries.data,
            titles: general.titles,
            instantMessengers: general.instantMessengers.filter(it => it !== 'FACEBOOK'),
            genders: general.genders,
            nationalities: general.nationalities,
            userInfo: req.session.userInfo,
            lang: lang,
            translations: translations,
            cartId,
            cartItems: checkout.data.cartItems ? checkout.data.cartItems.filter(item => !item.expired && item.valid) : [],
            payment: checkout.data.payment
        })
    });
});

router.get('/checkout/thank-you/:orderId', requiredLogin, async (req, res) => {
    const orderId = req.params.orderId;
    const lang = req.locale;
    const translations = req.localeData[lang];
    const url = `${config.api.defaultApiUrl}/api/orders/${orderId}`;

    const getResponse = await axios.get(url);

    const cities = await cityService.getCities(true);

    const preloadedState = store.getState();

    res.render('thankyou', {
        preloadedState: JSON.stringify(preloadedState),
        userInfo: req.session.userInfo,
        order: getResponse.data,
        citiesSpotlight: cities,
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
});

router.get('/payment/onepay/return', async (req, res) => {
    const query = req.query;

    const url = `${config.api.defaultApiUrl}/public/payment/onepay/success?${queryString.stringify(query)}`;

    try {
        await axios.post(url);

        res.redirect(`${req.langUrl}/checkout/thank-you/${query.vpc_OrderInfo.replace(/[^0-9\.]+/g, '')}`);
    } catch (ex) {
        console.log(ex);

        let checkoutLink = query.AgainLink;
        if (!checkoutLink) {
            if (query.cartId) {
                checkoutLink = `/checkout?cartId=${query.cartId}`;
            } else {
                checkoutLink = '/checkout';
            }
        }


        // 99 - User cancel no need to show error
        if (query.vpc_TxnResponseCode !== '99') {
            const queryString = `error=${ex.message}&code=${query.domestic === false ? `domestic.${query.vpc_TxnResponseCode}` : query.vpc_TxnResponseCode}`;

            if (checkoutLink.indexOf('?') >= 0) {
                res.redirect(`${checkoutLink}&${queryString}`);
            } else {
                res.redirect(`${checkoutLink}?${queryString}`);
            }
        } else {
            res.redirect(checkoutLink);
        }
    }
});

module.exports = router;
