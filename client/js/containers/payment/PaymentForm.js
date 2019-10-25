import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldArray, reduxForm } from 'redux-form';
import PaymentPromotionCode from './PaymentPromotionCode';
import PaymentTravelerInformation from './PaymentTravelerInformation';
import PaymentActivities from './PaymentActivities';
import Modal from '../../components/Modal';
import Button from '../../components/inputs/Button';
import { scrollToInvalid } from '../../utils/validators';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import FormatMoney from '../../components/pricing/FormatMoney';
import PaypalButton from './PaypalButton';
import { getLangUrl, getParameterByName, getTimeZone } from '../../utils/helpers';
import PaymentTypes from './PaymentTypes';
import moment from 'moment';
import ExtraInfoConfirmationModal from './ExtraInfoConfirmationModal';
import Constants from 'fayfayConstants';

export class PaymentForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        initialize: PropTypes.func.isRequired,
        countries: PropTypes.array.isRequired,
        titles: PropTypes.array.isRequired,
        instantMessengers: PropTypes.array.isRequired,
        genders: PropTypes.array.isRequired,
        nationalities: PropTypes.array.isRequired,
        fetchCartInfo: PropTypes.func.isRequired,
        cartCheckout: PropTypes.func.isRequired,
        paypalCheckOut: PropTypes.func.isRequired,
        onePayCheckOut: PropTypes.func.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        resetAjaxStatus: PropTypes.func.isRequired,
        submitFailed: PropTypes.bool.isRequired,
        redeemCoupon: PropTypes.func.isRequired,
        coupons: PropTypes.array.isRequired,
        selectCoupon: PropTypes.func.isRequired,
        selectedCoupon: PropTypes.object.isRequired,
        selectedCouponId: PropTypes.number.isRequired,
        intl: PropTypes.object.isRequired,
        payNowCartId: PropTypes.string,
        fetchCoupons: PropTypes.func.isRequired,
        userInfo: PropTypes.object.isRequired,
        cartItems: PropTypes.array.isRequired,
        payment: PropTypes.object.isRequired,
        paymentForm: PropTypes.object,
        paymentType: PropTypes.string.isRequired,
        paymentTypeChanged: PropTypes.func.isRequired,
        lang: PropTypes.string.isRequired
    };

    static defaultProps = {
        payNowCartId: null
    };

    constructor(props) {
        super(props);
        this.state = {
            firstSubmitFailed: true,
            newPromoCode: '',
            zIndex: 0,
            flightOrVisaInfo: null,
            needProcessConfirm: false
        };

        this.paypalButton = React.createRef();
    }

    submitHandler = values => {
        this.props.cartCheckout(this.getSubmitValues(), this.props.payNowCartId);
    };

    checkImportantInfoBeforeProcessPay = (paymentType) => {
        const { cartItems } = this.props;

        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].extraInfoTypeName) {
                const list = this.getSubmitValues().items.filter(item => !!item.extraInfoType);

                if (!this.state.needProcessConfirm) {
                    this.setState({
                        needProcessConfirm: true,
                        flightOrVisaInfo: list
                    });
                    return;
                }
            }
        }

        if (paymentType === 'ONEPAY') {
            this.onOnePayCheckout();
        }
    };

    payNowClick = () => {
        if (this.state.newPromoCode)
            this.setState({
                newPromoCode: ''
            });

        if (this.props.submitFailed) {
            scrollToInvalid();
        }
    };

    onOnePayCheckout = () => {
        const checkoutPayment = this.props.selectedCouponId > 0 ? this.props.selectedCoupon : this.props.payment;

        this.props.onePayCheckOut(this.getSubmitValues(), this.props.payNowCartId, checkoutPayment.payTotalAmount, checkoutPayment.currency, this.props.paymentType === 'DOMESTIC');
    };

    onPaypalPayment = (data, actions) => {
        return actions.request({
            method: 'post', 'url': `/api/payment/paypal/create${this.getExtraParams()}`,
            json: this.getSubmitValues(), headers: { 'Content-Type': 'application/json;charset=UTF-8' }
        }).then(function(res) {
            return res.id;
        }).catch(function() {
        });
    };

    onPaypalAuthorize = (data, actions) => {
        const checkoutPayment = this.props.selectedCouponId > 0 ? this.props.selectedCoupon : this.props.payment;

        this.props.paypalCheckOut(this.getSubmitValues(), {
            cartId: this.props.payNowCartId,
            paymentId: data.paymentID,
            payerId: data.payerID
        }, checkoutPayment.payTotalAmount, checkoutPayment.currency);
    };

    componentDidUpdate() {
        if (this.props.submitFailed && this.state.firstSubmitFailed) {
            this.setState(
                {
                    firstSubmitFailed: false
                },
                () => scrollToInvalid()
            );
        }
    }

    closeModal = () => {
        if (this.props.ajaxStatus.serverMessage === 'MSG_ERROR_BOOKING_SUCCESS_CAN_NOT_SEND_EMAIL') {
            const langUrl = getLangUrl(this.props.intl.locale);

            window.location.replace(`${langUrl}/checkout/thank-you`);
        } else {
            this.props.resetAjaxStatus();
        }
    };

    enhancedRedeemCoupon = (promoCode, userId) => {
        this.props.redeemCoupon(promoCode, userId);
        this.setState({
            newPromoCode: promoCode
        });
    };

    componentDidMount() {
        const { userInfo } = this.props;

        const cartItems = [];

        this.props.cartItems.forEach(cartItem => {
            const quantity = cartItem.items.reduce(
                (sum, next) =>
                    sum + next.quantity
                , 0);

            const extraInfo = [];

            for (let i = 0; i < quantity; i++) {
                extraInfo.push({
                    dateOfArrival: moment(cartItem.packageAvailabilityDate),
                    dateOfDeparture: moment(cartItem.packageAvailabilityDate),
                    packageAvailabilityDate: cartItem.packageAvailabilityDate,
                    noOfCabinLuggage: '0',
                    noOfCheckinLuggage: '0'
                });
            }
            cartItems.push({ ...cartItem, extraInfo });
        });

        this.props.initialize({
            title: userInfo.title,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            phoneNumber: userInfo.phoneNumber,
            email: userInfo.email,
            countryId: userInfo.countryId,
            cartItems
        });
    }

    getExtraParams() {
        let queryString = '';
        if (this.props.payNowCartId) {
            queryString = `?cartId=${this.props.payNowCartId}`;
        }
        if (this.props.selectedCouponId) {
            if (queryString) {
                queryString += `&couponId=${this.props.selectedCouponId}`;
            } else {
                queryString = `?couponId=${this.props.selectedCouponId}`;
            }
        }

        return queryString;
    }

    getSubmitValues = () => {
        const values = this.props.paymentForm.values;

        const country = this.props.countries.find(country => country.id.toString() === values.countryId.toString());
        const whatsappCountry = values.whatsappCountryId ? this.props.countries.find(country => country.id.toString() === values.whatsappCountryId.toString()) : null;

        const items = values.cartItems.map(item => {
            const extraInfoValue = [];
            if (item.extraInfoTypeName === 'EXTRA_INFO_VISA' || item.extraInfoTypeName === 'EXTRA_INFO_VISA_URGENT') {
                item.extraInfo.forEach(item => {
                    extraInfoValue.push({
                        fullName: item.fullName,
                        dateOfBirth: moment(item.dateOfBirth).format('YYYY-MM-DD'),
                        passportNo: item.passportNo,
                        nationality: item.nationality,
                        arrivalAirport: item.arrivalAirport,
                        gender: item.gender,
                        dateOfArrival: item.packageAvailabilityDate,
                        flightNo: item.flightNo,
                        flightArrivalTime: `${item.arrivalHour}:${item.arrivalMinute}`
                    });
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_TRANSPORT') {
                item.extraInfo.forEach(item => {
                    extraInfoValue.push({
                        pickUpAddress: item.pickUpAddress,
                        dropOffAddress: item.dropOffAddress,
                        noOfCabinLuggage: Number(item.noOfCabinLuggage),
                        noOfCheckinLuggage: Number(item.noOfCheckinLuggage),
                        note: item.note || '',
                        flightNo: item.flightNo || 'N/A',
                        flightArrivalTime: `${item.arrivalHour}:${item.arrivalMinute}`
                    });
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_VISA_TRANSPORT_SIM') {
                item.extraInfo.forEach((element, index) => {
                    if (index === (item.extraInfo.length - 1)) {
                        extraInfoValue.push({
                            fullName: element.fullName,
                            dateOfBirth: moment(element.dateOfBirth).format('YYYY-MM-DD'),
                            passportNo: element.passportNo,
                            nationality: element.nationality,
                            arrivalAirport: element.arrivalAirport,
                            gender: element.gender,
                            dateOfArrival: element.packageAvailabilityDate,
                            flightNo: element.flightNo,
                            flightArrivalTime: `${element.arrivalHour}:${element.arrivalMinute}`,
                            pickUpAddress: element.pickUpAddress,
                            dropOffAddress: element.dropOffAddress,
                            noOfCabinLuggage: Number(element.noOfCabinLuggage),
                            noOfCheckinLuggage: Number(element.noOfCheckinLuggage),
                            note: element.note || ''
                        });
                    } else {
                        extraInfoValue.push({
                            fullName: element.fullName,
                            dateOfBirth: moment(element.dateOfBirth).format('YYYY-MM-DD'),
                            passportNo: element.passportNo,
                            nationality: element.nationality,
                            arrivalAirport: element.arrivalAirport,
                            gender: element.gender,
                            dateOfArrival: element.packageAvailabilityDate,
                            flightNo: element.flightNo,
                            flightArrivalTime: `${element.arrivalHour}:${element.arrivalMinute}`,
                            note: element.note || ''
                        });
                    }
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_DEPARTURE') {
                item.extraInfo.forEach(element => {
                    extraInfoValue.push({
                        fullName: element.fullName,
                        departureAirport: element.departureAirport,
                        dateOfDeparture: element.packageAvailabilityDate,
                        flightNo: element.flightNo,
                        departureTime: `${element.departureHour}:${element.departureMinute}`
                    });
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_ARRIVAL') {
                item.extraInfo.forEach(element => {
                    extraInfoValue.push({
                        fullName: element.fullName,
                        arrivalAirport: element.arrivalAirport,
                        dateOfArrival: element.packageAvailabilityDate,
                        flightNo: element.flightNo,
                        flightArrivalTime: `${element.arrivalHour}:${element.arrivalMinute}`
                    });
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_ARRIVAL_DEPARTURE') {
                item.extraInfo.forEach(element => {
                    extraInfoValue.push({
                        fullName: element.fullName,
                        arrivalAirport: element.arrivalAirport,
                        dateOfArrival: moment(element.dateOfArrival).format('YYYY-MM-DD'),
                        flightNo: element.flightNo,
                        flightArrivalTime: `${element.arrivalHour}:${element.arrivalMinute}`,
                        departureAirport: element.departureAirport,
                        dateOfDeparture: moment(element.dateOfDeparture).format('YYYY-MM-DD'),
                        flightNoDeparture: element.flightNoDeparture,
                        departureTime: `${element.departureHour}:${element.departureMinute}`
                    });
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_FAY_SIM_HK_DELIVERY') {
                item.extraInfo.forEach((element, index) => {
                    if (index === 0) {
                        extraInfoValue.push({
                            deliveryAddress: element.deliveryAddress,
                            note: element.note || Constants.DATA_NOT_AVAILABLE
                        });
                    }
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_FAY_SIM_VIETNAM_PICK_UP') {
                item.extraInfo.forEach((element, index) => {
                    if (index === 0) {
                        extraInfoValue.push({
                            flightNo: element.flightNo,
                            pickUpTime: `${element.pickUpHour}:${element.pickUpMinute}`,
                            note: element.note || Constants.DATA_NOT_AVAILABLE
                        });
                    }
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_FLIGHT_ARRIVAL') {
                item.extraInfo.forEach((element, index) => {
                    if (index === 0) {
                        extraInfoValue.push({
                            dateOfArrival: element.packageAvailabilityDate,
                            flightNo: element.flightNo,
                            flightArrivalTime: `${element.arrivalHour}:${element.arrivalMinute}`
                        });
                    }
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_FAY_SIM_HOTEL_DELIVERY') {
                item.extraInfo.forEach((element, index) => {
                    if (index === 0) {
                        extraInfoValue.push({
                            accommodationType: element.accommodationType,
                            hotelName: element.hotelName,
                            deliveryAddress: element.deliveryAddress,
                            note: element.note || Constants.DATA_NOT_AVAILABLE
                        });
                    }
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_PROPERTY_FORM') {
                item.extraInfo.forEach((element, index) => {
                    if (index === 0) {
                        extraInfoValue.push({
                            preferredTourLanguage: element.preferredTourLanguage,
                            budget: element.budget,
                            unitTypes: element.unitTypes,
                            unitSize: element.unitSize,
                            preferredPropertyDistrict: element.preferredPropertyDistrict,
                            note: element.note || Constants.DATA_NOT_AVAILABLE
                        });
                    }
                });
            } else if (item.extraInfoTypeName === 'EXTRA_INFO_PASSENGER_INFORMATION') {
                item.extraInfo.forEach(item => {
                    extraInfoValue.push({
                        fullName: item.fullName,
                        dateOfBirth: moment(item.dateOfBirth).format('YYYY-MM-DD'),
                        gender: item.gender,
                        passportNo: item.passportNo,
                        expiredDate: moment(item.expiredDate).format('YYYY-MM-DD'),
                        nationality: item.nationality,
                        bagWeight: Number(item.bagWeight),
                        passengerWeight: Number(item.passengerWeight),
                        emergencyContact: item.emergencyContact
                    });
                });
            }

            return {
                packageAvailabilityId: item.packageAvailabilityId,
                activityId: item.activityId,
                activityName: item.activityName,
                packageId: item.packageId,
                bookingNote: item.bookingNote,
                extraInfoType: item.extraInfoTypeName || null,
                extraInfoValue: extraInfoValue.length ? JSON.stringify(extraInfoValue) : null
            };

        });

        return {
            title: values.title,
            firstName: values.firstName,
            lastName: values.lastName,
            countryId: country.id,
            countryCode: country.countryCode,
            country: country.name,
            passportCountryId: country.id,
            phoneNumber: values.phoneNumber,
            instantMessengerCountryCode: whatsappCountry ? whatsappCountry.countryCode : null,
            instantMessengerKey: values.instantMessengerKey,
            instantMessenger: values.instantMessenger,
            email: values.email,
            extraInfo: '',
            couponId: this.props.selectedCouponId || '',
            locale: this.props.intl.locale,
            timezone: getTimeZone(),
            items
        };
    };

    onMouseOverPaypalButton = () => {
        if (!this.props.paymentForm.syncErrors && !this.props.ajaxStatus.isSubmitting) {
            this.setState({
                zIndex: 3
            });
        }
    };

    onMouseOutPaypalButton = () => {
        this.setState({
            zIndex: 0
        });
    };

    //PayPal Developer https://developer.paypal.com/docs/classic/api/locale_codes/#supported-locale-codes
    getPayPalLocale = () => {
        if (this.props.lang === 'vi-vn') {
            return 'en_US';
        } else {
            const list = this.props.lang.split('-');
            return `${list[0]}_${list[1].toUpperCase()}`;
        }
    };

    render() {
        const {
            handleSubmit,
            countries,
            ajaxStatus,
            coupons,
            selectedCoupon,
            selectedCouponId,
            intl,
            fetchCoupons,
            userInfo,
            titles,
            instantMessengers,
            genders,
            nationalities,
            payNowCartId,
            cartItems,
            payment,
            paymentType,
            paymentTypeChanged
        } = this.props;
        let message;

        const checkoutPayment = selectedCouponId > 0 ? selectedCoupon : payment;

        switch (ajaxStatus.serverMessage) {
            case 'MSG_ERROR_CARD_INCORRECT_NUMBER_EXCEPTION': {
                message = intl.formatMessage({ id: 'payment.card.incorrect.number' });
                break;
            }
            case 'MSG_ERROR_CARD_INVALID_NUMBER_EXCEPTION': {
                message = intl.formatMessage({ id: 'payment.card.invalid.number' });
                break;
            }
            case 'MSG_ERROR_CARD_INVALID_EXPIRY_MONTH_EXCEPTION': {
                message = intl.formatMessage({ id: 'payment.card.invalid.expiry.month' });
                break;
            }
            case 'MSG_ERROR_BOOKING_SUCCESS_CAN_NOT_SEND_EMAIL': {
                message = intl.formatMessage({ id: 'payment.cannotSendEmail' });
                break;
            }
            case 'MEG_ERROR_CART_NOT_FOUND': {
                message = intl.formatMessage({ id: 'payment.cartNotFound' });
                break;
            }
            case 'MSG_ERROR_CHECKOUT_COUPON_INVALID': {
                message = intl.formatMessage({ id: 'payment.couponInvalid' });
                break;
            }
            case 'MSG_ERROR_CARD_INVALID_REQUEST_EXCEPTION': {
                message = intl.formatMessage({ id: 'payment.invalidMinimumAmount' });
                break;
            }
            case 'MSG_ERROR_CARD_CARD_DECLINED_EXCEPTION': {
                message = intl.formatMessage({ id: 'payment.cartDeclined' });
                break;
            }
            case 'MSG_ERROR_CART_INVALID': {
                message = intl.formatMessage({ id: 'payment.cartInvalid' });
                break;
            }
            case 'MSG_ERROR_CART_EXPIRED': {
                message = intl.formatMessage({ id: 'payment.cartExpired' });
                break;
            }
            default:
                if (ajaxStatus.serverMessage.indexOf('http') >= 0) {
                    window.location.href = ajaxStatus.serverMessage;
                }

                message = intl.formatMessage({ id: 'common.server.error' });
                break;
        }

        const errorCode = getParameterByName('code');
        let errorMessage = '';
        if (errorCode) {
            errorMessage = intl.formatMessage({
                id: `payment.onepay.error.${errorCode}`,
                defaultMessage: getParameterByName('error')
            });
        }

        let checkedVisaOrFlight = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].extraInfoTypeName === 'EXTRA_INFO_VISA'
                || cartItems[i].extraInfoTypeName === 'EXTRA_INFO_VISA_URGENT'
                || cartItems[i].extraInfoTypeName === 'EXTRA_INFO_TRANSPORT'
                || cartItems[i].extraInfoTypeName === 'EXTRA_INFO_VISA_TRANSPORT_SIM') {
                checkedVisaOrFlight = true;
                break;
            }
        }

        return (
            <form onSubmit={handleSubmit(this.submitHandler)} id="paymentForm" className="payment-form">
                <PaymentTravelerInformation countries={countries} userInfo={userInfo} titles={titles}
                                            instantMessengers={instantMessengers}/>
                <FieldArray name="cartItems" component={PaymentActivities} userInfo={userInfo} genders={genders}
                            nationalities={nationalities}/>
                <div className="row visible-sm visible-xs">
                    <div className="col-sm-12">
                        <div className="greybox activity">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="total">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                <span>
                                                    <FormattedMessage id="payment.order.total"/>
                                                </span>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-6 no-padding-left txt-right">
                                                <span className="price">
                                                    <FormatMoney
                                                        value={checkoutPayment.totalAmount}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        {selectedCouponId > 0 && (
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <span>
                                                        <FormattedMessage id="payment.use.promo.code"/>
                                                    </span>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-6 no-padding-left txt-right">
                                                    <span className="price">
                                                        {'- '}
                                                        <FormatMoney
                                                            value={checkoutPayment.discount}
                                                            currency={checkoutPayment.currency}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="row">
                                            <div className="col-md-6 col-sm-8 col-xs-6">
                                                <span>
                                                    <FormattedMessage id="payment.amount"/>
                                                </span>
                                            </div>
                                            <div className="col-md-6 col-sm-4 col-xs-6 no-padding-left txt-right">
                                                <span className="price">
                                                    <FormatMoney value={checkoutPayment.totalPayAmount}/>
                                                </span>
                                            </div>
                                        </div>
                                        {payment.currency !== payment.payCurrency && checkoutPayment.totalAmount > 0 &&
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <hr/>
                                                <p className="desc">
                                                    <FormattedMessage id="payment.transaction.accept"
                                                                      values={{ 'ccy': checkoutPayment.payCurrency }}/>
                                                    <span>(<FormatMoney value={checkoutPayment.payTotalAmount}
                                                                        currency={checkoutPayment.payCurrency}/>)</span>
                                                </p>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PaymentTypes type={paymentType} intl={intl} onChanged={paymentTypeChanged}
                              disabled={checkoutPayment.payTotalAmount <= 0}/>
                {checkoutPayment.totalAmount > 0 && <PaymentPromotionCode
                    redeemCoupon={this.enhancedRedeemCoupon}
                    selectCoupon={this.props.selectCoupon}
                    selectedCouponId={selectedCouponId}
                    coupons={coupons}
                    ajaxStatus={ajaxStatus}
                    promoCode={this.state.newPromoCode}
                    fetchCoupons={fetchCoupons}
                    payNowCartId={payNowCartId}
                    paymentType={paymentType}
                    resetAjaxStatus={this.props.resetAjaxStatus}
                />}
                <div className="row">
                    <div className="col-md-12">
                        <div className="greyborderbox">
                            <div className="row">
                                <div className="col-lg-9 col-md-7 col-sm-7 paddingTop-15px">
                                    <p>
                                        <FormattedHTMLMessage id="payment.pay.now.announcement"/>
                                    </p>
                                </div>
                                <div
                                    className="col-lg-3 col-lg-offset-0 col-md-offset-0 col-md-5 col-sm-offset-0 col-sm-5 col-xs-offset-1 col-xs-10 txt-right paddingTop-20px">
                                    {checkoutPayment.payTotalAmount <= 0 &&
                                    <Button
                                        type="submit"
                                        className="btn btn-lg"
                                        submitting={ajaxStatus.isSubmitting}
                                        onClick={this.payNowClick}>
                                        <FormattedMessage id="common.pay.now"/>
                                    </Button>
                                    }
                                    {checkoutPayment.payTotalAmount > 0 && (paymentType === 'ONEPAY' || paymentType === 'DOMESTIC') &&
                                    <Button
                                        type="submit"
                                        className="btn btn-lg"
                                        submitting={ajaxStatus.isSubmitting}
                                        onClick={this.props.handleSubmit(() => this.checkImportantInfoBeforeProcessPay('ONEPAY'))}>
                                        <FormattedMessage id="common.pay.now"/>
                                    </Button>
                                    }
                                    {checkoutPayment.payTotalAmount > 0 && paymentType === 'PAYPAL' && checkedVisaOrFlight &&
                                    <Button
                                        type="submit"
                                        className="btn btn-lg"
                                        submitting={ajaxStatus.isSubmitting}
                                        onClick={this.props.handleSubmit(() => this.checkImportantInfoBeforeProcessPay('PAYPAL'))}>
                                        <FormattedMessage id="common.pay.now"/>
                                    </Button>
                                    }
                                    <div
                                        style={paymentType === 'PAYPAL' && checkoutPayment.payTotalAmount > 0 && !checkedVisaOrFlight ? {} : { display: 'none' }}>
                                        <div onMouseOver={this.onMouseOverPaypalButton}
                                             onMouseOut={this.onMouseOutPaypalButton}>
                                            <div style={{
                                                position: 'absolute',
                                                width: '100%',
                                                opacity: 0,
                                                zIndex: 1
                                            }}>
                                                <Button type="button"
                                                        style={{ width: '100%' }}
                                                        onClick={this.props.handleSubmit(() => {
                                                        })}>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                </Button>
                                            </div>
                                            <div style={{
                                                zIndex: this.state.zIndex,
                                                position: 'relative'
                                            }}>
                                                <PaypalButton payment={this.onPaypalPayment}
                                                              locale={this.getPayPalLocale()}
                                                              onAuthorize={this.onPaypalAuthorize}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {errorMessage &&
                            <div className="row">
                                <div className="col-lg-12 col-md-12 paddingTop-15px">
                                    <p className="error txt-right payment-error">
                                        {errorMessage}
                                    </p>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="greybox">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h5>
                                                <i className="icon lock marginTop-10px"/> <FormattedMessage
                                                id="payment.data.security"/>
                                            </h5>
                                            <p>
                                                <FormattedHTMLMessage
                                                    id="payment.your.details.will.be.safe.while.pay.thought.ssl"/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={ajaxStatus.isServerError && !this.state.newPromoCode} title="Notice!" body={message}>
                    <button type="button" className="btn btn-s" onClick={this.closeModal}>
                        <FormattedMessage id="common.ok"/>
                    </button>
                </Modal>
                {this.state.needProcessConfirm
                && <ExtraInfoConfirmationModal data={this.state.flightOrVisaInfo}
                                               paymentType={paymentType}
                                               close={() => {
                                                   this.setState({ needProcessConfirm: false });
                                               }}
                                               onepay={this.onOnePayCheckout}
                                               onMouseOutPaypalButton={this.onMouseOutPaypalButton}
                                               onMouseOverPaypalButton={this.onMouseOverPaypalButton}
                                               onPaypalAuthorize={this.onPaypalAuthorize}
                                               getPayPalLocale={this.getPayPalLocale}
                                               onPaypalPayment={this.onPaypalPayment}/>}
            </form>
        );
    }
}

export default injectIntl(
    reduxForm({
        form: 'paymentForm',
        onSubmitFail: () => scrollToInvalid()
    })(PaymentForm));
