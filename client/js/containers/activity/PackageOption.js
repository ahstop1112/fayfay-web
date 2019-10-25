import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PackageTimeSelect from './PackageTimeSelect';
import PackageTicketTypeList from './PackageTicketTypeList';
import Price from '../../components/pricing/Price';
import { FormattedMessage, injectIntl } from 'react-intl';
import Markdown from '../../components/converter/Markdown';
import moment from 'moment';
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import DatePickerCustomInput from "../../components/inputs/DatePickerCustomInput";
import Constants from 'fayfayConstants';
import InquiryModal from "./InquiryModal";

class PackageOption extends Component {
    static propTypes = {
        activityId: PropTypes.number.isRequired,
        activityName: PropTypes.string.isRequired,
        packageData: PropTypes.object.isRequired,
        availableDates: PropTypes.object.isRequired,
        packageOptionMap: PropTypes.object.isRequired,
        selectPackage: PropTypes.func.isRequired,
        updatePackageTicketPurchase: PropTypes.func.isRequired,
        selectPackageBookingDate: PropTypes.func.isRequired,
        selectPackageBookingTime: PropTypes.func.isRequired,
        open: PropTypes.bool,
        showHeader: PropTypes.bool,
        packageAvailabilityId: PropTypes.number.isRequired,
        intl: PropTypes.object.isRequired,
        hasError: PropTypes.bool.isRequired,
        totalBookings: PropTypes.number.isRequired,
        paymentFlow: PropTypes.string.isRequired,
        paymentFlowType: PropTypes.string,
        instantMessengers: PropTypes.array.isRequired,
        countries: PropTypes.array.isRequired,
        langId: PropTypes.number.isRequired
    };

    static defaultProps = {
        open: false,
        showHeader: false,
        paymentFlowType: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            activitySelectedDate: null,
            showDetails: this.props.showHeader
        }
    }

    handleActivityDateChange = (value) => {
        this.setState({
            activitySelectedDate: value
        });

        const { packageData, selectPackageBookingDate } = this.props;
        selectPackageBookingDate(packageData.id, moment(value).format('YYYY-MM-DD'));
    };

    selectNewPackage = () => {
        const { activityId, packageData, selectPackage, open } = this.props;

        if (!open) {
            let offset = 160;
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
            });
            selectPackage(packageData, activityId);
        } else {
            selectPackage(null, null);
        }
    };

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails });
    };

    render() {
        const {
            activityId,
            activityName,
            packageData,
            availableDates,
            packageOptionMap,
            open,
            showHeader,
            packageAvailabilityId,
            selectPackageBookingTime,
            updatePackageTicketPurchase,
            intl,
            hasError,
            totalBookings,
            paymentFlow,
            paymentFlowType,
            instantMessengers,
            countries,
            langId
        } = this.props;

        const bookingDate = packageOptionMap[packageData.id] ? packageOptionMap[packageData.id].bookingDate : '';
        const bookingTime = packageOptionMap[packageData.id] ? packageOptionMap[packageData.id].bookingTime : '';
        let showTime = !!availableDates[bookingDate];
        const timeList = availableDates[bookingDate] || [];

        if (showTime && timeList.length === 1 && timeList[0].time === Constants.ALL_DAY_BOOKING_TIME) {
            showTime = false;
        }

        const showTicketTypes = !!availableDates[bookingDate];
        // This function will set the booking time and load the ticket types
        const enhancedSelectPackageBookingTime = (packageId, packageAvailabilityId) => {

            // Get the availability ID from the timeString
            const timeList = availableDates[bookingDate] || [];
            const selectedTime = timeList.find(t => {
                return t.id === packageAvailabilityId;
            });

            selectPackageBookingTime(activityId, packageId, packageAvailabilityId, selectedTime.time, selectedTime.quota);

        };

        const dates = Object.entries(availableDates).map(entry => {
            const [date, ...rest] = entry;
            return moment(date)
        });

        const isSoldOut = !(packageData.quota && packageData.quota > 0);

        return (
            <div className="whitebox" id={'package-' + packageData.id}>
                <h4 style={{ display: showHeader ? '' : 'none' }}>
                    <FormattedMessage id="package.option"/>
                </h4>
                <div className="package-header">
                    <div className="package-title-price">
                        <h5>{packageData.title}</h5>
                        <div className="package-price">
                            {paymentFlow === Constants.PAYMENT_FLOW.INQUIRY && <div className="inquiry-from"><FormattedMessage id="common.from" />{'  '}</div>}
                            <Price
                                className="discount-price price"
                                price={packageData.price}
                                specialPrice={packageData.specialPrice}
                            />
                        </div>
                    </div>
                    <div className="package-select">
                        {
                            paymentFlow === Constants.PAYMENT_FLOW.NORMAL && !isSoldOut &&
                            (<button
                                type="button"
                                id={'btn-select-package-' + packageData.id}
                                onClick={this.selectNewPackage}
                                className={classNames('btn', 'btn-s', 'white' + (open ? 'active' : ''))}
                            >
                                {open ? <FormattedMessage id="common.selected"/> :
                                    <FormattedMessage id="common.select"/>}
                            </button>)
                        }
                        {
                            paymentFlow === Constants.PAYMENT_FLOW.NORMAL && isSoldOut &&
                            (<button
                                type="button"
                                id={'btn-select-package-' + packageData.id}
                                className={classNames('btn', 'btn-s', 'grey')}
                                disabled="disabled"
                            >
                                <FormattedMessage id="package.sold.out"/>
                            </button>)
                        }
                        {paymentFlow === Constants.PAYMENT_FLOW.INQUIRY &&
                        <button className="btn btn-s white" id={'btn-select-package-' + packageData.id}
                                onClick={() => this.setState({
                                    showInquiryModal: true
                                })}>
                            <FormattedMessage id="common.contact.us"/>
                        </button>}
                        {this.state.showInquiryModal && (
                            <InquiryModal
                                show={true}
                                interestedExperience={`${activityId} ${activityName}`}
                                interestedPackage={packageData.title}
                                countries={countries}
                                instantMessengers={instantMessengers}
                                onClose={() => this.setState({ showInquiryModal: false })}
                                langId={langId}
                                paymentFlowType={paymentFlowType}
                            />
                        )}
                    </div>
                </div>
                <hr style={{ display: open ? '' : 'none' }}/>
                <div className="package-date-time" style={{ display: open ? '' : 'none' }}>
                    <div className="row">
                        <div className={`col-md-6 col-sm-6 package-date ${dates.length === 0 ? "empty-dates" : ""}`}>
                            <div className="form-group">
                                <label htmlFor="package-select-date">
                                    <FormattedMessage id="common.select.date"/>
                                </label>
                                <div className="activity-package-date-picker">
                                    <DatePicker
                                        customInput={
                                            <DatePickerCustomInput fontAwesome="fa-calendar-alt"
                                                                   iconClassName="fayfay-calendar-icon"
                                                                   placeholderText={intl.formatMessage({ id: 'package.selectDate' })}/>
                                        }
                                        selected={this.state.activitySelectedDate}
                                        onChange={this.handleActivityDateChange}
                                        includeDates={dates}
                                        showDisabledMonthNavigation
                                        dateFormat="DD/MM/YYYY"
                                        locale={intl.locale}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 package-time">
                            {showTime && <div className="form-group">
                                <label htmlFor="package-select-time">
                                    <FormattedMessage id="common.select.time"/>
                                </label>
                                <div className="div-time-select">
                                    <PackageTimeSelect
                                        packageId={packageData.id}
                                        packageAvailabilityId={packageAvailabilityId}
                                        timeList={timeList}
                                        selectPackageBookingTime={enhancedSelectPackageBookingTime}
                                        bookingTime={bookingTime}
                                        showDefaultOption={!bookingTime}
                                    />
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="row package-qty">
                        {showTicketTypes && <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="package-select-time">
                                    <FormattedMessage id="package.quantity"/>
                                </label>
                                <div className="row">
                                    <PackageTicketTypeList
                                        packageTicketPurchaseInfo={packageOptionMap[packageData.id] || {}}
                                        updatePackageTicketPurchase={updatePackageTicketPurchase}
                                        maximumTicketCount={packageData.maximumTicketCount}
                                        className="col-md-6 package-qty-row"
                                    />
                                </div>
                                {!hasError && !!packageData.minimumTicketCount && totalBookings < packageData.minimumTicketCount &&
                                <div className="row">
                                    <div className="col-sm-12">
                                        <span className="error">
                                            <FormattedMessage id="package.orderMinimumAmount"
                                                              values={{ value: packageData.minimumTicketCount }}/>
                                        </span>
                                    </div>
                                </div>}
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="package-details-header" onClick={this.toggleDetails}>
                    <h6>
                        <FormattedMessage id="package.option.items"/>&nbsp;&nbsp;
                        {!open && (!this.state.showDetails ? <i className="icon angle-down"/> :
                            <i className="icon angle-up"/>)}
                    </h6>
                </div>
                {(open || this.state.showDetails) && (
                    <div className="package-details">
                        <Markdown source={packageData.description}/>
                    </div>
                )}
            </div>
        );
    }
}

export default injectIntl(PackageOption)
