import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class ConfirmationPassengerExtraInfo extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        extraInfos: PropTypes.array.isRequired
    };

    render() {
        const { extraInfos, intl } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((itemInfo, index) => {
                    return (<div key={`applicant-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-md-12">
                                <h6><i className="icon user"></i> <FormattedMessage
                                    id="passenger.title"/>{` ${index + 1}`}</h6>
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
                                        <FormattedMessage id="passport.expiredDate"/>
                                    </label>
                                    <div><FormattedMessage id={itemInfo.expiredDate}/></div>
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
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="passenger.bagWeight"/>
                                    </label>
                                    <div className="visa-date-of-arrival-picker">
                                        <div>{itemInfo.bagWeight}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="passenger.weight"/>
                                    </label>
                                    <div className="visa-date-of-arrival-picker">
                                        <div>{itemInfo.passengerWeight}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="passenger.emergencyContact"/>
                                    </label>
                                    <div className="visa-date-of-arrival-picker">
                                        <div>{itemInfo.emergencyContact}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>);
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(ConfirmationPassengerExtraInfo);
