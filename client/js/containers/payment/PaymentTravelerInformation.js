import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import InputField from '../../components/inputs/InputField';
import AdvancedDropDown from '../../components/inputs/AdvancedDropDown';
import { email, required } from '../../utils/validators';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

export class PaymentTravelerInformation extends Component {
    static propTypes = {
        countries: PropTypes.array.isRequired,
        titles: PropTypes.array.isRequired,
        instantMessengers: PropTypes.array.isRequired,
        intl: PropTypes.object.isRequired,
        userInfo: PropTypes.object.isRequired
    };

    render() {
        const { countries, intl, userInfo } = this.props;

        const countryList = countries.map(item => {
            return { value: item.id, label: `${item.name} (+${item.countryCode})`, id: item.id };
        });

        const titles = this.props.titles.map(item => {
            return { value: item, label: intl.formatMessage({ id: item }) };
        });

        const messengers = this.props.instantMessengers.map(item => {
            return { value: item, label: intl.formatMessage({ id: item }) };
        });

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="orange-header"><FormattedMessage id="payment.travelers.information"/></div>
                    <div className="greyborderbox">
                        <div className="activity">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="common.title"/> <span className="required">*</span>
                                        </label>
                                        <Field
                                            name="title"
                                            componentName="title"
                                            component={AdvancedDropDown}
                                            options={titles}
                                            validate={required}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.first.name"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field
                                            name="firstName"
                                            type="text"
                                            component={InputField}
                                            validate={required}
                                            placeholder={intl.formatMessage({ id: 'common.as.shown.on.passport' })}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="account.family.name"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field
                                            name="lastName"
                                            type="text"
                                            component={InputField}
                                            validate={required}
                                            placeholder={intl.formatMessage({ id: 'common.as.shown.on.passport' })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="common.country.code"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field name="countryId" type="text" componentName="countryId"
                                               component={AdvancedDropDown} options={countryList} validate={required}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="common.phone.number"/> <span
                                            className="required">*</span>
                                        </label>
                                        <Field
                                            name="phoneNumber"
                                            type="number"
                                            component={InputField}
                                            validate={required}
                                            placeholder={intl.formatMessage({ id: 'common.phone' })}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="form-group">
                                        <label>
                                            <FormattedHTMLMessage
                                                id="payment.email.address.voucher.will.be.sent.here"/>{' '}
                                            <span className="required">*</span>
                                        </label>
                                        <Field
                                            name="email"
                                            type="text"
                                            component={InputField}
                                            validate={[required, email]}
                                            placeholder={intl.formatMessage({ id: 'common.email' })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.instantMsg"/>{' '}
                                            <span className="required">*</span>
                                        </label>
                                        <Field
                                            name="instantMessenger"
                                            componentName="instantMessenger"
                                            component={AdvancedDropDown}
                                            validate={required}
                                            options={messengers}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.instantMsgCountryCode"/>{' '}
                                            <span className="required">*</span>
                                        </label>
                                        <Field name="whatsappCountryId" type="text" validate={required}
                                               component={AdvancedDropDown} options={countryList}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.instantMsgPhoneOrUsername"/>{' '}
                                            <span className="required">*</span>
                                        </label>
                                        <Field
                                            name="instantMessengerKey"
                                            type="text"
                                            isUsername={true}
                                            component={InputField}
                                            validate={required}
                                            maxLength={50}
                                            placeholder={intl.formatMessage({ id: 'payment.instantMsgPhoneOrUsername' })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(PaymentTravelerInformation);
