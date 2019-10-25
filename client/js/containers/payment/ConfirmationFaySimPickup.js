import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class ConfirmationFaySimPickup extends Component {
    static propTypes = {
        extraInfos: PropTypes.array.isRequired,
        intl: PropTypes.object.isRequired
    };

    render() {
        const { extraInfos } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((item, index) => {
                    return (<div key={`faysim-pickup-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.pickupTime"/>
                                    </label>
                                    <div>{item.pickUpTime}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="account.flight.no"/>
                                    </label>
                                    <div>{item.flightNo}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.note"/>
                                    </label>
                                    <div>{item.note}</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(ConfirmationFaySimPickup);
