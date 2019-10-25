import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { required, minLenChk } from "../../utils/validators";
import InputField from "../../components/inputs/InputField";
import { Field } from 'redux-form';
import AdvancedDropDown from "../../components/inputs/AdvancedDropDown";
import CheckBoxField from '../../components/inputs/CheckboxInputField';

class TransportExtraInfo extends Component {
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
        const list = [];
        const hours = [];
        const minutes = [];
        for (let i = 0; i <= 30; i++) {
            list.push(i);
        }
        for (let i = 0; i < 24; i++) {
            hours.push(('0' + i).slice(-2));
        }
        for (let i = 0; i < 60; i++) {
            minutes.push(('0' + i).slice(-2));
        }

        this.state = {
            listOfCabinNo: list,
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
                    const transportInfo = fields.get(index);
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
                                    <div className="row">
                                        <label className="col-md-12">
                                            <FormattedMessage id="payment.transportFlightArrivalTime"/> <span
                                            className="required">*</span>
                                        </label>
                                        <div className="col-md-6">
                                            <Field name={`${field}.arrivalHour`}
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
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="account.flight.no"/>
                                    </label>
                                    <Field
                                        name={`${field}.flightNo`}
                                        type="text"
                                        component={InputField}
                                        validate={[this.minLength]}
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
                                            placeholder={intl.formatMessage({ id: 'payment.itineraryNoteExample' })}
                                            disabled={disabled}
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
                                           component={CheckBoxField} validate={transportInfo.note ? [] : required}
                                           label={<FormattedMessage id="payment.transportRemark"/>}/>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(TransportExtraInfo);
