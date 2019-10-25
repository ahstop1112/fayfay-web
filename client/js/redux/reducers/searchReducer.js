export const FETCH_MORE_RESULTS = 'fayfay/search/fetchMoreResults';
export const FETCH_SEARCH_RESULTS = 'fayfay/search/fetchSearchResults';
export const FETCH_SEARCH_CATEGORIES_RESULTS = 'fayfay/search/fetchSearchCategoriesResults';
export const FETCH_CITES = 'fayfay/search/fetchSearchBoxCities';
export const PAGEINDEX_REQUESTED = 'fayfay/search/pageRequested';
export const RESET_SEARCH_RESULTS = 'fayfay/search/reset';
export const FETCH_SEARCH_KEYWORDS = 'fayfay/search/fetchKeywords';
import Constants from 'fayfayConstants';

const initialState = {
    searchResults: [],
    searchKeywords: [],
    activityCategories: [],
    activityCities: [],
    totalCount: 0,
    totalPage: 0,
    pageIndex: 1,
    pageSize: Constants.SEARCH_DEFAULT_PAGE_SIZE,
    minPrice: 0,
    maxPrice: 0,
    pageRequested: 0,
    //for SearchBox and Search filter
    citiesAll: []
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_SEARCH_CATEGORIES_RESULTS:
            return {
                ...state,
                searchResults: action.searchResults,
                totalCount: action.totalCount,
                totalPage: action.totalPage,
                pageIndex: action.pageIndex,
                pageSize: action.pageSize,
            };
        case FETCH_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.searchResults,
                totalCount: action.totalCount,
                totalPage: action.totalPage,
                pageIndex: action.pageIndex,
                pageSize: action.pageSize,
                activityCategories: action.activityCategories.length > 0 ? action.activityCategories : state.activityCategories,
                activityCities: action.activityCities.length > 0 ? action.activityCities : state.activityCities
            };
        case FETCH_MORE_RESULTS:
            return {
                ...state,
                searchResults: [...state.searchResults, ...action.searchResults],
                pageIndex: action.pageIndex,
            };
        case FETCH_CITES:
            return {
                ...state,
                citiesAll: action.citiesAll
            };
        case PAGEINDEX_REQUESTED:
            return {
                ...state,
                pageRequested: action.pageRequested
            };
        case RESET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: [],
                totalCount: 0,
                totalPage: 0,
                pageIndex: 1,
                pageSize: Constants.SEARCH_DEFAULT_PAGE_SIZE,
            };
        case FETCH_SEARCH_KEYWORDS:
            return {
                ...state,
                searchKeywords: action.searchKeywords
            }
        default:
            return state;
    }
}
