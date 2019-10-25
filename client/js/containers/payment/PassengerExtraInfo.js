import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { minLenChk, required } from '../../utils/validators';
import InputField from '../../components/inputs/InputField';
import { Field } from 'redux-form';
import AdvancedDropDown from '../../components/inputs/AdvancedDropDown';
import CheckBoxField from '../../components/inputs/CheckboxInputField';
import moment from 'moment/moment';
import DateInputField from '../../components/inputs/DateInputField';

class PassengerExtraInfo extends Component {
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
        for (let i = 0; i < 24; i++) {
            hours.push(('0' + i).slice(-2));
        }
        for (let i = 0; i < 60; i++) {
            minutes.push(('0' + i).slice(-2));
        }

        this.state = {
            hours,
            minutes
        };
    }

    minLength = minLenChk(2);

    render() {
        const { fields, intl, nationalities, disabled } = this.props;

        return (
            <React.Fragment>
                {fields.map((field, index) => {
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
                                           disabled={disabled}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="account.passport.no"/> <span className="required">*</span>
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
                                        <FormattedMessage id="passport.expiredDate"/> <span
                                        className="required">*</span>
                                    </label>
                                    <div className="visa-date-of-birth-picker">
                                        <Field name={`${field}.expiredDate`} component={DateInputField}
                                               validate={required}
                                               minDate={moment()}
                                               disabled={disabled}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="account.nationality"/> <span className="required">*</span>
                                    </label>
                                    <Field name={`${field}.nationality`}
                                           component={AdvancedDropDown}
                                           options={nationalities.map(name => {
                                               return { value: name, label: name };
                                           })}
                                           validate={required}
                                           disabled={disabled}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="passenger.bagWeight"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.bagWeight`}
                                        type="number"
                                        maxLength={5}
                                        component={InputField}
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="passenger.weight"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.passengerWeight`}
                                        type="number"
                                        maxLength={5}
                                        component={InputField}
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="passenger.emergencyContact"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.emergencyContact`}
                                        type="text"
                                        component={InputField}
                                        validate={[required, this.minLength]}
                                        placeholder={intl.formatMessage({ id: 'passenger.emergencyContact' })}
                                        maxLength={50}
                                    />
                                </div>
                            </div>
                        </div>
                        {!disabled && (
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Field className="radio-search-label" name={`${field}.check`}
                                               component={CheckBoxField} validate={required}
                                               label={<FormattedMessage id="passenger.remark"/>}/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>);
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(PassengerExtraInfo);
