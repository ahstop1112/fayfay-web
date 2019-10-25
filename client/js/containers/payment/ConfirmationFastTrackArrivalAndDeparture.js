import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class ConfirmationFastTrackArrivalAndDeparture extends Component {
    static propTypes = {
        extraInfos: PropTypes.array.isRequired,
        intl: PropTypes.object.isRequired
    };

    render() {
        const { extraInfos, intl } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((item, index) => {
                    return (<React.Fragment key={`arrival-and-departure-${index}`}>
                        <div className="visa-applicants">
                            <div className="row">
                                <div className="col-md-12">
                                    <h6><i className="icon user"/> <FormattedMessage
                                        id="payment.traveler"/>{` ${index + 1}`}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.passportFullName"/>
                                        </label>
                                        <div>{item.fullName}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.arrivalAirport"/>
                                        </label>
                                        <div><FormattedMessage id={item.arrivalAirport}/></div>
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
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            {`${intl.formatMessage({ id: 'account.date.of.arrival' })} (${intl.formatMessage({ id: 'common.activity.date' })}) `}
                                        </label>
                                        <div className="visa-date-of-arrival-picker">
                                            <div>{item.dateOfArrival}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.transportFlightArrivalTime"/>
                                        </label>
                                        <div>{item.flightArrivalTime}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="visa-applicants">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.departureAirport"/>
                                        </label>
                                        <div><FormattedMessage id={item.departureAirport}/></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.flight.no"/>
                                        </label>
                                        <div>{item.flightNoDeparture}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            {`${intl.formatMessage({ id: 'payment.dateOfDeparture' })} (${intl.formatMessage({ id: 'common.activity.date' })}) `}
                                        </label>
                                        <div className="visa-date-of-arrival-picker">
                                            <div>{item.dateOfDeparture}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.flightDepartureTime"/>
                                        </label>
                                        <div>{item.departureTime}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(ConfirmationFastTrackArrivalAndDeparture);
