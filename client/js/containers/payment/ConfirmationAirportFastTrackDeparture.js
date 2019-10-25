import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class ConfirmationAirportFastTrackDeparture extends Component {
    static propTypes = {
        extraInfos: PropTypes.array.isRequired,
        intl: PropTypes.object.isRequired
    };

    render() {
        const { extraInfos, intl } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((item, index) => {
                    return (<div key={`pickup-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-md-12">
                                <h6><i className="icon user"></i> <FormattedMessage
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
                                    <div>{item.flightNo}</div>
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
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(ConfirmationAirportFastTrackDeparture);
