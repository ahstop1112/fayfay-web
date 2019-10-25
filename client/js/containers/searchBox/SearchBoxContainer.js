import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';
import { fetchCities, fetchPopularKeywords } from '../../redux/actions/searchActions';
import { getLangUrl, getParameterByName } from '../../utils/helpers';
import Constants from 'fayfayConstants';
import { connect } from 'react-redux';
import SearchKeywords from './SearchKeywords';

export class SearchBoxContainer extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        searchBoxData: PropTypes.object
    };

    static defaultProps = {
        searchBoxData: {
            keywords: [],
            cities: []
        }
    };

    state = {
        showCity: false,
        showNorth: false,
        showCentral: false,
        showSouth: false,
        showSpotlight: true,
        showTopSearch: false,
        keyword: ''
    };

    onFocus = (e) => {
        this.setState({
            showCity: true
        });
    };

    componentWillUnmount() {
        if (typeof (window) !== 'undefined' && typeof (window.document) !== 'undefined') {
            window.document.removeEventListener('mousedown', this.handleClick, false);
        }
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }

        this.setState({
            showCity: false
        });
    };

    componentDidMount() {
        this.setState({
            keyword: getParameterByName('keyword') || ''
        });
        if (typeof (window) !== 'undefined' && typeof (window.document) !== 'undefined') {
            window.document.addEventListener('mousedown', this.handleClick, false);
            window.document.addEventListener('touchstart', this.handleClick, false);
        }
    };

    chooseDistrict(id) {
        if (id === 'north') {
            this.setState({
                showNorth: true,
                showCentral: false,
                showSouth: false,
                showSpotlight: false

            });
        } else if (id === 'central') {
            this.setState({
                showNorth: false,
                showCentral: true,
                showSouth: false,
                showSpotlight: false
            });
        } else if (id === 'south') {
            this.setState({
                showNorth: false,
                showCentral: false,
                showSouth: true,
                showSpotlight: false
            });
        } else {
            this.setState({
                showNorth: false,
                showCentral: false,
                showSouth: false,
                showSpotlight: true
            });
        }
    }

    search = () => {
        const citySearch = this.filterCity(this.state.keyword.trim());

        const langUrl = getLangUrl(this.props.intl.locale);
        if (citySearch) {
            window.location = `${langUrl}${citySearch}`;
            return;
        }

        if (window.location.search) {
            let params = new URLSearchParams(window.location.search);
            params.delete('keyword');

            let queryString = params.toString();
            if (queryString) {
                queryString = `&${queryString}`;
            }

            window.location = `${langUrl}/search?keyword=${encodeURIComponent(this.state.keyword.trim())}${queryString}`;
        } else {
            window.location = `${langUrl}/search?keyword=${encodeURIComponent(this.state.keyword.trim())}`;
        }
    };

    onKeyPress = e => {
        if (e.key === 'Enter' && this.state.keyword.trim()) {
            this.search();
        }
    };

    onKeywordChanged = e => {
        this.setState({
            keyword: e.target.value
        });
    };

    filterCity = (name) => {
        const { searchBoxData } = this.props;

        let city = searchBoxData.cities.find(city => city.name.toLowerCase() === name.toLowerCase());
        if (city) {
            return `/city/${city.id}-${city.slug}`;
        }

        if (name.split(' ').length >= 2) {
            let city = searchBoxData.cities.find(city => city.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
            if (city) {
                return `/city/${city.id}-${city.slug}`;
            }
        }

        return null;
    };

    btnSearchClick = e => {
        if (this.state.keyword.trim()) {
            this.search();
        }
    };

    toggleMobileSearch = e => {
        $(document.body).toggleClass('popup');

        this.setState({
            showMobileSearch: !this.state.showMobileSearch
        });
    };

    toggleTopSearch = e => {

        $('.navbar-nav').toggleClass('hideSearch');
        $('.top-search-icon').toggleClass('hideSearch');
        $('.top-search-box .input-field').focus();


        this.setState({
            showTopSearch: !this.state.showTopSearch
        });
    };

    render() {
        const { intl, searchBoxData } = this.props;

        const langUrl = getLangUrl(intl.locale);

        return (
            <React.Fragment>
                <i className="icon search top-search-icon visible-lg" onClick={this.toggleTopSearch}/>
                <div className={classNames('top-search-box', { open: this.state.showTopSearch })} onFocus={this.onFocus}
                     ref={node => this.node = node}>
                    <div className="search-field">
                        <input
                            type="text"
                            value={this.state.keyword}
                            className="input-field input-lg ok"
                            placeholder={intl.formatMessage({ id: 'package.search.activity' })}
                            onChange={this.onKeywordChanged}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                    <div className="search-btn">
                        <button className="btn btn-lg white" onClick={this.btnSearchClick}>
                            <i className="icon search search-btn-icon"/>
                        </button>
                    </div>
                    <i className="icon close visible-lg" onClick={this.toggleTopSearch}/>
                </div>
                <i className="icon search mobile-search-icon hidden-lg" onClick={this.toggleMobileSearch}/>
                <div className={classNames('searchbox', { open: this.state.showCity })} onFocus={this.onFocus}
                     ref={node => this.node = node}>
                    <div className="search-field-box">
                        <div className="search-field">
                            <input
                                type="text"
                                value={this.state.keyword}
                                className="input-field input-lg ok"
                                placeholder={intl.formatMessage({ id: 'package.search.activity' })}
                                onChange={this.onKeywordChanged}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="search-btn">
                            <button className="btn btn-lg white" onClick={this.btnSearchClick}>
                                <i className="icon search"/>
                            </button>
                        </div>
                    </div>
                    <div className="search-related-words-container">
                        <div className={classNames('search-spotlight', { active: this.state.showSpotlight })}>
                            <ul className="drag-list">
                                <li className="list-item">
                                    <a href={`${langUrl}/city/4`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/eidymdngueprzuzmqsmw`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.hoChiMinh"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/3`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/l8b9xnkz7bulywcj13pg`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.hanoi.halongBay"/>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li className="list-item">
                                    <a href={`${langUrl}/city/6`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/ep16astm4qjoafxagygy`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.daNang"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/7`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/d7r4rlqqroo9edstus7s`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.hoiAn"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/5`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/jf1flm6ojezmokqtgqzc`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.hue"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/19`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/cc0i41ic0r6pyoupw1oc`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.phuQuoc"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/2`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/qwqf3rai6kqpzfjekfp8`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.quangBinh"/></p>
                                        </div>
                                    </a>
                                </li>

                                <li className="list-item">
                                    <a href={`${langUrl}/city/20`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/wtyhn3r7uhvl9ahpmxsg`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.nhaTrang"/>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li className="list-item">
                                    <a href={`${langUrl}/city/21`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/r4phgbh06hyyu6iqb9tv`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.daLat"/>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {searchBoxData.keywords.length > 0 && !this.state.showCity && <SearchKeywords keywords={searchBoxData.keywords}/>}
                </div>
                <div className={classNames("mobile-search-box hidden-lg", { open: this.state.showMobileSearch })}>
                    <div className="header">
                        <i className="icon arrow-left mobile-close-search" onClick={this.toggleMobileSearch}/>
                        <h5>{intl.formatMessage({ id: 'common.search' })}</h5>
                    </div>
                    <div className="container-fluid">
                        <div className="searchbox-mobile">
                            <div className="search-field">
                                <input
                                    type="text"
                                    value={this.state.keyword}
                                    className="input-field input-lg ok"
                                    placeholder={intl.formatMessage({ id: 'package.search.activity' })}
                                    onChange={this.onKeywordChanged}
                                    onFocus={this.onFocus}
                                    onBlur={this.onBlur}
                                    onKeyPress={this.onKeyPress}
                                />
                            </div>
                            <div className="search-btn">
                                <button className="btn btn-lg" onClick={this.btnSearchClick}>
                                    <i className="icon search"/>
                                </button>
                            </div>
                        </div>
                        {this.state.showMobileSearch && !this.state.showCity &&  <SearchKeywords keywords={searchBoxData.keywords} />}
                        <div className={classNames('search-spotlight', { active: this.state.showSpotlight })}>
                            <ul className="drag-list">
                                <li className="list-item">
                                    <a href={`${langUrl}/city/4`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/eidymdngueprzuzmqsmw`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.hoChiMinh"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/3`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/l8b9xnkz7bulywcj13pg`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.hanoi.halongBay"/>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li className="list-item">
                                    <a href={`${langUrl}/city/6`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/ep16astm4qjoafxagygy`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.daNang"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/7`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/d7r4rlqqroo9edstus7s`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.hoiAn"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/5`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/jf1flm6ojezmokqtgqzc`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.hue"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/19`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/cc0i41ic0r6pyoupw1oc`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.phuQuoc"/></p>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href={`${langUrl}/city/2`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/qwqf3rai6kqpzfjekfp8`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.quangBinh"/></p>
                                        </div>
                                    </a>
                                </li>

                                <li className="list-item">
                                    <a href={`${langUrl}/city/20`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/wtyhn3r7uhvl9ahpmxsg`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.nhaTrang"/>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li className="list-item">
                                    <a href={`${langUrl}/city/21`}>
                                        <div className="list-content">
                                            <div className="banner">
                                                <img
                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/fayfay-media/prod/r4phgbh06hyyu6iqb9tv`}
                                                    className="bg"
                                                />
                                            </div>
                                            <p className="city-name"><FormattedMessage id="activity.daLat"/>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        citiesAll: state.search.citiesAll,
        keywords: state.search.searchKeywords
    };
};

export default connect(mapStateToProps, { fetchCities, fetchPopularKeywords })(injectIntl(SearchBoxContainer));
