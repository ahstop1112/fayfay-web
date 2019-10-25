import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { required, minLenChk } from "../../utils/validators";
import InputField from "../../components/inputs/InputField";
import { Field } from 'redux-form';
import AdvancedDropDown from "../../components/inputs/AdvancedDropDown";

class FaySimPickup extends Component {
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
                    return (index === 0 && <div key={`sim-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-md-12">
                                            <FormattedMessage id="payment.pickupTime"/> <span
                                            className="required">*</span>
                                        </label>
                                        <div className="col-md-6">
                                            <Field name={`${field}.pickUpHour`}
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
                                            <Field name={`${field}.pickUpMinute`}
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
                                        <FormattedMessage id="account.flight.no"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.flightNo`}
                                        type="text"
                                        component={InputField}
                                        validate={[required, this.minLength]}
                                        maxLength={50}
                                        disabled={disabled}
                                    />
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
                                        <Field
                                            name={`${field}.note`}
                                            type="textarea"
                                            row={3}
                                            component={InputField}
                                            maxLength={1500}
                                            autocomplete="new-password"
                                            placeholder={intl.formatMessage({ id: 'payment.specialRequest' })}
                                            disabled={disabled}
                                        />
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

export default injectIntl(FaySimPickup);
