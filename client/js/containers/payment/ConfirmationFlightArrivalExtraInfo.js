import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class ConfirmationFlightArrivalExtraInfo extends Component {
    static propTypes = {
        extraInfos: PropTypes.array.isRequired,
        intl: PropTypes.object.isRequired
    };

    render() {
        const { extraInfos, intl } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((flightInfo, index) => {
                    return (<div key={`flight-arrival-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="account.flight.no"/>
                                    </label>
                                    <div>{flightInfo.flightNo}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        {`${intl.formatMessage({ id: 'account.date.of.arrival' })} (${intl.formatMessage({ id: 'common.activity.date' })}) `}
                                    </label>
                                    <div className="visa-date-of-arrival-picker">
                                        <div>{flightInfo.dateOfArrival}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.flightArrivalTime"/>
                                    </label>
                                    <div>{flightInfo.flightArrivalTime}</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(ConfirmationFlightArrivalExtraInfo);
