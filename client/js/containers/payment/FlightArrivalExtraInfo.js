import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { required, minLenChk } from "../../utils/validators";
import InputField from "../../components/inputs/InputField";
import { Field } from 'redux-form';
import AdvancedDropDown from "../../components/inputs/AdvancedDropDown";
import DateInputField from "../../components/inputs/DateInputField";

class FlightArrivalExtraInfo extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        fields: PropTypes.object.isRequired
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
        const { fields, intl } = this.props;

        return (
            <React.Fragment>
                {fields.map((field, index) => {
                    return (index === 0 && <div key={`flight-arrival-${index}`} className="visa-applicants">
                        <div className="row">
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
                                        maxLength={50}
                                    />
                                </div>
                            </div>
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
                                    <div className="row">
                                        <label className="col-md-12">
                                            <FormattedMessage id="payment.flightArrivalTime"/> <span
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

export default injectIntl(FlightArrivalExtraInfo);
