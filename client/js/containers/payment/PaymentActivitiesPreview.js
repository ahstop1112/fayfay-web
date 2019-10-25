import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import FormatMoney from '../../components/pricing/FormatMoney';
import { formatDate } from "../../utils/helpers";

export default class PaymentActivitiesPreview extends Component {
    static propTypes = {
        cartItems: PropTypes.array.isRequired,
        payment: PropTypes.object.isRequired,
        selectedCouponId: PropTypes.number.isRequired,
        selectedCoupon: PropTypes.object.isRequired
    };

    render() {
        const { cartItems, payment, selectedCouponId, selectedCoupon } = this.props;
        const checkoutPayment = selectedCouponId > 0 ? selectedCoupon : payment;
        const checkoutItems = cartItems.sort((a, b) => a.id > b.id);

        return (
            <div className="row payment-right-container">
                {checkoutItems.map(cartItem => {
                    return (
                        <div className="col-sm-12 hidden-sm hidden-xs" key={cartItem.id}>
                            <div className="greybox activity">
                                <div className="row">
                                    <div className="col-md-12 col-sm-6">
                                        <div className="content">
                                            <h5>{cartItem.activityName}</h5>
                                            <h6>
                                                <FormattedMessage id="common.activity.date"/>
                                            </h6>
                                            <p>{formatDate(cartItem.packageAvailabilityDate, 'DD/MM/YYYY')} {cartItem.packageAvailabilityTime}</p>
                                        </div>
                                        <hr/>
                                        <div className="travelers">
                                            <h6>
                                                <FormattedMessage id="payment.quantity"/>
                                            </h6>
                                            {cartItem.items.map(item => {
                                                return (
                                                    <div className="row" key={item.id}>
                                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                                            {item.ticketTypeName} x {item.quantity}
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-6 txt-right">
                                                            <FormatMoney
                                                                value={item.amount}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="col-sm-12 hidden-xs hidden-sm">
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
                                        <div className="col-md-12">
                                            <hr />
                                            <p className="desc">
                                                <FormattedMessage id="payment.transaction.accept" values={{"ccy":checkoutPayment.payCurrency}}/><br />
                                                <span>(<FormatMoney value={checkoutPayment.payTotalAmount} currency={checkoutPayment.payCurrency}/>)</span>
                                            </p>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 hidden-xs hidden-sm">
                    <div className="greybox activity">
                        <div className="row">
                            <div className="col-md-12 col-sm-8 col-xs-12">
                            <FormattedMessage id="payment.rate"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
