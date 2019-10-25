import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class ConfirmationTransportExtraInfo extends Component {
    static propTypes = {
        extraInfos: PropTypes.array.isRequired
    };

    render() {
        const { extraInfos } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((transportInfo, index) => {
                    return (<div key={`pickup-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-md-12">
                                <h6><i className="icon user"></i> <FormattedMessage
                                    id="payment.vehicle"/>{` ${index + 1}`}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.pickUpAddress"/>
                                    </label>
                                    <div>{transportInfo.pickUpAddress}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.transportFlightArrivalTime"/>
                                    </label>
                                    <div>{transportInfo.flightArrivalTime}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="account.flight.no"/>
                                    </label>
                                    <div>{transportInfo.flightNo}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.dropOffAddress"/>
                                    </label>
                                    <div>{transportInfo.dropOffAddress}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.noOfCabinLuggage"/>
                                    </label>
                                    <div>{transportInfo.noOfCabinLuggage}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.noOfCheckinLuggage"/>
                                    </label>
                                    <div>{transportInfo.noOfCheckinLuggage}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.itineraryNote"/>
                                    </label>
                                    <div className="visa-date-of-arrival-picker">
                                        <div>{transportInfo.note}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default ConfirmationTransportExtraInfo;
