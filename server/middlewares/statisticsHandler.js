import axios from 'axios';
import React from 'react';
import ShoppingCartPreviewContainer from '../../client/js/containers/ShoppingCartPreviewContainer';
import ShoppingCartMobileContainer from '../../client/js/containers/ShoppingCartMobileContainer';
import SearchBoxContainer from '../../client/js/containers/searchBox/SearchBoxContainer';
import EmailSubscribeContainer from '../../client/js/containers/footer/EmailSubscribeContainer';
import ReactDOMServer from 'react-dom/server';
import store from '../../client/js/redux/store';
import IntlWrapper from '../../IntlWrapper';
import utils from '../lib/utils';

const config = require('../../config');

export default async function statisticsHandler(req, res, next) {
    const lang = req.locale;
    const translations = req.localeData[lang];

    // CART COUNT
    res.locals.cartCount = 0;
    if (req.session && req.session.userToken) {
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        let dateTime = new Date();
        // CALL REFRESH TOKEN API BEFORE ACCESS TOKEN IS EXPIRED IN 5 MINUTES TIME
        dateTime.setMinutes(dateTime.getMinutes() + 5);

        if (req.session.refreshToken
            && req.session.expiryDateTime
            && new Date(req.session.expiryDateTime) <= dateTime) {
            try {
                const refreshTokenResponse = await axios.get(`${config.api.defaultApiUrl}/api/auth/token`, {
                    headers: {
                        'Authorization': `Bearer ${req.session.refreshToken}`
                    }
                });

                if (refreshTokenResponse.status === 200) {
                    console.log('REFRESH TOKEN');

                    utils.setUserSession(req, refreshTokenResponse.data);
                }
            } catch (ex) {
                delete req.session.refreshToken;
            }
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${req.session.userToken}`;

        try {
            const countCartResponse = await axios.get(`${config.api.defaultApiUrl}/api/carts/count`);

            if (countCartResponse.data > 0) {
                res.locals.cartCount = countCartResponse.data;
            }
        } catch (e) {
            if (e.response.status === 401) {
                // CAN NOT USE req.session.destroy() HERE (ERROR FOR NEXT MIDDLEWARE IS USING SESSION), JUST REMOVE SESSION DATA
                delete req.session.userInfo;
                delete req.session.userToken;
            }
        }
    }

    const cityResponse = await axios.get(`${config.api.defaultApiUrl}/public/countries/1/cities`);
    let keywordResponse = null;
    if (req.useragent.isDesktop) {
        if (req.url === '/') {
            keywordResponse = await axios.get(`${config.api.defaultApiUrl}/public/search-keywords`);
        }
    } else {
        keywordResponse = await axios.get(`${config.api.defaultApiUrl}/public/search-keywords`);
    }

    const searchBoxData = {
        keywords: keywordResponse ? keywordResponse.data : [],
        cities: cityResponse.data
    };

    res.locals.searchBoxData = JSON.stringify(searchBoxData);

    if (req.session && req.session.userToken) {
        const shoppingCartPreviewContainerHtml = ReactDOMServer.renderToString(
            <IntlWrapper store={store} locale={lang} messages={translations}>
                <ShoppingCartPreviewContainer/>
            </IntlWrapper>
        );
        const shoppingCartMobileContainerHtml = ReactDOMServer.renderToString(
            <IntlWrapper store={store} locale={lang} messages={translations}>
                <ShoppingCartMobileContainer/>
            </IntlWrapper>
        );

        res.locals.shoppingCartPreviewContainerHtml = shoppingCartPreviewContainerHtml;
        res.locals.shoppingCartMobileContainerHtml = shoppingCartMobileContainerHtml;
    }

    const searchBoxContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <SearchBoxContainer searchBoxData={searchBoxData}/>
        </IntlWrapper>
    );
    const emailSubscribeContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <EmailSubscribeContainer/>
        </IntlWrapper>
    );

    res.locals.searchBoxContainerHtml = searchBoxContainerHtml;
    res.locals.emailSubscribeContainerHtml = emailSubscribeContainerHtml;

    next();
}
