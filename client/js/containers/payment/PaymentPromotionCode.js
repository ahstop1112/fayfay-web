import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import FormatMoney from '../../components/pricing/FormatMoney';
import { formatDate } from '../../utils/helpers'

class PaymentPromotionCode extends Component {
    static propTypes = {
        selectCoupon: PropTypes.func.isRequired,
        redeemCoupon: PropTypes.func.isRequired,
        selectedCouponId: PropTypes.number.isRequired,
        coupons: PropTypes.array.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        resetAjaxStatus: PropTypes.func.isRequired,
        promoCode: PropTypes.string.isRequired,
        intl: PropTypes.object.isRequired,
        fetchCoupons: PropTypes.func.isRequired,
        payNowCartId: PropTypes.string,
        paymentType: PropTypes.string.isRequired
    };

    state = {
        promoCodeValue: '',
        showCoupons: false,
        loadCouponsComplete: false,
        couponId: ''
    };

    redeemPromoCode = () => {
        if (this.state.promoCodeValue) {
            const coupon = this.props.coupons.find(item => item.code.toUpperCase() === this.state.promoCodeValue.toUpperCase());

            if (coupon && coupon.valid) {
                this.props.selectCoupon(coupon.id, this.props.payNowCartId, this.props.paymentType);
            } else {
                this.props.redeemCoupon(this.state.promoCodeValue, this.props.payNowCartId);
            }
            this.setState({
                promoCodeValue: ''
            });
        } else {
            this.promoCodeInput.focus();
        }

    };

    promoCodeChanged = e => {
        this.setState({
            promoCodeValue: e.target.value
        });
    };

    selectedCouponChanged = id => {
        const { paymentType } = this.props;
        if (id !== this.props.selectedCouponId) {
            this.props.selectCoupon(id, this.props.payNowCartId, paymentType === 'DOMESTIC' ? 'ONEPAY' : paymentType);
            this.setState({
                couponId: id
            });
        } else {
            this.props.selectCoupon(0);
            this.setState({
                couponId: ''
            });
        }
    };

    btnOnClick = () => {
        if (this.state.showCoupons) {
            this.props.selectCoupon(0);
        } else if (!this.state.loadCouponsComplete) {
            this.props.fetchCoupons(this.props.payNowCartId);
        }
        this.setState({
            showCoupons: !this.state.showCoupons,
            loadCouponsComplete: true
        });
    };

    componentDidUpdate() {
        const { coupons, promoCode, ajaxStatus, resetAjaxStatus } = this.props;
        if (ajaxStatus.isSubmitSuccess) {
            for (let i = 0; i < coupons.length; i++) {
                if (coupons[i].code === promoCode && coupons[i].valid) {
                    this.selectedCouponChanged(coupons[i].id);
                    resetAjaxStatus();
                    break;
                }
            }
        }
    }

    render() {
        const { coupons, ajaxStatus, promoCode, intl } = this.props;

        const applicableCoupons = coupons.filter(item => item.valid);
        const notApplicableCoupons = coupons.filter(item => !item.valid);

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="greyborderbox">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-xs-8">
                                <button type="button" className="btn btn-s promo" onClick={this.btnOnClick}>
                                    <FormattedMessage id="payment.use.promo.code"/> {' '}
                                    <i
                                        className={classNames('icon', {
                                            'angle-down': !this.state.showCoupons,
                                            'angle-up': this.state.showCoupons
                                        })}
                                    />
                                </button>
                            </div>
                        </div>
                        {this.state.showCoupons && (
                            <div className="marginTop-15px">

                                <input type="hidden" name="couponId" value={this.state.couponId}/>
                                <div className="row form-group">
                                    <div className="col-lg-5 col-md-8 col-xs-9 nopadding-right">
                                        <input
                                            type="text"
                                            ref={input => {
                                                this.promoCodeInput = input;
                                            }}
                                            className="input-field input-m"
                                            value={this.state.promoCodeValue}
                                            onChange={this.promoCodeChanged}
                                            placeholder={intl.formatMessage({ id: 'payment.enter.your.promo.code' })}
                                        />
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-xs-3 nopadding">
                                        <button type="button" className="btn btn-xs" onClick={this.redeemPromoCode}>
                                            <FormattedMessage id="payment.redeem"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        {promoCode &&
                                        ajaxStatus.isSubmitSuccess && (
                                            <div className="success">
                                                <span>
                                                    <FormattedMessage id="payment.promo.code.added"/>
                                                </span>
                                            </div>
                                        )}
                                        {promoCode &&
                                        ajaxStatus.isServerError && (
                                            <div className="error">
                                                <span>
                                                    {ajaxStatus.serverMessage ===
                                                    'MSG_ERROR_COUPON_USER_EXISTED' ? (
                                                        <FormattedMessage id="payment.promo.code.already.redeemed"/>
                                                    ) : (
                                                        <FormattedMessage id="payment.promo.code.is.not.valid"/>
                                                    )}
                                                </span>
                                            </div>
                                        )}
                                        <hr/>
                                    </div>
                                </div>
                                {applicableCoupons.length > 0 && (
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12">
                                            <span className="payment-coupons-title">
                                                <FormattedMessage id="payment.applicable"/>
                                            </span>
                                        </div>
                                    </div>
                                )}
                                <div className="row">

                                    {applicableCoupons.map(item => {
                                        return (
                                            <div
                                                className="col-md-6 col-sm-6 col-xs-12"
                                                key={item.id}
                                                onClick={() => {
                                                    if (item.valid) this.selectedCouponChanged(item.id);
                                                }}
                                                disabled
                                            >
                                                <div
                                                    className={classNames('', {
                                                        greyborderbox: item.valid && this.props.selectedCouponId !== item.id,
                                                        orangebox:
                                                        item.valid && this.props.selectedCouponId === item.id,
                                                        greybox: !item.valid
                                                    })}
                                                >
                                                    <div>{item.title}</div>
                                                    <h5 className="discount">
                                                        {!item.percent && (
                                                            <FormatMoney
                                                                value={item.amount}
                                                                currency={item.currencyCode}
                                                            />
                                                        )}
                                                        {item.percent && `${item.amount}%`}{' '}
                                                        <FormattedMessage id="payment.off"/>{' '}
                                                        {!item.valid && (
                                                            <React.Fragment>
                                                                {'('}
                                                                <FormattedMessage id="payment.notApplicable"/>
                                                                {')'}
                                                            </React.Fragment>
                                                        )}
                                                    </h5>
                                                    <p className="desc">
                                                        <FormattedMessage id="payment.coupon.expired"/>{' '}
                                                        {item.forever &&
                                                        intl.formatMessage({ id: 'account.coupon.NeverExpired' })}
                                                        {!item.forever && formatDate(item.endDate, 'DD/MM/YYYY HH:mm')}
                                                        <br/>
                                                        <FormattedMessage id="payment.promo.code"/>: {item.code}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {notApplicableCoupons.length > 0 && (
                                    <div className="row">
                                        <div className="col-md-11 col-xs-10 ">
                                            <span className="payment-coupons-title">
                                                <FormattedMessage id="payment.notApplicable"/>
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="row">
                                    {notApplicableCoupons.map(item => {
                                        return (
                                            <div
                                                className="col-lg-6 col-md-6 col-sm-6"
                                                key={item.id}
                                                onClick={() => {
                                                    if (item.valid) this.selectedCouponChanged(item.id);
                                                }}
                                                disabled
                                            >
                                                <div
                                                    className={classNames('', {
                                                        whitebox: item.valid && this.props.selectedCouponId !== item.id,
                                                        orangebox:
                                                        item.valid && this.props.selectedCouponId === item.id,
                                                        greybox: !item.valid
                                                    })}
                                                >
                                                    <h5 className="discount">
                                                        {!item.percent && (
                                                            <FormatMoney
                                                                value={item.amount}
                                                                currency={item.currencyCode}
                                                            />
                                                        )}
                                                        {item.percent && `${item.amount}%`}{' '}
                                                        <FormattedMessage id="payment.off"/>{' '}
                                                        {!item.valid && (
                                                            <React.Fragment>
                                                                {'('}
                                                                <FormattedMessage id="payment.notApplicable"/>
                                                                {')'}
                                                            </React.Fragment>
                                                        )}
                                                    </h5>
                                                    <p className="desc">
                                                        <FormattedMessage id="payment.coupon.expired"/>{' '}
                                                        {item.forever &&
                                                        intl.formatMessage({ id: 'account.coupon.NeverExpired' })}
                                                        {!item.forever && formatDate(item.endDate, 'DD/MM/YYYY HH:mm')}
                                                        <br/>
                                                        <FormattedMessage id="payment.promo.code"/>: {item.code}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(PaymentPromotionCode);
