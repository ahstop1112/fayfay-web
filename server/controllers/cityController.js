import axios from 'axios';
import React from 'react';
import { createStoreWithState } from '../../client/js/redux/store';
import ReactDOMServer from 'react-dom/server';
import SearchContainer from '../../client/js/containers/SearchContainer';
import IntlWrapper from '../../IntlWrapper';
import Constants from 'fayfayConstants';
import commonService from '../services/commonService';
import cityService from '../services/cityService';
import { experienceSearchQueryString } from '../../client/js/utils/helpers';

const config = require('../../config');
const router = require('express').Router();

router.get('/city/:id([0-9]+)', async (req, res) => {
    const id = req.params.id;
    const cityData = await cityService.getById(id);

    res.redirect(301, `${req.langUrl}/city/${cityData.id}-${cityData.slug}`);
});

router.get('/city/:id-:slug', async (req, res) => {
    const id = req.params.id;
    const slug = req.params.slug;

    const cityData = await cityService.getById(id);
    if (cityData.slug !== slug) {
        res.redirect(301, `${req.langUrl}/city/${cityData.id}-${cityData.slug}`);

        return;
    }

    const lang = req.locale;
    const translations = req.localeData[lang];
    const general = await commonService.getGeneralData();
    const cities = await cityService.getCities(true);

    let dateFrom = req.query.dateFrom;
    const dateTo = req.query.dateTo;
    const priceRanges = req.query.priceRanges;
    const selectedCategories = req.query.categories;
    const noOfPax = req.query.noOfPax;
    const sortType = Constants.SORT_OPTIONS.find(item => item.name === (req.query.sortType || 'priorityCity'));

    let queryString = `&prices=true&categories=true&filters[0].field=cityId&filters[0].value=${id}&filters[0].operation=EQUALS`;

    queryString += experienceSearchQueryString(dateFrom, dateTo, noOfPax, selectedCategories, null, priceRanges, sortType);

    const response = await axios.get(
        `${config.api.defaultApiUrl}/public/activities?es=true&page.index=1&page.size=${Constants.SEARCH_DEFAULT_PAGE_SIZE}${queryString}`
    );

    const store = createStoreWithState({
        search: {
            searchResults: response.data.activities.data || [],
            totalCount: response.data.activities.totalCount,
            totalPage: response.data.activities.totalPage,
            pageIndex: response.data.activities.page.index,
            pageSize: response.data.activities.page.size,
            activityCategories: response.data.categories || [],
            pageRequested: 0
        }
    });

    const preloadedState = store.getState();

    const searchContainerHtml = ReactDOMServer.renderToString(
        <IntlWrapper store={store} locale={lang} messages={translations}>
            <SearchContainer data={{
                categories: general.categories,
                cityName: cityData.name,
                dateFrom,
                dateTo,
                selectedCategories,
                priceRanges,
                noOfPax,
                sortType
            }}/>
        </IntlWrapper>
    );

    res.render('city', {
        searchContainerHtml,
        citiesSpotlight: cities,
        cityData: cityData,
        preloadedState: JSON.stringify(preloadedState),
        userInfo: req.session.userInfo,
        appData: JSON.stringify({
            lang: lang,
            translations: translations,
            cityId: id,
            cityName: cityData.name,
            categories: general.categories,
            dateFrom,
            dateTo,
            selectedCategories,
            priceRanges,
            noOfPax,
            sortType
        })
    });
});

module.exports = router;
