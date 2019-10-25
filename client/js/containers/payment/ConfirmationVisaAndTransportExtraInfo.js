import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class ConfirmationVisaAndTransportExtraInfo extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        extraInfos: PropTypes.array.isRequired
    };

    render() {
        const { extraInfos, intl } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((itemInfo, index) => {
                    return (<React.Fragment key={`applicant-${index}`}>
                        <div className="visa-applicants">
                            <div className="row">
                                <div className="col-md-12">
                                    <h6><i className="icon user"></i> <FormattedMessage
                                        id="account.applicant"/>{` ${index + 1}`}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.passportFullName"/>
                                        </label>
                                        <div>{itemInfo.fullName}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.date.of.birth"/>
                                        </label>
                                        <div className="visa-date-of-birth-picker">
                                            <div>{itemInfo.dateOfBirth}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.gender"/>
                                        </label>
                                        <div>{itemInfo.gender === 'GENDER_MALE' ? intl.formatMessage({ id: 'common.male' }) : intl.formatMessage({ id: 'common.female' })}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.passport.no"/>
                                        </label>
                                        <div>{itemInfo.passportNo}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.nationality"/>
                                        </label>
                                        <div>{itemInfo.nationality}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.arrivalAirport"/>
                                        </label>
                                        <div><FormattedMessage id={itemInfo.arrivalAirport}/></div>
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
                                            <div>{itemInfo.dateOfArrival}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.flight.no"/>
                                        </label>
                                        <div>{itemInfo.flightNo}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.flightArrivalTime"/>
                                        </label>
                                        <div>{itemInfo.flightArrivalTime}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {index == extraInfos.length - 1 && <div className="visa-applicants">
                            <div className="row">
                                <div className="col-md-12">
                                    <h6><i className="icon user"></i> <FormattedMessage
                                        id="payment.vehicle"/></h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.pickUpAddress"/>
                                        </label>
                                        <div>{itemInfo.pickUpAddress}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.dropOffAddress"/>
                                        </label>
                                        <div>{itemInfo.dropOffAddress}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.noOfCabinLuggage"/>
                                        </label>
                                        <div>{itemInfo.noOfCabinLuggage}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.noOfCheckinLuggage"/>
                                        </label>
                                        <div>{itemInfo.noOfCheckinLuggage}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.note"/>
                                        </label>
                                        <div className="visa-date-of-arrival-picker">
                                            <div>{itemInfo.note}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </React.Fragment>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(ConfirmationVisaAndTransportExtraInfo);
