import axios from "axios";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import store, { createStoreWithState } from '../../client/js/redux/store';
import SearchContainer from '../../client/js/containers/SearchContainer';
import IntlWrapper from '../../IntlWrapper';
import config from '../../config';
import Constants from 'fayfayConstants';
import querystring from 'querystring';
import cityService from '../services/cityService';
import commonService from '../services/commonService';
import activityService from "../services/activityService";
import { experienceSearchQueryString } from "../../client/js/utils/helpers";

const router = require('express').Router();

router.get('/search', async (req, res) => {
    const keyword = req.query.keyword;
    let dateFrom = req.query.dateFrom;
    const dateTo = req.query.dateTo;
    const priceRanges = req.query.priceRanges;
    const selectedCities = req.query.cities;
    const selectedCategories = req.query.categories;
    const noOfPax = req.query.noOfPax;
    const sortType = Constants.SORT_OPTIONS.find(item => item.name === (req.query.sortType || 'ranking'));

    if (!keyword || !keyword.replace(/"/gi, '')) {
        res.status(400);
        res.render('error');

        return;
    }

    if (keyword.match(/[0-9]{5}/)) {
        try {
            const activityData = await activityService.getById(req, keyword);

            res.redirect(301, `${req.langUrl}/experience/${activityData.id}-${activityData.slug}`);

            return;
        } catch (ex) {

        }
    }

    const lang = req.locale;
    const translations = req.localeData[lang];

    let queryString = `&prices=true&categories=true&cities=true&filters[0].field=keyword&filters[0].value=${encodeURIComponent(keyword)}`;

    queryString += experienceSearchQueryString(dateFrom, dateTo, noOfPax, selectedCategories, selectedCities, priceRanges, sortType);

    const response = await axios.get(
        `${config.api.defaultApiUrl}/public/activities?es=true&page.index=1&page.size=${Constants.SEARCH_DEFAULT_PAGE_SIZE}${queryString}`
    );

    if (response.data.activities.totalCount) {
        const general = await commonService.getGeneralData();
        const cities = await cityService.getCities();

        const store = createStoreWithState({
            search: {
                searchResults: response.data.activities.data || [],
                totalCount: response.data.activities.totalCount,
                totalPage: response.data.activities.totalPage,
                pageIndex: response.data.activities.page.index,
                pageSize: response.data.activities.page.size,
                activityCategories: response.data.categories || [],
                activityCities: response.data.cities || [],
                pageRequested: 0,
                citiesAll: cities
            }
        });

        const searchContainerHtml = ReactDOMServer.renderToString(
            <IntlWrapper store={store} locale={lang} messages={translations}>
                <SearchContainer data={{
                    categories: general.categories,
                    keyword: keyword,
                    dateFrom,
                    dateTo,
                    selectedCities,
                    selectedCategories,
                    priceRanges,
                    noOfPax,
                    sortType
                }}/>
            </IntlWrapper>
        );
        const preloadedState = store.getState();

        res.render('search', {
            searchContainerHtml,
            preloadedState: JSON.stringify(preloadedState),
            userInfo: req.session.userInfo,
            appData: JSON.stringify({
                lang: lang,
                translations: translations,
                categories: general.categories,
                keyword: keyword,
                dateFrom,
                dateTo,
                selectedCities,
                selectedCategories,
                priceRanges,
                noOfPax,
                sortType
            })
        });
    } else {
        const queryObject = {
            'sort.field': 'priority',
            'sort.direction': 'ASC',
            'filters[0].field': 'priority',
            'filters[0].value': 1,
            'filters[0].operation': 'GREATER_THAN_OR_EQUAL',
        };

        const preloadedState = store.getState();
        const cities = await cityService.getCities(true);

        // TODO: API should combine request to reduce round trip
        const popularActivityUrl = `${config.api.defaultApiUrl}/public/activities?${querystring.stringify(queryObject)}`;

        const popularActivityGetResponse = await axios.get(popularActivityUrl);

        const recommendedActivityUrl = `${config.api.defaultApiUrl}/public/activities/sections?section=RECOMMENDED`;

        const recommendedActivityGetResponse = await axios.get(recommendedActivityUrl);
        const recommendedActivities = recommendedActivityGetResponse.data.filter(it => it.recommended);
        const footerVideoActivity = recommendedActivityGetResponse.data.find(it => it.footerVideo);

        res.render('search.noresult.ejs', {
            userInfo: req.session.userInfo,
            citiesSpotlight: cities,
            popularActivities: popularActivityGetResponse.data.activities.data,
            recommendedActivities: recommendedActivities,
            footerVideoActivity: footerVideoActivity,
            preloadedState: JSON.stringify(preloadedState),
            keyword: keyword,
            appData: JSON.stringify({
                lang: lang,
                translations: translations
            })
        });
    }

});

router.get(['/category/:category', '/category/:category/:subCategory'], async (req, res) => {
    let cat = req.params.category, subCat = req.params.subCategory;
    if (subCat) {
        cat = subCat;
    }

    const lang = req.locale;
    const translations = req.localeData[lang];

    let categoryId = '', categories = [];
    const general = await commonService.getGeneralData();
    if (subCat) {
        for (let index = 0; index < general.categories.length; index++) {
            if (general.categories[index].items) {
                categories = general.categories[index].items.filter(it => it.slug.toUpperCase() === subCat.toUpperCase());
                if (categories.length) {
                    categoryId = categories[0].id;
                    cat = general.categories[index].value;
                    subCat = categories[0].value;
                    break;
                }
            }
        }
    } else {
        categories = general.categories.filter(it => it.slug.toUpperCase() === cat.toUpperCase());
        if (categories.length) {
            cat = categories[0].value;
            if (categories[0].items) {
                categoryId = categories[0].items.map(cat => cat.id).join(',')
            }
        }
    }

    if (categoryId) {
        let dateFrom = req.query.dateFrom;
        const dateTo = req.query.dateTo;
        const priceRanges = req.query.priceRanges;
        const selectedCities = req.query.cities;
        const selectedCategories = req.query.categories || `${categoryId}`;
        const noOfPax = req.query.noOfPax;
        const sortType = Constants.SORT_OPTIONS.find(item => item.name === (req.query.sortType || 'priorityCategory'));
        let queryString = `&prices=true&categories=true&cities=true${experienceSearchQueryString(dateFrom, dateTo, noOfPax, selectedCategories, selectedCities, priceRanges, sortType)}`;
        const response = await axios.get(
            `${config.api.defaultApiUrl}/public/activities?es=true&page.index=1&page.size=${Constants.SEARCH_DEFAULT_PAGE_SIZE}${queryString}`
        );

        if (response.data.activities.totalCount) {
            const cities = await cityService.getCities();
            const spotLightCities = await cityService.getCities(true);

            let activityCategories = [];
            if (response.data.categories) {
                if (subCat) {
                    activityCategories.push(response.data.categories.find(it => it.id === categories[0].id));
                } else {
                    response.data.categories.forEach(it => {
                        const match = categories[0].items.find(item => item.id === it.id);
                        if (match) {
                            activityCategories.push(it);
                        }
                    })
                }
            }

            const store = createStoreWithState({
                search: {
                    searchResults: response.data.activities.data || [],
                    totalCount: response.data.activities.totalCount,
                    totalPage: response.data.activities.totalPage,
                    pageIndex: response.data.activities.page.index,
                    pageSize: response.data.activities.page.size,
                    activityCategories: activityCategories,
                    activityCities: response.data.cities || [],
                    pageRequested: 0,
                    citiesAll: cities
                }
            });

            const searchContainerHtml = ReactDOMServer.renderToString(
                <IntlWrapper store={store} locale={lang} messages={translations}>
                    <SearchContainer data={{
                        categories: categories,
                        category: subCat || cat,
                        subCategory: subCat,
                        dateFrom,
                        dateTo,
                        selectedCities,
                        selectedCategories,
                        priceRanges,
                        noOfPax,
                        sortType
                    }}/>
                </IntlWrapper>
            );
            const preloadedState = store.getState();

            res.render('category', {
                searchContainerHtml,
                preloadedState: JSON.stringify(preloadedState),
                userInfo: req.session.userInfo,
                citiesSpotlight: spotLightCities,
                categorySlug: req.params.category,
                categoryTxt: cat,
                subCategoryTxt: subCat,
                appData: JSON.stringify({
                    lang: lang,
                    translations: translations,
                    categories: categories,
                    category: subCat || cat,
                    subCategory: subCat,
                    dateFrom,
                    dateTo,
                    selectedCities,
                    selectedCategories,
                    priceRanges,
                    noOfPax,
                    sortType
                })
            });
        } else {
            await searchNoResult(req, res, subCat || cat, lang, translations);
        }
    } else {
        await searchNoResult(req, res, cat, lang, translations);
    }

});

async function searchNoResult(req, res, cat, lang, translations) {
    const queryObject = {
        'sort.field': 'priority',
        'sort.direction': 'DESC',
        'filters[0].field': 'priority',
        'filters[0].value': 1,
        'filters[0].operation': 'GREATER_THAN_OR_EQUAL',
    };

    const preloadedState = store.getState();
    const cities = await cityService.getCities(true);

    // TODO: API should combine request to reduce round trip
    const popularActivityUrl = `${config.api.defaultApiUrl}/public/activities?${querystring.stringify(queryObject)}`;

    const popularActivityGetResponse = await axios.get(popularActivityUrl);

    const recommendedActivityUrl = `${config.api.defaultApiUrl}/public/activities/sections?section=RECOMMENDED`;

    const recommendedActivityGetResponse = await axios.get(recommendedActivityUrl);
    const recommendedActivities = recommendedActivityGetResponse.data.filter(it => it.recommended);
    const footerVideoActivity = recommendedActivityGetResponse.data.find(it => it.footerVideo);

    res.render('search.noresult.ejs', {
        userInfo: req.session.userInfo,
        citiesSpotlight: cities,
        popularActivities: popularActivityGetResponse.data.activities.data,
        recommendedActivities: recommendedActivities,
        footerVideoActivity: footerVideoActivity,
        preloadedState: JSON.stringify(preloadedState),
        keyword: cat,
        appData: JSON.stringify({
            lang: lang,
            translations: translations
        })
    });
}

module.exports = router;
