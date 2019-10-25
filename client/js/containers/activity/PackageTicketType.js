import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Price from '../../components/pricing/Price';
import { FormattedMessage } from 'react-intl';

export default class PackageTicketType extends Component {
    static propTypes = {
        packageId: PropTypes.number,
        bookingDate: PropTypes.string,
        bookingTime: PropTypes.string,
        ticketTypeId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        specialPrice: PropTypes.number,
        quota: PropTypes.number.isRequired,
        quantity: PropTypes.number,
        minimumTicketCount: PropTypes.number,
        maximumTicketCount: PropTypes.number,
        updatePackageTicketPurchase: PropTypes.func.isRequired,
        checkZeroStatus: PropTypes.func.isRequired,
        className: PropTypes.string
    };

    static defaultProps = {
        packageId: 0,
        bookingDate: '',
        bookingTime: '',
        quantity: 0,
        specialPrice: 0,
        minimumTicketCount: 0,
        maximumTicketCount: 0,
        className: 'col-md-12 package-qty-row'
    };

    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity
        };
    }

    updateTicketQuantity = (quantity, op) => {
        const {
            packageId,
            bookingDate,
            bookingTime,
            ticketTypeId,
            name,
            price,
            specialPrice,
            quota,
            updatePackageTicketPurchase,
            checkZeroStatus
        } = this.props;

        if (quantity < 0) return;
        if (op === '-' && checkZeroStatus(this.props.quantity, name)) {
            return;
        }

        this.setState({
            quantity: quantity
        });

        updatePackageTicketPurchase(
            packageId,
            bookingDate,
            bookingTime,
            ticketTypeId,
            name,
            quantity,
            specialPrice || price
        );
    };

    render() {
        const { name, price, specialPrice, quota, className, minimumTicketCount, maximumTicketCount } = this.props;
        const quantity = this.props.quantity ? this.props.quantity : this.state.quantity;

        return (
            <div className={className}>
                <div className="row">
                    <div className="col-lg-6 col-md-7 col-sm-6 col-xs-7">
                        <h6>{name}</h6>
                        {price > 0 && <Price price={price} specialPrice={specialPrice} />}
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-6 col-xs-5 txt-right input-group">
                        <span className="input-group-btn">
                            <button
                                type="button"
                                className="btn number"
                                disabled={quantity <= 0}
                                data-type="minus"
                                data-field="quant[1]"
                                onClick={() => this.updateTicketQuantity(quantity - 1, '-')}
                            >
                                <span className="icon minus" />
                            </button>
                        </span>
                        <input type="text" className="form-control fix-zindex" value={quantity} disabled />
                        <span className="input-group-btn">
                            <button
                                type="button"
                                className="btn number"
                                disabled={quota <= 0 || (maximumTicketCount && quantity >= maximumTicketCount)}
                                data-type="plus"
                                data-field="quant[1]"
                                onClick={() => this.updateTicketQuantity(quantity + 1, '+')}
                            >
                                <span className="icon plus" />
                            </button>
                        </span>
                    </div>
                    <div className="col-md-12">
                        {!!minimumTicketCount &&
                            quantity < minimumTicketCount && (
                                <span className="error">
                                    <FormattedMessage
                                        id="package.ticketMinimumAmount"
                                        values={{ value: minimumTicketCount }}
                                    />
                                </span>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
