import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import InputField from "../../components/inputs/InputField";
import Button from "../../components/inputs/Button";
import { requiredChk, emailChk } from '../../utils/validators';
import { FormattedMessage, injectIntl } from 'react-intl';
import AdvancedDropDown from "../../components/inputs/AdvancedDropDown";
import Recaptcha from 'react-grecaptcha';
import { RESET_CAPTCHA } from "../../redux/reducers/registerReducer";

export class AskFayFayForm extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        postFormData: PropTypes.func.isRequired,
        form: PropTypes.string.isRequired,
        instantMessengers: PropTypes.array.isRequired,
        countries: PropTypes.array.isRequired,
        reCaptcha: PropTypes.object.isRequired,
        resetCaptcha: PropTypes.bool.isRequired
    };

    state = {
        showRequiredCaptcha: false,
        captchaResponse: ''
    };

    verifyCallback = (response) => {
        this.setState({
            captchaResponse: response,
            showRequiredCaptcha: false
        })
    };

    expiredCallback = () => {
        this.setState({
            captchaResponse: ''
        })
    };

    submitHandler = (values) => {
        if (!this.state.captchaResponse) {
            this.setState({
                showRequiredCaptcha: true
            });

            return;
        }
        const { postFormData, form } = this.props;
        postFormData(`/public-email?g-recaptcha-response=${this.state.captchaResponse}`, values, form, 'post', true);
    };

    componentDidUpdate() {
        const { dispatch, resetCaptcha } = this.props;
        if (resetCaptcha) {
            window.grecaptcha.reset();
            this.expiredCallback();
            dispatch({
                type: RESET_CAPTCHA,
                resetCaptcha: false
            });
        }
    }

    render() {
        const { handleSubmit, ajaxStatus, intl, form, reCaptcha } = this.props;

        const countryList = this.props.countries.map(item => {
            return { value: item.countryCode, label: `${item.name} (+${item.countryCode})`, id: item.id };
        });

        const messengers = this.props.instantMessengers.map(item => {
            return { value: item, label: intl.formatMessage({ id: item }) };
        });

        return (
            <div id="enquiry-form">
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <Field name="email" type="text"
                                       label={intl.formatMessage({ id: "common.email.address" })} required={true}
                                       validate={[requiredChk, emailChk]}
                                       component={InputField}
                                       placeholder={intl.formatMessage({ id: "common.email.address" })}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <Field name="firstName" type="text"
                                       label={intl.formatMessage({ id: "common.firstName" })} required={true}
                                       validate={[requiredChk]}
                                       component={InputField}
                                       placeholder={intl.formatMessage({ id: "common.firstName" })}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <Field name="lastName" type="text" label={intl.formatMessage({ id: "common.lastName" })}
                                       required={true} validate={[requiredChk]}
                                       component={InputField}
                                       placeholder={intl.formatMessage({ id: "common.lastName" })}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>
                                    <FormattedMessage id="payment.instantMsg"/>
                                </label>
                                <Field
                                    name="instantMessenger"
                                    componentName="instantMessenger"
                                    component={AdvancedDropDown}
                                    options={messengers}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>
                                    <FormattedMessage id="payment.instantMsgCountryCode"/>
                                </label>
                                <Field name="instantMessengerCountryCode" type="text"
                                       component={AdvancedDropDown} options={countryList}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>
                                <FormattedMessage id="payment.instantMsgPhoneOrUsername"/>
                            </label>
                            <Field
                                name="instantMessengerKey"
                                type="text"
                                isUsername={true}
                                component={InputField}
                                maxLength={50}
                                placeholder={intl.formatMessage({ id: 'payment.instantMsgPhoneOrUsername' })}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Field name="message" type="textarea"
                                       label={intl.formatMessage({ id: 'help.user.question' })} required={true}
                                       validate={[requiredChk]}
                                       component={InputField} row={10} className={"resize-none"}
                                       placeholder={intl.formatMessage({ id: 'help.user.question.enter' })}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Recaptcha
                                    sitekey={reCaptcha.siteKey}
                                    callback={this.verifyCallback}
                                    expiredCallback={this.expiredCallback}
                                    locale={intl.locale}
                                />
                                {this.state.showRequiredCaptcha &&
                                <div className="error"><FormattedMessage id="forgot.password.captcha.required"/></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-4 col-xs-4">
                            <Button
                                type="submit"
                                className="btn btn-s "
                                submitting={ajaxStatus.sendForm === form && ajaxStatus.isSubmitting}
                            >
                                <FormattedMessage id="common.submit"/>
                            </Button>

                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 ask-fayfay-msg">
                            {
                                ajaxStatus.sendForm === form && ajaxStatus.isSubmitSuccess && (
                                    <FormattedMessage id="help.contact.received"/>)
                            }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'askFayFayForm', // a unique identifier for this form
    initialValues: {}
})(injectIntl(AskFayFayForm));
