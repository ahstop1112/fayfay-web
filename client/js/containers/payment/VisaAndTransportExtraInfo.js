import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { minLenChk, required } from "../../utils/validators";
import InputField from "../../components/inputs/InputField";
import { Field } from 'redux-form';
import AdvancedDropDown from "../../components/inputs/AdvancedDropDown";
import CheckBoxField from '../../components/inputs/CheckboxInputField';
import moment from "moment/moment";
import DateInputField from '../../components/inputs/DateInputField';
import Constants from 'fayfayConstants'

class VisaAndTransportExtraInfo extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        fields: PropTypes.object.isRequired,
        nationalities: PropTypes.array.isRequired,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    constructor(props) {
        super(props);
        const hours = [];
        const minutes = [];
        const listOfCabinNo = [];
        for (let i = 0; i < 24; i++) {
            hours.push(('0' + i).slice(-2));
        }
        for (let i = 0; i < 60; i++) {
            minutes.push(('0' + i).slice(-2));
        }
        for (let i = 0; i <= 30; i++) {
            listOfCabinNo.push(i);
        }

        this.state = {
            hours,
            minutes,
            listOfCabinNo
        };
    }

    minLength = minLenChk(2);

    render() {
        const { fields, intl, nationalities, disabled } = this.props;

        return (
            <React.Fragment>
                {fields.map((field, index) => {
                    const visaInfo = fields.get(index);
                    return (<div key={`applicant-${index}`}>
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
                                            <FormattedMessage id="account.date.of.birth"/> <span
                                            className="required">*</span>
                                        </label>
                                        <div className="visa-date-of-birth-picker">
                                            <Field name={`${field}.dateOfBirth`} component={DateInputField}
                                                   validate={required}
                                                   maxDate={moment()}
                                                   disabled={disabled}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.gender"/> <span className="required">*</span>
                                        </label>
                                        <Field name={`${field}.gender`}
                                               component={AdvancedDropDown}
                                               options={[{
                                                   label: intl.formatMessage({ id: 'common.male' }),
                                                   value: 'GENDER_MALE'
                                               }, {
                                                   label: intl.formatMessage({ id: 'common.female' }),
                                                   value: 'GENDER_FEMALE'
                                               }]}
                                               validate={required}
                                               searchable={false}
                                               defaultValue={visaInfo ? visaInfo.gender : ''}
                                               disabled={disabled}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.passport.no"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field
                                            name={`${field}.passportNo`}
                                            type="text"
                                            component={InputField}
                                            validate={[required, this.minLength]}
                                            placeholder={intl.formatMessage({ id: 'account.passport.no' })}
                                            maxLength={100}
                                            disabled={disabled}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.nationality"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field name={`${field}.nationality`}
                                               component={AdvancedDropDown}
                                               options={nationalities.map(name => {
                                                   return { value: name, label: name }
                                               })}
                                               validate={required}
                                               disabled={disabled}
                                               defaultValue={visaInfo ? visaInfo.nationality : ''}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.arrivalAirport"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field name={`${field}.arrivalAirport`}
                                               component={AdvancedDropDown}
                                               options={[{
                                                   label: intl.formatMessage({ id: 'payment.tanSonNhatAirport' }),
                                                   value: 'payment.tanSonNhatAirport'
                                               }, {
                                                   label: intl.formatMessage({ id: 'payment.noiBaiAirport' }),
                                                   value: 'payment.noiBaiAirport'
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
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            {`${intl.formatMessage({ id: 'account.date.of.arrival' })} (${intl.formatMessage({ id: 'common.activity.date' })}) `}
                                            <span
                                                className="required">*</span>
                                        </label>
                                        <div className="visa-date-of-arrival-picker">
                                            <Field name={`${field}.dateOfArrival`} component={DateInputField} disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.flight.no"/> <span
                                            className="required">*</span>
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
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <div className="row">
                                            <label className="col-md-12">
                                                <FormattedMessage id="payment.flightArrivalTime"/> <span
                                                className="required">*</span>
                                            </label>
                                            <div className="col-md-6">
                                                <Field name={`${field}.arrivalHour`}
                                                       component={AdvancedDropDown}
                                                       options={this.state.hours.map(hour => {
                                                           return { value: hour, label: hour }
                                                       })}
                                                       validate={required}
                                                       placeholder={<FormattedMessage id="payment.hours"/>}
                                                       searchable={false}
                                                       disabled={disabled}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <Field name={`${field}.arrivalMinute`}
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
                            {!disabled && (
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Field className="radio-search-label" name={`${field}.checkVisa`}
                                                   component={CheckBoxField} validate={required}
                                                   label={<FormattedMessage id="payment.visaRemark"/>}/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {index === fields.length - 1 && <div className="visa-applicants">
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
                                            <FormattedMessage id="payment.pickUpAddress"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field
                                            name={`${field}.pickUpAddress`}
                                            type="text"
                                            component={InputField}
                                            validate={[required, this.minLength]}
                                            maxLength={200}
                                            placeholder={intl.formatMessage({ id: 'payment.hotelNameAndAddress' })}
                                            disabled={disabled}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.dropOffAddress"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field
                                            name={`${field}.dropOffAddress`}
                                            type="text"
                                            component={InputField}
                                            validate={[required, this.minLength]}
                                            placeholder={intl.formatMessage({ id: 'payment.hotelNameAndAddress' })}
                                            maxLength={200}
                                            disabled={disabled}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.noOfCabinLuggage"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field name={`${field}.noOfCabinLuggage`}
                                               component={AdvancedDropDown}
                                               options={this.state.listOfCabinNo.map(item => {
                                                   return { value: item, label: item }
                                               })}
                                               validate={required}
                                               placeholder={<FormattedMessage id="payment.noOfCabinLuggage"/>}
                                               searchable={false}
                                               disabled={disabled}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.noOfCheckinLuggage"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field name={`${field}.noOfCheckinLuggage`}
                                               component={AdvancedDropDown}
                                               options={this.state.listOfCabinNo.map(item => {
                                                   return { value: item, label: item }
                                               })}
                                               validate={required}
                                               placeholder={<FormattedMessage id="payment.noOfCheckinLuggage"/>}
                                               searchable={false}
                                               disabled={disabled}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.itineraryNote"/> <span
                                            className="required">*</span>
                                        </label>
                                        <div className="visa-date-of-arrival-picker">
                                            <Field
                                                name={`${field}.note`}
                                                type="textarea"
                                                row={3}
                                                component={InputField}
                                                maxLength={1500}
                                                autocomplete="new-password"
                                                disabled={disabled}
                                                placeholder={intl.formatMessage({ id: 'payment.itineraryNoteExample' })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!disabled && (
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Field className="radio-search-label" name={`${field}.check`}
                                                   component={CheckBoxField} validate={visaInfo.note ? [] : required}
                                                   label={<FormattedMessage id="payment.transportRemark"/>}/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>}
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(VisaAndTransportExtraInfo);
