import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import InputField from "./inputs/InputField";
import { emailChk, requiredChk } from '../utils/validators';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import Button from '../components/inputs/Button';
import Recaptcha from 'react-grecaptcha';
import { RESET_CAPTCHA } from "../redux/reducers/registerReducer";

export class ForgotPasswordForm extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        forgotPassword: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        error: PropTypes.object,
        handleSubmit: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
        resetCaptcha: PropTypes.bool.isRequired
    };

    state = {
        showRequiredCaptcha: false,
        captchaResponse: ''
    };

    constructor(props) {
        super(props);
    }

    verifyCallback = (response) => {
        this.setState({
            showRequiredCaptcha: false,
            captchaResponse: response
        })
    };

    expiredCallback = () => {
        this.setState({
            captchaResponse: ''
        })
    };

    submitEmailHandler = (values) => {
        if (!this.state.captchaResponse) {
            this.setState({
                showRequiredCaptcha: true
            });

            return;
        }

        const bodyData = {
            email: values.userEmail,
            captchaResponse: this.state.captchaResponse
        };

        this.props.forgotPassword(bodyData);
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
        const {
            handleSubmit,
            ajaxStatus,
            intl,
            data
        } = this.props;

        let message;

        if (ajaxStatus.isServerError) {
            message = intl.formatMessage({ id: ajaxStatus.serverMessage });
        }

        return (
            <div className="greyborderbox">
                <h4><FormattedMessage id="login.forgot.password"/></h4>
                {ajaxStatus.isSubmitSuccess == '' ? (
                    <div className="row">
                        <div className="col-md-12">
                            <p><FormattedMessage id="forgot.password.header.message"/></p>
                            <form className="forgotPasswordForm" onSubmit={handleSubmit(this.submitEmailHandler)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field validate={[requiredChk, emailChk]} name="userEmail"
                                                   placeholder={intl.formatMessage({ id: 'common.email' })} type="text"
                                                   component={InputField}
                                                   maxLength={60}
                                                   label={intl.formatMessage({ id: 'common.email' })}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Recaptcha
                                                sitekey={data.reCaptcha.siteKey}
                                                callback={this.verifyCallback}
                                                expiredCallback={this.expiredCallback}
                                                locale={intl.locale}
                                            />
                                            {this.state.showRequiredCaptcha &&
                                            <div className="error"><FormattedMessage
                                                id="forgot.password.captcha.required"/></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Button type="submit" className="btn btn-lg" submitting={ajaxStatus.isSubmitting}><FormattedMessage
                                            id="login.reset.password"/></Button>
                                        {ajaxStatus.isServerError && <div className="error"> {message}</div>}
                                        <p className="desc"><FormattedHTMLMessage
                                            id="forgot.password.if.you.still.have.problems"/></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                ) : (
                    <div className="row">
                        <div className="col-md-12">
                            <FormattedHTMLMessage id="forgot.password.you.can.keep.this.page.open"/>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

export default injectIntl(reduxForm({
    form: 'ForgotPasswordForm'
})(ForgotPasswordForm));
