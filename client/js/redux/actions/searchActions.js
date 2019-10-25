import { FETCH_COMPLETE, FETCH_PENDING, SERVER_ERROR } from '../reducers/ajaxStatusReducers';
import {
    FETCH_CITES, FETCH_SEARCH_RESULTS, FETCH_MORE_RESULTS, PAGEINDEX_REQUESTED, RESET_SEARCH_RESULTS,
    FETCH_SEARCH_CATEGORIES_RESULTS, FETCH_SEARCH_KEYWORDS
} from '../reducers/searchReducer';
import axios from 'axios/index';
import { formatDate } from '../../utils/helpers';

export function searchMoreActivities(keyword,
                                     cityId,
                                     dateFrom,
                                     dateTo,
                                     sortBy,
                                     noOfPax,
                                     pageIndex,
                                     pageSize,
                                     selectedCategories,
                                     selectedCities,
                                     selectedPriceRanges,
                                     isRequestSubset) {
    return async dispatch => {
        dispatch({
            type: FETCH_PENDING
        });

        try {

            const url = searchUrl(keyword,
                cityId,
                dateFrom,
                dateTo,
                sortBy,
                noOfPax,
                pageIndex,
                pageSize,
                selectedCategories,
                selectedCities,
                selectedPriceRanges,
                isRequestSubset);

            const response = await axios.get(url);
            // API DOES NOT RETURN cities, categories object if NULL, SO SET DUMMY DATA IF REQUEST SUBSET

            dispatch({
                type: FETCH_MORE_RESULTS,
                searchResults: response.data.activities.data || [],
                pageIndex: response.data.activities.page.index
            });

            dispatch({
                type: FETCH_COMPLETE
            });

        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function searchActivities(keyword,
                                 cityId,
                                 dateFrom,
                                 dateTo,
                                 sortBy,
                                 noOfPax,
                                 pageIndex,
                                 pageSize,
                                 selectedCategories,
                                 selectedCities,
                                 selectedPriceRanges,
                                 isRequestSubset,
                                 categoryPage) {
    return async dispatch => {
        dispatch({
            type: RESET_SEARCH_RESULTS
        });
        dispatch({
            type: FETCH_PENDING
        });

        try {

            const url = searchUrl(keyword,
                cityId,
                dateFrom,
                dateTo,
                sortBy,
                noOfPax,
                pageIndex,
                pageSize,
                selectedCategories,
                selectedCities,
                selectedPriceRanges,
                isRequestSubset);

            const response = await axios.get(url);

            if (categoryPage) {
                dispatch({
                    type: FETCH_SEARCH_CATEGORIES_RESULTS,
                    searchResults: response.data.activities.data || [],
                    totalCount: response.data.activities.totalCount,
                    totalPage: response.data.activities.totalPage,
                    pageIndex: response.data.activities.page.index,
                    pageSize: response.data.activities.page.size
                });
            } else {
                // API DOES NOT RETURN cities, categories object if NULL, SO SET DUMMY DATA IF REQUEST SUBSET
                dispatch({
                    type: FETCH_SEARCH_RESULTS,
                    searchResults: response.data.activities.data || [],
                    totalCount: response.data.activities.totalCount,
                    totalPage: response.data.activities.totalPage,
                    pageIndex: response.data.activities.page.index,
                    pageSize: response.data.activities.page.size,
                    activityCategories: isRequestSubset ? (response.data.categories || [{
                        id: 0,
                        count: 0
                    }]) : (response.data.categories || []),
                    activityCities: isRequestSubset ? (response.data.cities || [{
                        id: 0,
                        count: 0
                    }]) : (response.data.cities || [])
                });
            }

            dispatch({
                type: FETCH_COMPLETE
            });

        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

const searchUrl = (keyword,
                   cityId,
                   dateFrom,
                   dateTo,
                   sortBy,
                   noOfPax,
                   pageIndex,
                   pageSize,
                   selectedCategories,
                   selectedCities,
                   selectedPriceRanges,
                   isRequestSubset) => {
    let query = '';

    if (keyword) {
        query += `&filters[0].field=keyword&filters[0].value=${encodeURIComponent(keyword)}`;

        if (!sortBy) {
            sortBy = { 'field': 'ranking', 'sortDirection': 'ASC' };
        }
    }
    if (dateTo && !dateFrom) {
        dateFrom = formatDate(new Date(), 'YYYY-MM-DD');
    }
    if (dateFrom) {
        query += `&filters[1].field=dateFrom&filters[1].value=${dateFrom}`;
    }
    if (dateTo) {
        query += `&filters[2].field=dateTo&filters[2].value=${dateTo}`;
    }
    if (cityId) {
        query += `&filters[5].field=cityId&filters[5].value=${cityId}&filters[5].operation=EQUALS`;
    }
    if (noOfPax) {
        query += `&filters[6].field=pax&filters[6].value=${noOfPax}&filters[6].operation=GREATER_THAN_OR_EQUAL`;
    }

    if (isRequestSubset || (!selectedCategories.length && !selectedCities.length && !selectedPriceRanges.length && pageIndex === 1)) {
        query += `&categories=true&cities=true`;
    }

    if (selectedCategories.length) {
        query += `&filters[7].field=categoryId&filters[7].value=${selectedCategories.join(',')}&filters[7].operation=IN`
    }
    if (selectedCities.length) {
        query += `&filters[8].field=cityId&filters[8].value=${selectedCities.join(',')}&filters[8].operation=IN`
    }
    if (selectedPriceRanges.length) {
        query += `&filters[9].field=priceRange&filters[9].value=${selectedPriceRanges.join(',')}&filters[9].operation=IN`
    }

    return `/public/activities?es=true&page.index=${pageIndex}&page.size=${pageSize}&sort.field=${sortBy ? sortBy.field :
        'priorityCity'}&sort.direction=${sortBy ? sortBy.sortDirection : 'ASC'}${query}`;
};

export function storePageRequested(pageIndex) {
    return async dispatch => {
        dispatch({
            type: PAGEINDEX_REQUESTED,
            pageRequested: pageIndex
        })
    }
}

export function fetchCities() {
    return async dispatch => {
        try {
            const response = await axios.get('/public/countries/1/cities');

            dispatch({
                type: FETCH_CITES,
                citiesAll: response.data || []
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function fetchPopularKeywords() {
    return async dispatch => {
        try {
            const response = await axios.get('/public/search-keywords');

            dispatch({
                type: FETCH_SEARCH_KEYWORDS,
                searchKeywords: response.data || []
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}
