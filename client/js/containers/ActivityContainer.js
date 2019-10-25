import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import {
    addToCart,
    addToWishList,
    fetchReviews,
    removeWishList,
    selectPackage,
    selectPackageBookingDate,
    selectPackageBookingTime,
    updatePackageTicketPurchase
} from '../redux/actions/activityActions';
import ActivityHighlight from '../containers/activity/ActivityHighlight';
import ActivityPackage from '../containers/activity/ActivityPackage';
import ActivityReviews from '../containers/activity/ActivityReviews';
import BookingDetails from '../containers/activity/BookingDetails';
import Markdown from '../components/converter/Markdown';
import Constants from 'fayfayConstants';
import { getLangUrl } from '../utils/helpers';
import classNames from 'classnames';
import RelatedActivities from './activity/RelatedActivities';

export class ActivityContainer extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        addToCart: PropTypes.func.isRequired,
        addToWishList: PropTypes.func.isRequired,
        removeWishList: PropTypes.func.isRequired,
        wishListId: PropTypes.number,
        packageAvailabilityId: PropTypes.number.isRequired,
        activePackage: PropTypes.object.isRequired,
        availableDates: PropTypes.object.isRequired,
        packageOptionMap: PropTypes.object.isRequired,
        selectPackage: PropTypes.func.isRequired,
        updatePackageTicketPurchase: PropTypes.func.isRequired,
        selectPackageBookingDate: PropTypes.func.isRequired,
        selectPackageBookingTime: PropTypes.func.isRequired,
        reviews: PropTypes.array.isRequired,
        totalPage: PropTypes.number.isRequired,
        totalCount: PropTypes.number.isRequired,
        pageIndex: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        fetchReviews: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired,
        cartCount: PropTypes.number,
        ajaxStatus: PropTypes.object.isRequired
    };

    static defaultProps = {
        data: {},
        wishListId: null,
        cartCount: 0
    };

    state = {
        wishListChanged: false
    };

    goHelp = () => {
        const langUrl = getLangUrl(this.props.intl.locale);

        window.location.assign(`${langUrl}/help`);
    };

    componentDidMount() {
        const { data } = this.props;

        const activity = data.activityData;

        if (data.packageId && activity.id) {
            const packageData = activity.packages.find(item => item.id === Number(data.packageId));
            if (packageData) {
                let offset = activity.banner ? 280 : 200;
                const windowWidth = $(window).width();
                if (windowWidth < 1024) {
                    offset = 90;
                }

                window.setTimeout(function () {
                    try {
                        $('html, body').animate({
                            scrollTop: $("#btn-select-package-" + packageData.id).offset().top - offset
                        }, 500);
                    } catch (e) {

                    }
                }, windowWidth < 1024 ? 500 : 0);

                if (activity.paymentFlow === Constants.PAYMENT_FLOW.NORMAL) {
                    this.props.selectPackage(packageData, activity.id);
                }
            }
        }
    }

    render() {
        const {
            data,
            addToCart,
            wishListId,
            addToWishList,
            removeWishList,
            packageAvailabilityId,
            activePackage,
            availableDates,
            packageOptionMap,
            selectPackage,
            updatePackageTicketPurchase,
            selectPackageBookingDate,
            selectPackageBookingTime,
            reviews,
            totalPage,
            totalCount,
            pageIndex,
            pageSize,
            fetchReviews
        } = this.props;
        const activity = data.activityData || {};
        const countries = data.countries || [];
        const instantMessengers = data.instantMessengers || [];
        const langId = data.langId;
        let hasError = false;
        let hasPackageError = false;

        const packageTicketPurchaseInfo = packageOptionMap[activePackage.id] || {};
        const ticketTypeData = packageTicketPurchaseInfo.ticketTypeData || [];

        const ticketsToPurchase = Object.entries(packageTicketPurchaseInfo.ticketsToPurchase || {});

        const showBookingDetails = ticketsToPurchase.reduce((acc, currValue) => {
            const [ticketTypeId, ticketPurchaseInfo] = currValue;
            return acc || ticketPurchaseInfo.quantity > 0;
        }, false);

        ticketTypeData.forEach(type => {
            if (type.minimumTicketCount) {
                const purchasedTicket = ticketsToPurchase.find((item) => Number(item[0]) === type.id);

                if (!purchasedTicket) {
                    hasError = true;
                } else if (purchasedTicket[1].quantity < type.minimumTicketCount) {
                    hasError = true;
                }
            }
        });

        const totalBookings = ticketsToPurchase.reduce((sum, item) => {
            const [ticketTypeId, ticketPurchaseInfo] = item;
            if (ticketPurchaseInfo.quantity) {
                return sum + Number(ticketPurchaseInfo.quantity);
            } else {
                return sum;
            }
        }, 0);

        if (activePackage.minimumTicketCount && totalBookings < activePackage.minimumTicketCount) {
            hasPackageError = true;
        }

        if (activePackage.maximumTicketCount && totalBookings > activePackage.maximumTicketCount) {
            hasPackageError = true;
        }

        return (
            <div>
                <ActivityHighlight
                    activity={activity}
                    addToWishList={addToWishList}
                    removeWishList={removeWishList}
                    wishListId={wishListId}
                    showBookingDetails={showBookingDetails && !hasError && !hasPackageError}
                    countries={countries}
                    instantMessengers={instantMessengers}
                    langId={langId}
                />
                <section className="activity-tabs-section hidden-xs hidden-sm">
                    <div className="container-fluid">
                        <div className="row tabs-container">
                            <div className="col-md-12">
                                <ul className="nav nav-pills">
                                    <li className="active">
                                        <a data-toggle="pill" href="#package-option" id="package-option-pill">
                                            <FormattedMessage id="package.option"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="pill" href="#highlights">
                                            <FormattedMessage id="package.highlights"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="pill" href="#experience-info">
                                            <FormattedMessage id="package.experience.info"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="pill" href="#how-to-use">
                                            <FormattedMessage id="package.how.to.use"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="pill" href="#cancellation-policy">
                                            <FormattedMessage id="activity.cancellation.policy"/>
                                        </a>
                                    </li>
                                    {activity.reviewCount > 0 && (
                                        <li>
                                            <a data-toggle="pill" href="#reviews">
                                                <FormattedMessage id="common.reviews"/>
                                            </a>
                                        </li>
                                    )}
                                    <li>
                                        <a data-toggle="pill" href="#FAQs">
                                            <FormattedMessage id="package.faqs"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="activity-tabs-content-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="tab-content">
                                    <div id="package-option" className="tab-pane fade in active">
                                        <ActivityPackage
                                            activity={activity}
                                            packageAvailabilityId={packageAvailabilityId}
                                            activePackage={activePackage}
                                            availableDates={availableDates}
                                            packageOptionMap={packageOptionMap}
                                            selectPackage={selectPackage}
                                            updatePackageTicketPurchase={updatePackageTicketPurchase}
                                            selectPackageBookingDate={selectPackageBookingDate}
                                            selectPackageBookingTime={selectPackageBookingTime}
                                            hasError={hasError}
                                            totalBookings={totalBookings}
                                            countries={countries}
                                            instantMessengers={instantMessengers}
                                            langId={langId}
                                        />
                                    </div>
                                    <div id="highlights" className="tab-pane fade">
                                        <div className="whitebox">
                                            <h4>
                                                <FormattedMessage id="package.highlights"/>
                                            </h4>
                                            <Markdown source={activity.whatToExpect}/>
                                            <div className="photos-container">
                                                {activity.galleries.map(item => {
                                                    return (
                                                        <div className="photo" key={item.key}>
                                                            <img
                                                                src={`${Constants.CLOUDINARY_IMAGE_URL}/w_800/${
                                                                    item.key
                                                                    }.${item.format}`}
                                                                alt={item.description}
                                                                className="img"
                                                            />
                                                            <i className="fas fa-caret-up"/>
                                                            <span>{item.description}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div id="experience-info" className="tab-pane fade">
                                        <div className="whitebox">
                                            <h4>
                                                <FormattedMessage id="package.experience.info"/>
                                            </h4>
                                            <Markdown source={activity.information}/>
                                        </div>
                                    </div>
                                    <div id="how-to-use" className="tab-pane fade">
                                        <div className="whitebox">
                                            <h4>
                                                <FormattedMessage id="package.how.to.use"/>
                                            </h4>
                                            <Markdown source={activity.howToUse}/>
                                            <div id="map" data-lat={activity.latitude} data-lng={activity.longitude}/>
                                        </div>
                                    </div>
                                    <div id="cancellation-policy" className="tab-pane fade">
                                        <div className="whitebox">
                                            <h4>
                                                <FormattedMessage id="activity.cancellation.policy"/>
                                            </h4>
                                            <Markdown source={activity.cancelationPolicy}/>
                                        </div>
                                    </div>
                                    {activity.reviewCount > 0 && <div id="reviews" className="tab-pane fade">
                                        <ActivityReviews
                                            activity={activity}
                                            reviews={reviews}
                                            totalCount={totalCount}
                                            totalPage={totalPage}
                                            pageIndex={pageIndex}
                                            pageSize={pageSize}
                                            fetchReviews={fetchReviews}
                                        />
                                    </div>}
                                    <div id="FAQs" className="tab-pane fade">
                                        <div className="whitebox">
                                            <h4>
                                                <FormattedMessage id="package.faqs"/>
                                            </h4>
                                            <Markdown source={activity.faq}/>
                                            <button className="btn btn-s white" onClick={this.goHelp}>
                                                <FormattedMessage id="package.fayfay.help.center"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={classNames("col-md-4", { 'show-booking-details': showBookingDetails && !hasError && !hasPackageError })}
                                id="booking-details-container">
                                <div
                                    className={classNames("booking-details-container", { 'scroll': showBookingDetails && !hasError && !hasPackageError })}>
                                    {showBookingDetails && !hasError && !hasPackageError && <BookingDetails
                                        activityId={activity.id}
                                        packageAvailabilityId={packageAvailabilityId}
                                        activePackage={activePackage}
                                        packageOptionMap={packageOptionMap}
                                        addToCart={addToCart}
                                        facebookPixelID={data.facebookPixelID}
                                    />}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {data.relatedExperiences && data.relatedExperiences.length > 0
                && <RelatedActivities list={data.relatedExperiences}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        wishListId: state.activity.wishListId,
        activePackage: state.activity.activePackage,
        availableDates: state.activity.availableDates,
        packageOptionMap: state.activity.packageOptionMap,
        packageAvailabilityId: state.activity.packageAvailabilityId,
        reviews: state.activity.reviews,
        pageSize: state.activity.pageSize,
        pageIndex: state.activity.pageIndex,
        totalPage: state.activity.totalPage,
        totalCount: state.activity.totalCount,
        cartCount: state.cart.cartCount,
        ajaxStatus: state.ajaxStatus
    };
};

export default connect(mapStateToProps, {
    addToCart,
    addToWishList,
    removeWishList,
    selectPackage,
    updatePackageTicketPurchase,
    selectPackageBookingDate,
    selectPackageBookingTime,
    fetchReviews
})(injectIntl(ActivityContainer));
