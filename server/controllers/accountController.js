"use strict";
import axios from "axios";
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import store, { createStoreWithState } from '../../client/js/redux/store';
import LoginFormContainer from '../../client/js/containers/LoginFormContainer';
import RegisterFormContainer from '../../client/js/containers/RegisterFormContainer';
import ForgotPasswordContainer from '../../client/js/containers/ForgotPasswordContainer';
import ResetPasswordContainer from '../../client/js/containers/ResetPasswordContainer';
import AccountContainer from "../../client/js/containers/AccountContainer";
import IntlWrapper from "../../IntlWrapper";
import requiredLogin from '../middlewares/requiredLogin';
import utils from '../lib/utils';
import commonService from '../services/commonService';
const config = require('../../config');
const router = require('express').Router();
const passGen = require('generate-password');

//Login
router.get('/login', (req, res) => {
    if (req.session && req.session.userToken) {
        res.redirect(`${req.langUrl}/`);

        return;
    }

    const lang = req.locale;
    const translations = req.localeData[lang];

    const loginFormHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <LoginFormContainer data={{
                facebookId: `${config.socialMedia.facebookId}`,
                googleId: `${config.socialMedia.googleId}`
            }}/>
        </IntlWrapper>
    );

    const preloadedState = store.getState();

    res.render('login', {
        userInfo: req.session.userInfo,
        loginFormHtml: loginFormHtml,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            facebookId: `${config.socialMedia.facebookId}`,
            googleId: `${config.socialMedia.googleId}`
        }),
    })
});

router.post('/login', async (req, res) => {
    const loginUrl = `${config.api.defaultApiUrl}/api/auth/login`;

    const response = await axios.post(loginUrl, req.body, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    });

    utils.setUserSession(req, response.data);

    // Update Language, Currency
    utils.setLanguage(res, response.data.languageCode);
    utils.setCurrency(res, response.data.preferredCurrency);

    // TODO: access token expired in 24 hours <> 30 days
    if (req.body.rememberMe) {
        req.session.cookie.maxAge = 30 * 24 * 3600000; // 30 days
    }
    else {
        req.session.cookie.expires = false;
    }

    res.json(response.data.languageCode);
});

//Register
router.get('/register', (req, res) => {
    if (req.session && req.session.userToken) {
        res.redirect(`${req.langUrl}/`);

        return;
    }
    const lang = req.locale;
    const translations = req.localeData[lang];

    const reCaptcha = {
        siteKey: config.reCaptcha.siteKey
    };

    const registerFormHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <RegisterFormContainer data={{
                facebookId: `${config.socialMedia.facebookId}`,
                googleId: `${config.socialMedia.googleId}`,
                reCaptcha: reCaptcha
            }}/>
        </IntlWrapper>
    );

    const preloadedState = store.getState();

    res.render('register.ejs', {
        registerFormHtml: registerFormHtml,
        userInfo: req.session.userInfo,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            facebookId: `${config.socialMedia.facebookId}`,
            googleId: `${config.socialMedia.googleId}`,
            reCaptcha: reCaptcha
        })
    })
});

router.post('/register', async (req, res) => {
    const registerUrl = `${config.api.defaultApiUrl}/public/user/register?g-recaptcha-response=${req.query['g-recaptcha-response']}`;
    const password = req.body.password || 'ff-' + passGen.generate({
        length: 8,
        numbers: true,
        symbols: true,
        uppercase: true,
        strict: true
    });

    const response = await axios.post(registerUrl, {
        ...req.body,
        password: password,
        languageId: req.langId,
        preferredCurrency: req.ccy
    });

    utils.setUserSession(req, response.data);

    // Update Language, Currency
    utils.setLanguage(res, response.data.languageCode);
    utils.setCurrency(res, response.data.preferredCurrency);

    res.json(response.data.languageCode);
});

//Logout
router.get('/logout', async (req, res) => {
    req.session.destroy(function () {
        res.redirect(`${req.langUrl}/`);
    });

});

router.get('/forgot-password', (req, res) => {
    if (req.session && req.session.userToken) {
        res.redirect(`${req.langUrl}/`);

        return;
    }

    const lang = req.locale;
    const translations = req.localeData[lang];
    const reCaptcha = {
        siteKey: config.reCaptcha.siteKey
    };

    const forgotPasswordHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <ForgotPasswordContainer data={{ reCaptcha: reCaptcha }}/>
        </IntlWrapper>
    );

    const preloadedState = store.getState();

    res.render('forgot.password.ejs', {
        userInfo: req.session.userInfo,
        forgotPasswordHtml: forgotPasswordHtml,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            reCaptcha: reCaptcha
        }),
    })
});

router.get('/reset-password', async (req, res) => {
    if ((req.session && req.session.userToken)
        || !req.query.sc || !req.query.email) {
        res.redirect(`${req.langUrl}/`);

        return;
    }
    const lang = req.locale;
    const translations = req.localeData[lang];

    const emailVerificationCode = req.query.sc;
    const email = req.query.email;

    let isSuccess = false;
    try {
        await axios.post(`${config.api.defaultApiUrl}/public/reset-password?sc=${emailVerificationCode}&email=${email}`);

        isSuccess = true;
    }
    catch (e) {

    }

    const preloadedState = store.getState();

    if (isSuccess) {
        const resetPasswordHtml = ReactDOMServer.renderToString(
            <IntlWrapper store={store} locale={lang} messages={translations}>
                <ResetPasswordContainer data={{
                    verificationCode: emailVerificationCode,
                    email: email
                }}/>
            </IntlWrapper>
        );

        res.render('reset.password.ejs', {
            userInfo: req.session.userInfo,
            resetPasswordHtml: resetPasswordHtml,
            preloadedState: JSON.stringify(preloadedState),
            isSuccess: isSuccess,
            appData: JSON.stringify({
                lang: lang,
                translations: translations,
                verificationCode: emailVerificationCode,
                email: email
            }),
        })
    }
    else {
        res.render('reset.password.ejs', {
            userInfo: req.session.userInfo,
            isSuccess: isSuccess,
            message: translations['forgot.password.code.expired'].replace('{langUrl}', req.langUrl),
            preloadedState: JSON.stringify(preloadedState),
            appData: JSON.stringify({
                lang: lang,
                translations: translations
            })
        })
    }
});

//Account Details
router.get('/my-account', requiredLogin, async (req, res) => {
    const currentPage = 'account';
    const lang = req.locale;
    const translations = req.localeData[lang];
    const general = await commonService.getGeneralData();
    const titles = ['common.please.select'].concat(general.titles);
    const expiryTime = general.expiryTime.timeToWaitForResendCode;

    const countryUrl = `${config.api.defaultApiUrl}/public/countries`;
    let response = await axios.get(countryUrl);
    let countries = [], passports = [];
    if (response.data && response.data.length) {
        countries = response.data.map((it) => {
            return { text: `${it.name} (+${it.countryCode})`, value: it.id, id: it.id, countryCode: it.countryCode }
        });

        passports = response.data.map((it) => {
            return { text: it.name, value: it.id }
        });
    }
    countries = [{ text: translations['common.please.select'], value: '', id: '' }].concat(countries);
    passports = [{ text: translations['common.please.select'], value: '' }].concat(passports);

    const userInfoUrl = `${config.api.defaultApiUrl}/api/users/me?id=${req.session.userInfo.userId}`;
    response = await axios.get(userInfoUrl);

    utils.setUserSession(req, response.data);

    const store = createStoreWithState({
        account: {
            details: response.data,
            pageName: currentPage
        }
    });
    const accountInfoContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <AccountContainer data={{
                expiryTime: expiryTime,
                titles: titles,
                countries: countries,
                passports: passports,
            }}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('account', {
        userInfo: req.session.userInfo,
        accountInfoContainerHtml: accountInfoContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        pageName: currentPage,
        pageTitle: translations['account.my.account'],
        appData: JSON.stringify({
            expiryTime: expiryTime,
            titles: titles,
            countries: countries,
            passports: passports,
            lang: lang,
            translations: translations
        })
    });
});

router.post('/update-account/:id', requiredLogin, async (req, res) => {
    const uid = req.params.id;
    const url = `${config.api.defaultApiUrl}/api/users/${uid}`;

    const body = req.body;
    if (body.profileImage && !body.profileImage.key) {
        delete body.profileImage;
    }

    const response = await axios.put(url, body);
    const userInfoUrl = `${config.api.defaultApiUrl}/api/users/me?id=${req.session.userInfo.userId}`;
    const accountInfo = await axios.get(userInfoUrl);
    utils.setUserSession(req, accountInfo.data);

    res.json(response.data);
});

router.get('/my-bookings', requiredLogin, async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const index = req.query.index ? req.query.index : 1;
    const size = req.query.size ? req.query.size : 10;

    const bookingsUrl = `${config.api.defaultApiUrl}/api/orders?&page.index=${index}&page.size=${size}&sort.field=id&sort.direction=DESC`;
    const response = await axios.get(bookingsUrl);
    const bookingsInfo = response.data;

    if (req.xhr) {//for pagination
        res.send(bookingsInfo);
        return;
    }

    const currentPage = 'bookings';

    const store = createStoreWithState({
        account: {
            details: bookingsInfo,
            pageName: currentPage
        }
    });
    const accountInfoContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <AccountContainer data={{}}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('account', {
        userInfo: req.session.userInfo,
        accountInfoContainerHtml: accountInfoContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        pageName: currentPage,
        pageTitle: translations['account.my.bookings'],
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    })
});

router.get('/my-bookings/:orderId/:itemId/:activityId/review', requiredLogin, async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const orderId = req.params.orderId;
    const itemId = req.params.itemId;
    const activityId = req.params.activityId;
    const reviewsUrl = `${config.api.defaultApiUrl}/api/review?orderId=${orderId}&orderItemId=${itemId}&activityId=${activityId}&langId=${req.langId}&ccy=${req.ccy}`;
    const response = await axios.get(reviewsUrl);
    const reviews = response.data;

    const currentPage = 'review-form';

    const store = createStoreWithState({
        account: {
            details: reviews,
            pageName: currentPage
        }
    });
    const accountInfoContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <AccountContainer data={{}}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('account', {
        userInfo: req.session.userInfo,
        accountInfoContainerHtml: accountInfoContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        pageName: currentPage,
        pageTitle: translations['common.reviews'],
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    })
});

router.get('/wish-list', requiredLogin, async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];

    const wishlistsUrl = `${config.api.defaultApiUrl}/api/wishlists`;
    const response = await axios.get(wishlistsUrl);
    const wishList = { data: response.data };
    const currentPage = 'wish-list';

    const store = createStoreWithState({
        account: {
            details: wishList,
            pageName: currentPage
        }
    });
    const accountInfoContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <AccountContainer data={{}}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('account', {
        userInfo: req.session.userInfo,
        accountInfoContainerHtml: accountInfoContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        pageName: currentPage,
        pageTitle: translations['account.wish.list'],
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    })

});

router.get('/my-coupons', requiredLogin, async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];

    const couponsUrl = `${config.api.defaultApiUrl}/api/coupons/me?langId=${req.langId}`;
    const response = await axios.get(couponsUrl);
    const couponsList = response.data;
    const couponInfo = {
        data: couponsList
    };

    if (req.xhr) {//refresh the coupons list after redeem
        res.send(couponInfo);
        return;
    }

    const currentPage = 'coupons';

    const store = createStoreWithState({
        account: {
            details: couponInfo,
            pageName: currentPage
        }
    });
    const accountInfoContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <AccountContainer data={{}}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('account', {
        userInfo: req.session.userInfo,
        accountInfoContainerHtml: accountInfoContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        pageName: currentPage,
        pageTitle: translations['account.coupons'],
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    })
});

router.get('/my-reviews', requiredLogin, async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const index = req.query.index ? req.query.index : 1;
    const size = req.query.size ? req.query.size : 10;

    const reviewsUrl = `${config.api.defaultApiUrl}/api/reviews?page.index=${index}&page.size=${size}&sort.field=id&sort.direction=DESC`;
    const response = await axios.get(reviewsUrl);
    const reviews = response.data;

    if (req.xhr) {//for pagination
        res.send(reviews);
        return;
    }

    const currentPage = 'reviews';

    const store = createStoreWithState({
        account: {
            details: reviews,
            pageName: currentPage
        }
    });
    const accountInfoContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <AccountContainer data={{}}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('account', {
        userInfo: req.session.userInfo,
        accountInfoContainerHtml: accountInfoContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        pageName: currentPage,
        pageTitle: translations['common.reviews'],
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    })

});

//it is for email Order Review
router.get('/reviews', async (req, res) => {
    const lang = req.locale;
    const translations = req.localeData[lang];
    const orderId = req.query.o;
    const itemId = req.query.ot;
    const activityId = req.query.a;
    const reviewKey = req.query.k;
    const reviewsUrl = `${config.api.defaultApiUrl}/public/review?orderId=${orderId}&orderItemId=${itemId}&activityId=${activityId}&key=${reviewKey}&langId=${req.langId}&ccy=${req.ccy}`;
    const response = await axios.get(reviewsUrl);
    const reviews = response.data;

    const currentPage = 'review-form';

    const store = createStoreWithState({
        account: {
            details: reviews,
            pageName: currentPage
        }
    });
    const accountInfoContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <AccountContainer data={{
                reviewKey: reviewKey
            }}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('review', {
        userInfo: req.session.userInfo,
        accountInfoContainerHtml: accountInfoContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        pageName: currentPage,
        pageTitle: translations['common.reviews'],
        appData: JSON.stringify({
            reviewKey: reviewKey,
            lang: lang,
            translations: translations
        })
    })
});

router.post('/public-reviews', async (req, res) => {
    const url = `${config.api.defaultApiUrl}/public/reviews?k=${req.query.k}`;
    const response = await axios.post(url, req.body);
    res.json(response.data);
});

router.get('/settings', requiredLogin, async (req, res) => {
    const currentPage = 'settings';
    const lang = req.locale;
    const translations = req.localeData[lang];

    const userInfoUrl = `${config.api.defaultApiUrl}/api/users/me?id=${req.session.userInfo.userId}`;
    const response = await axios.get(userInfoUrl);

    utils.setUserSession(req, response.data);
    // Update Language, Currency
    utils.setLanguage(res, response.data.languageCode);
    utils.setCurrency(res, response.data.preferredCurrency);

    const store = createStoreWithState({
        account: {
            details: {
                id: response.data.id,
                languageId: response.data.languageId,
                preferredCurrency: response.data.preferredCurrency
            },
            pageName: currentPage
        }
    });

    const general = await commonService.getGeneralData();
    const languages = [];
    general.languages.forEach((lang) => {
        if (lang.active) {
            languages.push({ text: lang.name, value: lang.id, code: lang.code });
        }
    });
    const currencies = general.acceptCurrencies.map((currency) => {
        return { text: currency, value: currency }
    });

    const accountInfoContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <AccountContainer data={{
                languages: languages,
                currencies: currencies,
            }}/>
        </IntlWrapper>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.render('account', {
        userInfo: req.session.userInfo,
        accountInfoContainerHtml: accountInfoContainerHtml,
        preloadedState: JSON.stringify(preloadedState),
        pageName: currentPage,
        pageTitle: translations['common.settings'],
        appData: JSON.stringify({
            languages: languages,
            currencies: currencies,
            lang: lang,
            translations: translations
        })
    })

});

router.get('/activate-account', async (req, res) => {
    const emailVerificationCode = req.query.sc;
    const email = req.query.email;

    const lang = req.locale;
    const translations = req.localeData[lang];

    let message = '';
    let isSuccess = false;

    try {
        await axios.put(`${config.api.defaultApiUrl}/public/activate-account?sc=${emailVerificationCode}&email=${email}`);

        message = translations['account.activation.success'];
        isSuccess = true;
    }
    catch (ex) {
        message = translations['account.activation.failed'];
    }

    const preloadedState = store.getState();

    res.render('account/activated', {
        userInfo: req.session.userInfo,
        message: message,
        isSuccess: isSuccess,
        preloadedState: JSON.stringify(preloadedState),
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    })
});

router.put('/verification/:type', requiredLogin, async (req, res) => {
    const url = `${config.api.defaultApiUrl}/api/users/${req.session.userInfo.userId}/${req.params.type}`;
    const response = await axios.put(url, req.body);
    res.json(response.data)
});

module.exports = router;
