import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { required, minLenChk } from "../../utils/validators";
import InputField from "../../components/inputs/InputField";
import { Field } from 'redux-form';
import AdvancedDropDown from "../../components/inputs/AdvancedDropDown";
import DateInputField from '../../components/inputs/DateInputField';

class AirportFastTrackDeparture extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        fields: PropTypes.object.isRequired,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    constructor(props) {
        super(props);
        const hours = [];
        const minutes = [];

        for (let i = 0; i < 24; i++) {
            hours.push(('0' + i).slice(-2));
        }
        for (let i = 0; i < 60; i++) {
            minutes.push(('0' + i).slice(-2));
        }

        this.state = {
            hours,
            minutes
        }
    }

    minLength = minLenChk(2);

    render() {
        const { fields, intl, disabled } = this.props;

        return (
            <React.Fragment>
                {fields.map((field, index) => {
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
                                        <FormattedMessage id="payment.passportFullName"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.fullName`}
                                        type="text"
                                        component={InputField}
                                        validate={[required, this.minLength]}
                                        placeholder={intl.formatMessage({ id: 'common.as.shown.on.passport' })}
                                        maxLength={200}
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.departureAirport"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field name={`${field}.departureAirport`}
                                           component={AdvancedDropDown}
                                           options={[{
                                               label: intl.formatMessage({ id: 'payment.tanSonNhatAirport' }),
                                               value: 'payment.tanSonNhatAirport'
                                           }, {
                                               label: intl.formatMessage({ id: 'payment.daNangAirport' }),
                                               value: 'payment.daNangAirport'
                                           }, {
                                               label: intl.formatMessage({ id: 'payment.camRanhAirport' }),
                                               value: 'payment.camRanhAirport'
                                           }]}
                                           validate={required}
                                           searchable={false}
                                           disabled={disabled}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="account.flight.no"/> <span className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.flightNo`}
                                        type="text"
                                        component={InputField}
                                        validate={[required, this.minLength]}
                                        placeholder={intl.formatMessage({ id: 'account.flight.no' })}
                                        maxLength={50}
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        {`${intl.formatMessage({ id: 'payment.dateOfDeparture' })} (${intl.formatMessage({ id: 'common.activity.date' })}) `}
                                        <span className="required">*</span>
                                    </label>
                                    <div className="visa-date-of-arrival-picker">
                                        <Field name={`${field}.dateOfDeparture`} component={DateInputField} disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-md-12">
                                            <FormattedMessage id="payment.flightDepartureTime"/> <span
                                            className="required">*</span>
                                        </label>
                                        <div className="col-md-6">
                                            <Field name={`${field}.departureHour`}
                                                   component={AdvancedDropDown} options={this.state.hours.map(hour => {
                                                return { value: hour, label: hour }
                                            })}
                                                   validate={required}
                                                   placeholder={<FormattedMessage id="payment.hours"/>}
                                                   searchable={false}
                                                   disabled={disabled}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <Field name={`${field}.departureMinute`}
                                                   component={AdvancedDropDown}
                                                   options={this.state.minutes.map(item => {
                                                       return { value: item, label: item }
                                                   })}
                                                   validate={required}
                                                   placeholder={<FormattedMessage id="payment.minutes"/>}
                                                   searchable={false}
                                                   disabled={disabled}
                                            />
                                        </div>
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

export default injectIntl(AirportFastTrackDeparture);
