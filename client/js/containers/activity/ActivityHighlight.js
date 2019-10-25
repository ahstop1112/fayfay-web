import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';
import Price from '../../components/pricing/Price';
import ActivityRecentReview from './ActivityRecentReview';
import Markdown from '../../components/converter/Markdown';
import ActivityWishList from './ActivityWishList';
import ActivityShare from './ActivityShare';
import Constants from 'fayfayConstants';
import InquiryModal from './InquiryModal';

class ActivityHighlight extends Component {
    static propTypes = {
        activity: PropTypes.object.isRequired,
        addToWishList: PropTypes.func.isRequired,
        removeWishList: PropTypes.func.isRequired,
        wishListId: PropTypes.number,
        showBookingDetails: PropTypes.bool.isRequired,
        intl: PropTypes.object.isRequired,
        instantMessengers: PropTypes.array.isRequired,
        countries: PropTypes.array.isRequired,
        langId: PropTypes.number.isRequired
    };

    static defaultProps = {
        wishListId: null
    };

    state = {
        showHotelModal: false,
        showF1Modal: false,
        wishListChanged: false
    };

    changeWishList = () => {
        const { activity, wishListId } = this.props;
        if ((this.state.wishListChanged && !wishListId)
            || (!this.state.wishListChanged && !activity.wishListId)) {
            this.props.addToWishList(activity.id);
        } else {
            this.props.removeWishList(activity.id);
        }
        this.setState({
            wishListChanged: true
        });
    };

    componentDidMount() {
        const { activity } = this.props;
        if (activity.packages) {
            const pkg = activity.packages.find(p => p.quota && p.quota > 0);
            const index = activity.packages.indexOf(pkg);
            const bookElement = document.getElementById("btnBook");

            if (bookElement) {
                if (index > 0) {
                    bookElement.addEventListener("click", function (e) {
                        const sectionOffsetTop = document.getElementsByClassName('activity-tabs-content-section')[0].offsetTop;
                        const pkgOffsetTop = document.getElementById(`package-${pkg.id}`).offsetTop;
                        window.scrollTo(0, sectionOffsetTop + pkgOffsetTop - 190);
                    });
                } else {
                    bookElement.addEventListener("click", function (e) {
                        document.getElementById('package-option-pill').click();
                    });
                }
            }
        }
    }

    render() {
        const { activity, wishListId, showBookingDetails, intl, countries, instantMessengers, langId } = this.props;

        let duration = '';

        if (activity.durationDay) {
            duration += `${activity.durationDay} ${intl.formatMessage({ id: "package.days" })}`;
        }
        if (activity.durationNight) {

            duration += (duration.length ? ', ' : '') + `${activity.durationNight} ${intl.formatMessage({ id: "package.nights" })}`;
        }
        if (activity.durationHour) {
            duration += (duration.length ? ', ' : '') + activity.durationHour + ' ' + intl.formatMessage({ id: "package.hours" });
        }

        let isSoldOut = true;
        if (activity.packages) {
            isSoldOut = !activity.packages.find(p => p.quota && p.quota > 0);
        }

        return (
            <section className="activity-highlight-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <h1 className="activity-title">{activity.title}</h1>

                            <Markdown source={activity.brief}/>
                            <p><FormattedMessage id="common.experience.code"/> : {activity.id}</p>
                            <div className="whitebox visible-xs row">
                                <div className="col-xs-12">
                                    <Price
                                        price={activity.displayPrice}
                                        specialPrice={activity.displaySpecialPrice}
                                        className="price"
                                    />
                                    {activity.banner && activity.banner.link &&
                                    <a href={activity.banner.link} target={activity.banner.target}
                                       className="visible-xs visible-sm marginTop-20px">
                                        <img
                                            src={`${Constants.CLOUDINARY_IMAGE_URL}/${activity.banner.mobileImage.key}.${activity.banner.mobileImage.format}`}
                                        />
                                    </a>}
                                    {activity.banner && !activity.banner.link &&
                                    <img className="visible-xs visible-sm marginTop-20px"
                                         src={`${Constants.CLOUDINARY_IMAGE_URL}/${activity.banner.mobileImage.key}.${activity.banner.mobileImage.format}`}
                                    />}
                                    <hr className="visible-xs"/>
                                </div>
                                <div className="col-xs-12">
                                    <ActivityShare activityTitle={activity.title}/>
                                </div>
                            </div>
                            <hr className="visible-xs"/>
                            <ul className="listing two-col" id="special">
                                {duration && <li className="instant">
                                    <i className="icon clock orange"/>
                                    <span>
                                        <FormattedMessage id="package.duration"/>
                                        <span className="detail">
                                            {`: ${duration}`}
                                        </span>
                                    </span>
                                </li>}
                                {activity.badges.map(item => {
                                    return (
                                        <li className={item.name} key={item.id}>
                                            <i className="icon orange"/>
                                            <span>{item.value}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <hr/>
                            <Markdown source={activity.description}/>
                            <hr/>
                            {activity.reviewCount > 0 && <ActivityRecentReview activity={activity}/>}
                        </div>
                        <div className="col-lg-4 col-md-4" id="booking-price-container">
                            <div className={classNames("booking-price-container", { 'scroll': !showBookingDetails })}>
                                <div className="order-box greybox">
                                    <div className="hidden-sm hidden-xs">
                                        <span className="order-total">
                                            <FormattedMessage id="common.price.from"/>
                                        </span>
                                    </div>
                                    <div className="hidden-sm hidden-xs">
                                        <Price
                                            price={activity.displayPrice}
                                            specialPrice={activity.displaySpecialPrice}
                                            className="price"
                                        />
                                    </div>
                                    <ActivityWishList changeWishList={this.changeWishList} isMobileView
                                                      wishListId={this.state.wishListChanged ? wishListId : activity.wishListId}/>
                                    {
                                        activity.paymentFlow === Constants.PAYMENT_FLOW.NORMAL && !isSoldOut &&
                                        (<button className="btn btn-lg test hidden-sm hidden-xs" id="btnBook">
                                            <FormattedMessage id="package.add.to.cart"/>
                                        </button>)
                                    }
                                    {
                                        activity.paymentFlow === Constants.PAYMENT_FLOW.NORMAL && isSoldOut &&
                                        (<button className="btn btn-lg test hidden-sm hidden-xs grey"
                                                 disabled="disabled">
                                            <FormattedMessage id="package.sold.out"/>
                                        </button>)
                                    }
                                    {activity.paymentFlow === Constants.PAYMENT_FLOW.INQUIRY &&
                                    <button className="btn btn-lg test hidden-sm hidden-xs"
                                            onClick={() => this.setState({
                                                showInquiryModal: true
                                            })}>
                                        <FormattedMessage id="common.contact.us"/>
                                    </button>}
                                    <ul className="remark hidden-sm hidden-xs">
                                        <li className="reservation">
                                            {activity.instantConfirmation &&
                                            <React.Fragment>
                                                <i className="far fa-rocket"/>
                                                <FormattedMessage id="activity.instantInformation"/>
                                            </React.Fragment>
                                            }
                                            {!activity.instantConfirmation &&
                                            <React.Fragment>
                                                <i className="far fa-clock"/>
                                                <FormattedMessage
                                                    id="package.reservation.will.be.confirmed.within48.hour"/>
                                            </React.Fragment>
                                            }
                                        </li>
                                    </ul>
                                    <div>
                                        <ul className="booked">
                                            <li>{intl.formatMessage({ id: 'search.bookedCount' }, { count: activity.bookedCount.toLocaleString('en-us') })}</li>
                                        </ul>
                                    </div>
                                </div>
                                {activity.banner && activity.banner.link &&
                                <a href={activity.banner.link} target={activity.banner.target}
                                   className="hidden-xs hidden-sm">
                                    <img
                                        src={`${Constants.CLOUDINARY_IMAGE_URL}/${activity.banner.image.key}.${activity.banner.image.format}`}
                                    />
                                </a>}
                                {activity.banner && !activity.banner.link &&
                                <img className="hidden-xs hidden-sm"
                                     src={`${Constants.CLOUDINARY_IMAGE_URL}/${activity.banner.image.key}.${activity.banner.image.format}`}/>}
                                <div className="share-container hidden-sm hidden-xs">
                                    <ActivityWishList changeWishList={this.changeWishList}
                                                      wishListId={this.state.wishListChanged ? wishListId : activity.wishListId}/>
                                    <ActivityShare activityTitle={activity.title}/>

                                </div>
                                {this.state.showInquiryModal && (
                                    <InquiryModal
                                        show={true}
                                        interestedExperience={`${activity.id} ${activity.title}`}
                                        countries={countries}
                                        instantMessengers={instantMessengers}
                                        onClose={() => this.setState({ showInquiryModal: false })}
                                        langId={langId}
                                        paymentFlowType={activity.paymentFlowType}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default injectIntl(ActivityHighlight);
