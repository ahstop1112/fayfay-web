import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchActivities, searchMoreActivities, storePageRequested } from '../redux/actions/searchActions';
import SearchFilter from './search/SearchFilter';
import SearchResults from './search/SearchResults';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import classNames from 'classnames';
import { scrollToTop } from '../utils/validators';
import _ from 'lodash';
import { isScrolledIntoView } from '../utils/helpers';
import querystring from 'querystring';
import Constants from 'fayfayConstants';

class SearchContainer extends Component {
    static propTypes = {
        data: PropTypes.object,
        searchResults: PropTypes.array.isRequired,
        searchActivities: PropTypes.func.isRequired,
        searchMoreActivities: PropTypes.func.isRequired,
        totalPage: PropTypes.number.isRequired,
        totalCount: PropTypes.number.isRequired,
        pageIndex: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        activityCities: PropTypes.array,
        activityCategories: PropTypes.array.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        citiesAll: PropTypes.array,
        pageRequested: PropTypes.number.isRequired,
        storePageRequested: PropTypes.func.isRequired
    };

    static defaultProps = {
        data: {
            keyword: '',
            category: '',
            subCategory: '',
            cityId: null,
            categories: [],
            citiesAll: []
        }
    };

    constructor(props) {
        super(props);

        const { data } = this.props;

        let defaultSortType = { name: 'ranking', field: 'ranking', sortDirection: 'ASC' };
        if (this.props.data.cityName) {
            defaultSortType = { name: 'priorityCity', field: 'priorityCity', sortDirection: 'ASC' };
        } else if (this.props.data.category) {
            defaultSortType = { name: 'priorityCategory', field: 'priorityCategory', sortDirection: 'ASC' };
        }

        this.state = {
            dateFromFocusedDesktop: false,
            dateToFocusedDesktop: false,
            dateFromFocused: false,
            dateToFocused: false,
            dateFrom: data.dateFrom ? moment(data.dateFrom) : null,
            dateTo: data.dateTo ? moment(data.dateTo) : null,
            sortType: data.sortType || defaultSortType,
            noOfPax: data.noOfPax || '',
            searchComplete: false,
            selectedCategories: data.selectedCategories ? data.selectedCategories.split(',') : [],
            selectedCities: data.selectedCities ? data.selectedCities.split(',') : [],
            selectedPriceRanges: data.priceRanges ? data.priceRanges.split(',') : [],
            isRequestSubset: false
        };
    }

    scrollTop = () => {
        const element = document.querySelector('.filter-result');
        if (element && window.scrollTo) {
            const top = window.pageYOffset + element.getBoundingClientRect().top - 100;
            scrollToTop(top, 500);
        }
    };

    toggleMobileFilter = () => {

        if (!this.state.showMobileFilter) {
            document.body.classList.add('popup');
        } else {
            document.body.classList.remove('popup');
            var scrollSectionTop = document.getElementById('search-container').offsetTop - 100;
            window.scrollTo(0, scrollSectionTop);
        }

        this.setState({
            showMobileFilter: !this.state.showMobileFilter,
            showMobileSortBy: false
        });

    };

    toggleMobileSortBy = () => {
        this.setState({
            showMobileSortBy: !this.state.showMobileSortBy,
            showMobileFilter: false
        });
    };

    toggleMobileResult = () => {
        $(document.body).toggleClass('popup');

        this.setState({
            showMobileResult: !this.state.showMobileResult,
            showMobileFilter: false,
            showMobileSortBy: false
        });
    };

    onScrollingResult = (e) => {
        _.throttle(this.loadMoreActivities, 100)(); //iPad & mobile scroll
    };

    changeSearchCriteria = (searchCriteria, reset) => {
        this.setState(
            {
                ...searchCriteria
            }, () => {
                this.setState({
                    // showMobileFilter: false
                }, this.onSearch(1));
            }
        );
    };

    replacer = (key, value) => {
        if (!value) {
            return undefined;
        }
        return value;
    };

    onSearch = (pageIndex) => {
        const { data } = this.props;

        if (window.history.pushState) {
            let query = JSON.stringify({
                keyword: data.keyword,
                dateFrom: this.state.dateFrom ? moment(this.state.dateFrom).format('YYYY-MM-DD') : null,
                dateTo: this.state.dateTo ? moment(this.state.dateTo).format('YYYY-MM-DD') : null,
                categories: this.state.selectedCategories.join(','),
                cities: this.state.selectedCities.join(','),
                priceRanges: this.state.selectedPriceRanges.join(','),
                noOfPax: this.state.noOfPax,
                sortType: this.state.sortType.name,
            }, this.replacer);
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${querystring.stringify(JSON.parse(query))}`;
            window.history.pushState({ path: newurl }, '', newurl);
        }

        let mySelectedCategories = this.state.selectedCategories;
        if (this.props.data.category != null) {
            if (mySelectedCategories.length === 0) {
                mySelectedCategories = this.props.activityCategories.map(it => {
                    return it.id
                })
            }
            this.scrollTop();
        } else if (this.props.data.keyword != null) {
            window.scrollTo(0, 0);
        } else if (this.props.data.cityId != null) {
            this.scrollTop();
        }

        this.props.storePageRequested(pageIndex);
        this.props.searchActivities(
            this.props.data.keyword,
            this.props.data.cityId,
            this.state.dateFrom ? moment(this.state.dateFrom).format('YYYY-MM-DD') : '',
            this.state.dateTo ? moment(this.state.dateTo).format('YYYY-MM-DD') : '',
            this.state.sortType,
            this.state.noOfPax,
            pageIndex,
            this.props.pageSize,
            mySelectedCategories,
            this.state.selectedCities,
            this.state.selectedPriceRanges,
            this.state.isRequestSubset,
            this.props.data.category
        );
    };

    loadMoreActivities = () => {
        const { pageIndex, totalPage, searchResults, pageRequested } = this.props;
        if (searchResults.length > 0 && totalPage > 1) {
            const visibility = isScrolledIntoView(`.list-item.ap-${searchResults.length - 7}`); //page size is 18 by default in constant SEARCH_DEFAULT_PAGE_SIZE =18, now I set, load next page data when the 12th item (18-7=11, index start from 0) show up of current page data..
            const i = pageIndex + 1;
            if (visibility && i <= totalPage && i > pageRequested) {
                this.props.storePageRequested(i);
                let mySelectedCategories = this.state.selectedCategories;
                if (this.props.data.category != null && mySelectedCategories.length === 0) {
                    mySelectedCategories = this.props.activityCategories.map(it => {
                        return it.id
                    })
                }

                this.props.searchMoreActivities(
                    this.props.data.keyword,
                    this.props.data.cityId,
                    this.state.dateFrom ? moment(this.state.dateFrom).format('YYYY-MM-DD') : '',
                    this.state.dateTo ? moment(this.state.dateTo).format('YYYY-MM-DD') : '',
                    this.state.sortType,
                    this.state.noOfPax,
                    i,
                    this.props.pageSize,
                    mySelectedCategories,
                    this.state.selectedCities,
                    this.state.selectedPriceRanges,
                    this.state.isRequestSubset
                );
            }
        }
    };

    mobileSortByFn = (sortType) => {
        if (sortType === this.state.sortType.name) {
            return () => {
                this.setState({
                    showMobileSortBy: false
                });
            }
        }

        return () => {
            const selectedSortType = sortType ? Constants.SORT_OPTIONS.find(item => item.name === sortType) : null;
            this.changeSearchCriteria({ sortType: selectedSortType });

            this.setState({
                sortBy: sortType,
                showMobileSortBy: false
            });
        }
    };

    componentDidMount() {
        this.setState({
            searchComplete: true
        });

        //window scroll throttle works for desktop scrolling, not work on iPad/Mobile 'onScrollingResult'
        window.addEventListener('scroll', _.throttle(this.loadMoreActivities, 100), false);
    }

    render() {
        const {
            data, ajaxStatus,
            searchResults, totalCount,
            activityCategories, activityCities,
            citiesAll
        } = this.props;

        return (
            <div id="search-container-scrolling">
                <div
                    className={classNames('filter-sorting-mobile-btn', {
                        open: this.state.showMobileResult
                    })}
                >
                    <div className={classNames("title", { open: this.state.showMobileFilter })}
                         onClick={this.toggleMobileFilter}>
                        <i className="icon sliders mobile-filter"/>
                        <FormattedMessage id="search.filter"/>
                    </div>
                    <div className="line"/>
                    <div className={classNames("title", { open: this.state.showMobileSortBy })}
                         onClick={this.toggleMobileSortBy}>
                        <i className="icon sorting mobile-sorting"/>
                        <FormattedMessage id="search.sortBy"/>
                    </div>
                </div>
                <div className={classNames("sortby-mobile-overlay", { open: this.state.showMobileSortBy })}>
                    {data.cityName && <a onClick={this.mobileSortByFn('priorityCity')}
                                         className={classNames('sortby-type', { active: this.state.sortType.name === 'priorityCity' })}>
                        <FormattedMessage id="search.recommended"/>
                    </a>}
                    {!data.cityName &&
                    <a onClick={this.mobileSortByFn(data.category ? 'priorityCategory' : 'ranking')}
                       className={classNames('sortby-type', { active: this.state.sortType.name === 'priorityCategory' || this.state.sortType.name === 'ranking' })}>
                        <FormattedMessage id="search.relevance"/>
                    </a>}
                    <a onClick={this.mobileSortByFn('date_asc')}
                       className={classNames('sortby-type', { active: this.state.sortType.name === 'date_asc' })}>
                        <FormattedMessage id="search.sortDate"/>
                    </a>
                    <a onClick={this.mobileSortByFn('price_desc')} id=""
                       className={classNames('sortby-type', { active: this.state.sortType.name === 'price_desc' })}>
                        <FormattedMessage id="search.sortPrice"/>
                    </a>
                    <a onClick={this.mobileSortByFn('price_asc')}
                       className={classNames('sortby-type', { active: this.state.sortType.name === 'price_asc' })}>
                        <FormattedMessage id="search.sortPriceAscending"/>
                    </a>
                    <a onClick={this.mobileSortByFn('rating_desc')}
                       className={classNames('sortby-type', { active: this.state.sortType.name === 'rating_desc' })}>
                        <FormattedMessage id="search.sortRating"/>
                    </a>
                </div>
                <section className="search-container">
                    <div className={classNames("filter-all noScroll", { open: this.state.showMobileFilter })}>
                        <SearchFilter
                            subCategory={data.subCategory}
                            category={data.category}
                            categories={data.categories}
                            citiesAll={citiesAll}
                            totalCount={totalCount}
                            changeSearchCriteria={this.changeSearchCriteria}
                            activityCities={activityCities}
                            activityCategories={activityCategories}
                            toggleMobileFilter={this.toggleMobileFilter}
                            toggleMobileSortBy={this.toggleMobileSortBy}
                            toggleMobileResult={this.toggleMobileResult}
                            cityName={data.cityName}
                            sortType={this.state.sortType}
                            noOfPax={this.state.noOfPax}
                            dateFrom={this.state.dateFrom}
                            dateTo={this.state.dateTo}
                            selectedCategories={this.state.selectedCategories}
                            selectedCities={this.state.selectedCities}
                            selectedPriceRanges={this.state.selectedPriceRanges}
                        />
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 filter-result noScroll"
                                 onScroll={this.onScrollingResult}>
                                <SearchResults
                                    ajaxStatus={ajaxStatus}
                                    results={searchResults}
                                    totalCount={totalCount}
                                    keyword={data.keyword}
                                    category={data.category}
                                    cityName={data.cityName}
                                    searchComplete={this.state.searchComplete}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus,
        searchResults: state.search.searchResults,
        pageSize: state.search.pageSize,
        pageIndex: state.search.pageIndex,
        totalPage: state.search.totalPage,
        totalCount: state.search.totalCount,
        activityCities: state.search.activityCities,
        activityCategories: state.search.activityCategories,
        citiesAll: state.search.citiesAll,
        pageRequested: state.search.pageRequested,
    };
};

export default connect(
    mapStateToProps,
    { searchActivities, searchMoreActivities, storePageRequested }
)(SearchContainer);
