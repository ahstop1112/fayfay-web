import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class PaymentTypes extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired,
        onChanged: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired
    };

    changePaymentMethod = e => {
        this.props.onChanged(e.target.value);
    };

    render() {
        const { type, disabled } = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="orange-header">
                        <FormattedMessage id="payment.type"/>
                    </div>
                    <div className="greyborderbox">
                        <div className="bg-light-grey marginBottom-15px">
                            <i className="icon lock"/>
                            <FormattedMessage id="payment.card.fully.encrypted.secure.protected"/>
                        </div>
                        <div className="bg-white">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-xs-6">
                                    <div className="form-group">
                                        <label>
                                            <input type="radio" name="payment_type" value="ONEPAY"
                                                   defaultChecked={type === 'ONEPAY'}
                                                   onChange={this.changePaymentMethod}
                                                   className="radio-btn"
                                                   disabled={disabled}
                                            />
                                            <FormattedMessage id="payment.onepay.desc"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-xs-6 txt-right">
                                    <img src="/images/icons/visa.png" className="icon-png"/>
                                    <img src="/images/icons/master.png" className="icon-png"/>
                                    <img src="/images/icons/ae.png" className="icon-png"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label>
                                            <input type="radio" name="payment_type" value="DOMESTIC"
                                                   defaultChecked={type === 'DOMESTIC'}
                                                   onChange={this.changePaymentMethod}
                                                   className="radio-btn"
                                                   disabled={disabled}
                                            />
                                            <FormattedMessage id="payment.domesticCard"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-xs-6">
                                    <div className="form-group">
                                        <label>
                                            <input type="radio" name="payment_type" value="PAYPAL"
                                                   defaultChecked={type === 'PAYPAL'}
                                                   onChange={this.changePaymentMethod}
                                                   className="radio-btn"
                                                   disabled={disabled}
                                            />
                                            <FormattedMessage id="payment.paypal"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-xs-6 txt-right">
                                    <img src="/images/icons/paypal.png" className="icon-png"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(PaymentTypes);
