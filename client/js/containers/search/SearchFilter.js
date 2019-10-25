import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import '../../../../node_modules/react-dates/lib/css/_datepicker.css';
import Constants from 'fayfayConstants';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, isInclusivelyAfterDay } from 'react-dates';
import Select from 'react-select';
import classNames from 'classnames';
import SearchCategory from './SearchCategory';

export class SearchFilter extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        categories: PropTypes.array.isRequired,
        citiesAll: PropTypes.array,
        totalCount: PropTypes.number.isRequired,
        toggleMobileFilter: PropTypes.func.isRequired,
        toggleMobileSortBy: PropTypes.func.isRequired,
        toggleMobileResult: PropTypes.func.isRequired,
        changeSearchCriteria: PropTypes.func.isRequired,
        cityName: PropTypes.string,
        activityCities: PropTypes.array,
        activityCategories: PropTypes.array.isRequired,
        category: PropTypes.string,
        subCategory: PropTypes.string,
        noOfPax: PropTypes.string,
        sortType: PropTypes.object,
        dateFrom: PropTypes.object,
        dateTo: PropTypes.object,
        selectedCategories: PropTypes.array.isRequired,
        selectedCities: PropTypes.array.isRequired,
        selectedPriceRanges: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            dateFromFocused: false,
            dateToFocused: false,
            showDefaultIcon: false,
            noOfPax: this.props.noOfPax,
            dateFrom: this.props.dateFrom,
            dateTo: this.props.dateTo,
            selectedCategories: this.props.selectedCategories,
            selectedCities: this.props.selectedCities,
            selectedPriceRanges: this.props.selectedPriceRanges,
            isRequestSubset: false,
            showAllCategories: false,
            showAllCities: false,
            showDropdownCategory: false
        };

    }

    updateSearchCriteria = (reset) => {

        this.props.changeSearchCriteria({
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
            noOfPax: this.state.noOfPax,
            selectedCategories: this.state.selectedCategories,
            selectedCities: this.state.selectedCities,
            selectedPriceRanges: this.state.selectedPriceRanges,
            isRequestSubset: this.state.isRequestSubset
        }, reset);
    };

    onDatesChange = (startDate, endDate) => {
        this.setState({
            dateFrom: startDate,
            dateTo: endDate,
            isRequestSubset: true

        }, this.updateSearchCriteria);
    };

    onNoOfPaxChange = e => {
        this.setState({
            noOfPax: e ? e.value : '',
            isRequestSubset: true
        }, this.updateSearchCriteria);
    };

    resetFilter = e => {
        this.setState({
                dateFrom: null,
                dateTo: null,
                sortType: '',
                noOfPax: '',
                priceFrom: 0,
                priceTo: null,
                selectedCategories: [],
                selectedCities: [],
                selectedPriceRanges: [],
                isRequestSubset: true
            },
            () => this.updateSearchCriteria(true)
        );
    };

    categoryChange = e => {
        const id = e.target.getAttribute('cat-id');
        const activityCategories = this.props.activityCategories;
        const category = this.props.categories.find(item => item.id === Number(id));
        const all = [...this.state.selectedCategories];

        if (!category) {
            return;
        }

        const index = all.findIndex(item => Number(item) === Number(id));
        if (index === -1) {
            category.items.every(subCat => {
                const index = all.findIndex(id => Number(id) === Number(subCat.id));
                const cat = activityCategories.filter(it => it.id === subCat.id);
                if (index === -1 && cat.length) {
                    all.push(Number(subCat.id));
                }
                return true;
            });

            if (!this.props.category) { all.push(id); }

            this.setState({
                selectedCategories: all,
                isRequestSubset: false

            }, this.updateSearchCriteria);

        } else {
            if (!this.props.category) { all.splice(index, 1); }

            let newArray = [];

            all.forEach(item => {
                const index = category.items.findIndex(subCat => subCat.id === Number(item));
                if (index === -1) {
                    newArray.push(Number(item));
                }
            });
            this.setState({
                selectedCategories: newArray,
                isRequestSubset: false
            }, this.updateSearchCriteria)
        }
    };

    subCategoryChange = e => {
        const id = e.target.getAttribute('subcat-id');
        const catId = e.target.getAttribute('cat-id');
        let all = [...this.state.selectedCategories];
        const index = all.findIndex(item => Number(item) === Number(id));
        if (index >= 0) {

            all = all.filter(it => Number(it) !== Number(id));
            const mySet = new Set(all);
            all = [...mySet];

            const catIndex = all.findIndex(item => Number(item) === Number(catId));
            if (catIndex >= 0) {
                all.splice(catIndex, 1);
            }
        } else {
            all.push(id);
        }

        this.setState({
            selectedCategories: all,
            isRequestSubset: false
        }, this.updateSearchCriteria)
    };


    //Desktop cities choice
    cityCheckDesktop = (data) => {
        const values = data.map(it => it.value);
        this.setState({
            selectedCities: values,
            isRequestSubset: false
        }, this.updateSearchCriteria)
    };

    cityCheckChange = (e) => {
        const id = e.target.getAttribute('city-id');
        const selectedCities = [...this.state.selectedCities];

        const index = selectedCities.findIndex(item => Number(item) === Number(id));
        if (index >= 0) {
            selectedCities.splice(index, 1);
        } else {
            selectedCities.push(id);
        }

        this.setState({
            selectedCities: selectedCities,
            isRequestSubset: false
        }, this.updateSearchCriteria)
    };

    //Desktop Price Range Change
    priceRangeChangeDesktop = (data) => {
        const values = [];
        data.forEach(it => values.push(it.value));
        this.setState({
            selectedPriceRanges: values,
            isRequestSubset: false
        }, this.updateSearchCriteria)
    };

    //Mobile Price Range Change
    priceRangeChange = (e) => {
        const name = e.target.getAttribute('price-range');
        const selectedPriceRanges = [...this.state.selectedPriceRanges];

        const index = selectedPriceRanges.findIndex(item => item === name);
        if (index >= 0) {
            selectedPriceRanges.splice(index, 1);
        } else {
            selectedPriceRanges.push(name);
        }

        this.setState({
            selectedPriceRanges,
            isRequestSubset: false
        }, this.updateSearchCriteria)

    };

    clearPriceRanges = () => {
        this.setState({
            selectedPriceRanges: [],
            isRequestSubset: true
        }, this.updateSearchCriteria)
    };

    clearCategories = () => {
        this.setState({
            selectedCategories: [],
            isRequestSubset: false,
            showDropdownCategory: false
        }, () => this.updateSearchCriteria(true))
    };

    clearCities = () => {
        this.setState({
            selectedCities: [],
            isRequestSubset: false
        }, () => this.updateSearchCriteria(true))
    };

    showAllCategories = () => {
        this.setState({
            showAllCategories: !this.state.showAllCategories
        })
    };

    showAllCities = () => {
        this.setState({
            showAllCities: !this.state.showAllCities
        })
    };

    onSortTypeChange = e => {
        const selectedSortType = e ? Constants.SORT_OPTIONS.find(item => item.name === e.value) : null;
        this.props.changeSearchCriteria({ sortType: selectedSortType });
    };

    toggleDropdownCategory = (e) => {
        this.setState({ showDropdownCategory: !this.state.showDropdownCategory });
    };

    componentDidMount() {
        const sfInstance = this;
        document.body.addEventListener('click', e => {
            const closestEl = e.target.closest('.dropdown-category, .dropdown-category-btn, .dropdown-category-holder');
            if (!closestEl || closestEl.length === 0) {
                sfInstance.setState({ showDropdownCategory: false });
            }
        });
    }

    render() {
        const {
            toggleMobileFilter,
            toggleMobileSortBy,
            activityCities,
            activityCategories,
            citiesAll,
            totalCount,
            intl,
            cityName,
            category,
            sortType
        } = this.props;

        const categories = this.props.categories ? this.props.categories.filter(item => {
            let amount = 0;
            item.items &&
            item.items.forEach(cat => {
                const match = activityCategories.find(item => item.id === cat.id);
                if (match) {
                    amount += match.count;
                }
            });
            return amount;
        }) : [];

        const cities = citiesAll ? citiesAll.filter(item => {
            const match = activityCities.find(city => city.id === item.id);
            return match ? match.count : 0;
        }) : [];

        const categoriesChecked = [];
        if (this.state.selectedCategories.length) {
            this.state.selectedCategories.forEach(it => {
                categories.forEach(cc => {
                    const match = cc.items && cc.items.find(c => c.id === parseInt(it));
                    if (match) {
                        categoriesChecked.push(match.value);
                    }
                });
            })
        }

        moment.locale(intl.locale);

        return (<React.Fragment>
                <div className="top-filter-container">
                    <div className="dropdown-container">
                        <div className="dropdown-title"><i className="icon map"/><FormattedMessage id="search.cities"/>
                        </div>
                        <div className="dropdown-options">
                            {cities && cities.length > 0 ? (
                                <Select
                                    name="cities"
                                    instanceId="cities"
                                    value={this.state.selectedCities}
                                    onChange={this.cityCheckDesktop}
                                    options={cities.map(value => {
                                        return { value: value.id, label: value.name }
                                    })}
                                    required={true}
                                    multi={true}
                                    placeholder={<FormattedMessage id="travel.planning.destination"/>}
                                />
                            ) : (
                                <h6 className="txt-right">{cityName}</h6>
                            )}
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className="dropdown-title"><i className="icon fa-calendar-alt"/><FormattedMessage
                            id="common.date"/>
                        </div>
                        <div className="dropdown-options duration">
                            <DateRangePicker
                                startDate={this.state.dateFrom}
                                startDateId="searchStartDate"
                                startDatePlaceholderText={intl.formatMessage({ id: 'common.from' })}
                                endDate={this.state.dateTo}
                                endDateId="searchEndDate"
                                endDatePlaceholderText={intl.formatMessage({ id: 'common.to' })}
                                onDatesChange={({ startDate, endDate }) => this.onDatesChange(startDate, endDate)}
                                focusedInput={this.state.dateRangeFocusedDesktop}
                                onFocusChange={dateRangeFocusedDesktop => this.setState({ dateRangeFocusedDesktop })}
                                displayFormat="DD/MM/YYYY"
                                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                                readOnly={true}
                                showClearDates
                                minimumNights={0}
                                hideKeyboardShortcutsPanel={true}
                            />
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className="dropdown-title"><i className="icon user"/><FormattedMessage
                            id="search.noOfPax"/></div>
                        <div className="dropdown-options">
                            <Select
                                name="noOfPax"
                                instanceId="searchNoOfPaxDropDown"
                                value={this.state.noOfPax}
                                onChange={this.onNoOfPaxChange}
                                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => {
                                    return { value, label: value }
                                })}
                                searchable={false}
                                placeholder={<FormattedMessage id="search.selectNoOfPax"/>}
                            />
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className="dropdown-title"><i className="icon bars"/><FormattedMessage
                            id="search.categories"/></div>
                        <div className="dropdown-options">
                            {!this.props.subCategory ? (
                                <div className="dropdown-category-holder" onClick={this.toggleDropdownCategory}>
                                    <div className="dropdown-category-title">
                                        {categoriesChecked.length > 0 && categoriesChecked.length > 30 && `${categoriesChecked.join(", ").substr(0, 30)}...`}
                                        {categoriesChecked.length > 0 && `${categoriesChecked.join(", ").substr(0, 30)}`}
                                        {categoriesChecked.length === 0 &&
                                        <FormattedMessage id="common.please.select"/>}
                                    </div>
                                    <div className="dropdown-category-btn">
                                        {!this.state.showDropdownCategory ? <span className="select-arrow-down"/> :
                                            <span className="select-arrow-up"/>}
                                    </div>
                                </div>
                            ) : (
                                <h6 className="txt-right">{this.props.subCategory}</h6>
                            )}


                            {this.state.showDropdownCategory && (
                                <div className="dropdown-category">
                                    <div className="row">
                                        <div className="category-content">
                                            {categories.map(item => {
                                                return (
                                                    <SearchCategory
                                                        key={item.id}
                                                        item={item}
                                                        deviceType={'desktop'}
                                                        selectedCategories={this.state.selectedCategories}
                                                        categoryCheckChange={this.categoryChange}
                                                        subCategoryCheckChange={this.subCategoryChange}
                                                        activityCategories={activityCategories}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <div className="clear-category" onClick={this.clearCategories}>
                                            <FormattedMessage id="common.clear"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className="dropdown-title"><i className="icon dollar-sign"/><FormattedMessage
                            id="search.priceRange"/></div>
                        <div className="dropdown-options">
                            <Select
                                name="priceRange"
                                instanceId="searchPriceRange"
                                value={this.state.selectedPriceRanges}
                                onChange={this.priceRangeChangeDesktop}
                                options={Constants.PRICE_RANGES.map(value => {
                                    return {
                                        value: value,
                                        label: <div><img src={'/images/icons/' + value + '_selected.png'}
                                                         className="select-icon"/> {' '} <FormattedMessage
                                            id={'common.' + value}/></div>
                                    }
                                })}
                                multi={true}
                                placeholder={<FormattedMessage id="common.please.select"/>}
                            />
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className="dropdown-title"><i className="icon sorting"/><FormattedMessage
                            id="package.sort.by"/></div>
                        <div className="dropdown-options">
                            <Select
                                name="sortTypesFF"
                                instanceId="searchSortTypeDropDown"
                                value={sortType ? sortType.name : ''}
                                onChange={this.onSortTypeChange}
                                options={[
                                    cityName ? {
                                        value: 'priorityCity',
                                        label: intl.formatMessage({ id: 'search.recommended' })
                                    } : {
                                        value: category ? 'priorityCategory' : 'ranking',
                                        label: intl.formatMessage({ id: 'search.relevance' })
                                    },
                                    {
                                        value: 'date_asc',
                                        label: intl.formatMessage({ id: 'search.sortDate' })
                                    },
                                    {
                                        value: 'price_desc',
                                        label: intl.formatMessage({ id: 'search.sortPrice' })
                                    },
                                    {
                                        value: 'price_asc',
                                        label: intl.formatMessage({ id: 'search.sortPriceAscending' })
                                    },
                                    {
                                        value: 'rating_desc',
                                        label: intl.formatMessage({ id: 'search.sortRating' })
                                    },

                                ]}
                                clearable={false}
                                searchable={false}
                                placeholder={<FormattedMessage id="search.sortBy"/>}
                            />
                        </div>
                    </div>
                </div>
                <div className="mobile-filter-container">
                    {!this.props.subCategory &&
                    <div className={classNames("filter-cat-container", { open: toggleMobileFilter })}>
                        <div className="categories-container">
                            <div className="row visible-sm visible-xs">
                                <div className="col-xs-12">
                                    <i className="icon close" onClick={toggleMobileFilter}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6">
                                    <h4>
                                        <FormattedMessage id="search.categories" onClick={toggleMobileSortBy}/>
                                    </h4>
                                </div>
                                <div className="col-xs-6 right-button">
                                    <button className="search-btn btn btn-sm white" onClick={this.clearCategories}>
                                        <FormattedMessage id="common.clear"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="categories-container">
                            <div className="row">
                                {categories.map(item => {
                                    return (
                                        <SearchCategory
                                            key={item.id}
                                            item={item}
                                            deviceType={'mobile'}
                                            selectedCategories={this.state.selectedCategories}
                                            categoryCheckChange={this.categoryChange}
                                            subCategoryCheckChange={this.subCategoryChange}
                                            activityCategories={activityCategories}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>}
                    {cities && cities.length > 0 &&
                    <div className={classNames("filter-city-container", { open: toggleMobileFilter })}>
                        <div className="categories-container">
                            {this.props.subCategory && (
                                <div className="row visible-sm visible-xs">
                                    <div className="col-xs-12">
                                        <i className="icon close" onClick={toggleMobileFilter}/>
                                    </div>
                                </div>
                            )}
                            <div className="row">
                                <div className="col-xs-6">
                                    <h4><FormattedMessage id="common.city"/></h4>
                                </div>
                                <div className="col-xs-6 right-button">
                                    <button className="search-btn btn btn-sm white" onClick={this.clearCities}>
                                        <FormattedMessage id="common.clear"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="categories-container">
                            <div className="row">
                                {cities.slice(0, this.state.showAllCities ? cities.length : Constants.SEARCH_INITIAL_NUMBER_OF_CITIES).map(item => {
                                    const match = activityCities.find(city => city.id === item.id);
                                    const index = this.state.selectedCities.findIndex(id => Number(id) === item.id);
                                    const count = match ? match.count : 0;

                                    if (count > 0) {
                                        return (
                                            <div key={item.id} className="col-md-12 col-sm-6 col-xs-12">
                                                <div className="input-inline">
                                                    <label className="radio-search-label">
                                                        <input type="checkbox"
                                                               onClick={this.cityCheckChange}
                                                               city-id={item.id}
                                                               checked={index >= 0}
                                                               disabled={!count}
                                                               readOnly
                                                        />
                                                        <span className="checkmark"/>
                                                        {`${item.name}`} <span>{`(${count})`}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                                {cities.length > Constants.SEARCH_INITIAL_NUMBER_OF_CITIES &&
                                <div className="col-sm-12 col-sm-6 col-xs-6">
                                    <a onClick={this.showAllCities}>{this.state.showAllCities ?
                                        <FormattedMessage id="common.showLess"/> :
                                        <FormattedMessage id="common.showAll"/>}
                                        <i className={classNames("fas", {
                                            'fa-angle-up': this.state.showAllCities,
                                            'fa-angle-down': !this.state.showAllCities
                                        })}/>
                                    </a>
                                </div>}
                            </div>
                        </div>
                    </div>
                    }
                    <div className={classNames("filter-cat-container", { open: toggleMobileFilter })}>
                        <div className="title categories-container">
                            <div className="row">
                                <div className="col-xs-6"><h4>
                                    <FormattedMessage id="search.priceRange"/>
                                </h4></div>
                                <div className="col-xs-6 right-button">
                                    <button className="search-btn btn btn-sm white" onClick={this.clearPriceRanges}>
                                        <FormattedMessage id="common.clear"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="priceRange-container">
                            <div className="row">
                                {Constants.PRICE_RANGES.map(item => {
                                    const index = this.state.selectedPriceRanges.findIndex(range => range === item);
                                    return (
                                        <div key={item} className="col-md-12 col-sm-6 col-xs-4">
                                            <div className="input-inline">
                                                <label className="radio-search-label">
                                                    <input type="checkbox"
                                                           onClick={this.priceRangeChange}
                                                           price-range={item}
                                                           checked={index >= 0}
                                                           readOnly
                                                    />
                                                    <span className="checkmark"/>
                                                    <i className={`icon-priceRange ${item}`}/>
                                                    <p><FormattedMessage id={`common.${item}`}/></p>
                                                </label>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={classNames("filter-container", { open: toggleMobileFilter })}>
                        <div className="title categories-container">
                            <div className="row">
                                <div className="col-xs-6"><h4>
                                    <FormattedMessage id="search.filter"/>
                                </h4></div>
                                <div className="col-xs-6 right-button">
                                    <button className="search-btn btn btn-sm white" onClick={this.resetFilter}>
                                        <FormattedMessage id="common.reset"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="duration-container">
                            <DateRangePicker
                                startDate={this.state.dateFrom}
                                startDateId="searchStartDate"
                                startDatePlaceholderText={intl.formatMessage({ id: 'common.from' })}
                                endDate={this.state.dateTo}
                                endDateId="searchEndDate"
                                endDatePlaceholderText={intl.formatMessage({ id: 'common.to' })}
                                onDatesChange={({ startDate, endDate }) => this.onDatesChange(startDate, endDate)}
                                focusedInput={this.state.dateRangeFocused}
                                onFocusChange={dateRangeFocused => this.setState({ dateRangeFocused })}
                                displayFormat="DD/MM/YYYY"
                                numberOfMonths={1}
                                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                                readOnly={true}
                                openDirection="up"
                                showClearDates
                                minimumNights={0}
                                hideKeyboardShortcutsPanel={true}
                            />
                        </div>
                        <div className="sortby-container">
                            <label>
                                <FormattedMessage id="search.noOfPax"/>
                            </label>
                            <Select
                                name="sortTypes"
                                instanceId="searchNoOfPaxDropDown"
                                value={this.state.noOfPax}
                                onChange={this.onNoOfPaxChange}
                                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => {
                                    return { value, label: value }
                                })}
                                searchable={false}
                                placeholder={<FormattedMessage id="search.selectNoOfPax"/>}
                            />
                        </div>
                    </div>
                    <div className="row visible-sm visible-xs">
                        <div className="col-md-12 col-md-offset-0 col-sm-6 col-sm-offset-3">
                            <button className="showAllBtn btn btn-lg" onClick={toggleMobileFilter}>
                                <FormattedMessage id="search.showResult"/> ({totalCount})
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default injectIntl(SearchFilter);
