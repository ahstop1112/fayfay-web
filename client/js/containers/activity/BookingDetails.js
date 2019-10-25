import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import FormatMoney from '../../components/pricing/FormatMoney';
import constants from 'fayfayConstants';
import { formatDate } from '../../utils/helpers';
import PubSub from 'pubsub-js';

class BookingDetails extends Component {
    static propTypes = {
        activePackage: PropTypes.object.isRequired,
        packageOptionMap: PropTypes.object.isRequired,
        activityId: PropTypes.number.isRequired,
        packageAvailabilityId: PropTypes.number.isRequired,
        addToCart: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired
    };

    addToCartClicked = () => {
        const items = [];
        const { ticketsToPurchase } = this.props.packageOptionMap[this.props.activePackage.id];
        Object.entries(ticketsToPurchase).forEach(entry => {
            const [ticketTypeId, ticketPurchaseInfo] = entry;
            if (ticketPurchaseInfo.quantity)
                items.push({
                    quantity: ticketPurchaseInfo.quantity,
                    packagePriceId: Number(ticketTypeId)
                });
        });

        const values = {
            payNow: this.state.payNow,
            activityId: this.props.activityId,
            packageId: this.props.activePackage.id,
            packageAvailabilityId: this.props.packageAvailabilityId,
            locale: this.props.intl.locale,
            items
        };
        this.props.addToCart(values, this.state.payNow);
        window.setTimeout(function () {
            PubSub.publish(constants.EVENTS.SHOPPING_CART_ITEM_ADDED);
        }, 800);

        document.getElementsByClassName('tooltiptext')[0].classList.add('show');
        setTimeout(() => {
            document.getElementsByClassName('tooltiptext')[0].classList.remove('show');
        }, 3000);
    };

    render() {
        const { activePackage, packageOptionMap } = this.props;

        const { bookingDate, bookingTime, ticketsToPurchase } = packageOptionMap[activePackage.id] || {};
        let total = 0;

        return (
            <div className="booking-details-all">
                <div className="booking-details whitebox hidden-sm hidden-xs">
                    <h4>
                        <FormattedMessage id="package.booking.details"/>
                    </h4>
                    <p>{activePackage.title}</p>
                    <p>
                        <span className="title-date">
                            <FormattedMessage id="common.date"/>
                        </span>
                        {formatDate(bookingDate, "DD/MM/YYYY")}
                        {bookingTime !== constants.ALL_DAY_BOOKING_TIME && <span className="title-date marginLeft-15px">
                            <FormattedMessage id="common.time"/>
                        </span>}
                        {bookingTime !== constants.ALL_DAY_BOOKING_TIME && bookingTime}
                    </p>
                    <div className="booking-order">
                        {Object.entries(ticketsToPurchase || {}).map(entry => {
                            const [ticketTypeId, ticketPurchaseInfo] = entry;
                            const subtotal = ticketPurchaseInfo.unitPrice * ticketPurchaseInfo.quantity;
                            total += subtotal;
                            if (ticketPurchaseInfo.quantity)
                                return (
                                    <div className="row order" key={ticketTypeId}>
                                        <div className="col-md-4">
                                            <span className="type">{ticketPurchaseInfo.ticketTypeName}</span>
                                        </div>
                                        <div className="col-md-2">
                                            x
                                            <span className="qty">{ticketPurchaseInfo.quantity}</span>
                                        </div>
                                        <div className="col-md-6 txt-right">
                                            <span className="price">
                                                <FormatMoney value={subtotal}/>
                                            </span>
                                        </div>
                                    </div>
                                );
                        })}
                    </div>
                    <div className="booking-total">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="total">
                                    <FormattedMessage id="payment.total"/>
                                </span>
                            </div>
                            <div className="col-md-6 txt-right">
                                <span className="total-price">
                                    <FormatMoney value={total}/>
                                </span>
                            </div>
                        </div>
                        <ul className="remark float-right hidden">
                            <li>
                                <span>
                                    <FormattedMessage id="payment.complete.this.activity.to.get"/>
                                    <b>
                                        <FormattedMessage id="payment.p99"/>
                                    </b>{' '}
                                    <FormattedMessage id="payment.credits"/>!
                                </span>
                            </li>
                        </ul>
                        <div className="buttons">
                            <div>
                                <button
                                    className="btn btn-lg yellow add-to-cart"
                                    onClick={() => this.setState({ payNow: false }, this.addToCartClicked)}
                                >
                                    <FormattedMessage id="package.add.to.cart"/>
                                </button>
                                <div className="tooltiptext"><FormattedMessage id="common.added.to.dart"/></div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-lg"
                                    onClick={() => this.setState({ payNow: true }, this.addToCartClicked)}
                                >
                                    <FormattedMessage id="common.book.now"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="booking-details whitebox visible-sm visible-xs">
                    <div className="buttons">
                        <div className="btn-div">
                            <button
                                className="btn btn-lg yellow"
                                onClick={() => this.setState({ payNow: false }, this.addToCartClicked)}
                            >
                                <FormattedMessage id="package.add.to.cart"/>
                            </button>
                        </div>
                        <div className="btn-div">
                            <button
                                className="btn btn-lg"
                                onClick={() => this.setState({ payNow: true }, this.addToCartClicked)}
                            >
                                <FormattedMessage id="common.book.now"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(BookingDetails);
