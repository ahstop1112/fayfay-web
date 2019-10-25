import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import InputField from '../../components/inputs/InputField';
import { emailChk, passwordChk, passwordsMatch, requiredChk, trim } from '../../utils/validators';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';

import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login';
import Recaptcha from 'react-grecaptcha';
import Button from '../../components/inputs/Button';
import { RESET_CAPTCHA } from "../../redux/reducers/registerReducer";
import { getLangUrl } from "../../utils/helpers";

export class RegisterForm extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired,
        facebookId: PropTypes.string.isRequired,
        googleId: PropTypes.string.isRequired,
        reCaptcha: PropTypes.object.isRequired,
        resetCaptcha: PropTypes.bool.isRequired
    };

    state = {
        showRequiredCaptcha: false,
        captchaResponse: '',
        emailRequired: ''
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

    submitRegisterHandler = values => {
        if (!this.state.captchaResponse) {
            this.setState({
                showRequiredCaptcha: true
            });

            return;
        }

        const userInfo = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.userEmail,
            password: values.password,
            locale: this.props.intl.locale
        };

        this.props.register(userInfo, this.state.captchaResponse);
    };

    facebookLogin = response => {
        this.setState({
            emailRequired: ''
        });

        if (!response.email) {
            this.setState({
                emailRequired: 'facebook.email.required'
            });

            // Revoking Login
            FB.api('/me/permissions', 'delete');

            return;
        }

        const userInfo = {
            firstName: response.first_name,
            lastName: response.last_name,
            email: response.email,
            password: '',
            userSocialModel: {
                socialServiceName: 'facebook',
                socialServiceId: response.id,
                token: response.accessToken
            }
        };

        if (!userInfo.firstName
            || !userInfo.email
            || !userInfo.userSocialModel.socialServiceId) {
            return;
        }

        this.props.register(userInfo);
    };

    googleLogin = response => {
        const userInfo = {
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            password: '',
            userSocialModel: {
                socialServiceName: 'google',
                socialServiceId: response.profileObj.googleId,
                token: response.tokenId
            }
        };

        this.props.register(userInfo);
    };

    goLogin = () => {
        const langUrl = getLangUrl(this.props.intl.locale);

        window.location.assign(`${langUrl}/login`);
    };

    goRegister = () => {
        const langUrl = getLangUrl(this.props.intl.locale);

        window.location.assign(`${langUrl}/register`);
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
        const { handleSubmit, ajaxStatus, intl, facebookId, googleId, reCaptcha } = this.props;

        let message;

        if (ajaxStatus.isServerError) {
            let messageKey = ajaxStatus.serverMessage;
            switch (ajaxStatus.serverMessage) {
                case 'MSG_ERROR_USER_PASSWORD_FORMAT': {
                    messageKey = 'common.invalid.password';
                    break;
                }
                case 'MSG_ERROR_VALIDATION_FAILED': {
                    messageKey = 'register.error';
                    break;
                }
            }

            message = intl.formatMessage({ id: messageKey || 'register.error' });
        }

        return (
            <div className="greyborderbox">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-offset-3 col-xs-6">
                        <img src="/images/logo_2.png" alt="Fayfay"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <FacebookLogin
                                socialId={facebookId}
                                language="en_US"
                                scope="public_profile,email"
                                responseHandler={this.facebookLogin}
                                xfbml={true}
                                fields="id,email,first_name,last_name,picture"
                                version="v4.0"
                                className="btn btn-brand facebook"
                                buttonText={intl.formatMessage({ id: 'register.facebook' })}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <GoogleLogin
                            clientId={googleId}
                            buttonText={intl.formatMessage({ id: 'register.google' })}
                            onSuccess={this.googleLogin}
                            // onFailure={responseGoogle}
                            className="btn btn-brand google"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 txt-center">Or</div>
                </div>
                <form className="registerForm" onSubmit={handleSubmit(this.submitRegisterHandler)}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Field
                                    validate={[requiredChk]}
                                    name="firstName"
                                    placeholder={intl.formatMessage({ id: 'common.firstName' })}
                                    type="text"
                                    component={InputField}
                                    label={intl.formatMessage({ id: 'common.firstName' })}
                                    maxLength={100}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Field
                                    validate={[requiredChk]}
                                    name="lastName"
                                    placeholder={intl.formatMessage({ id: 'common.lastName' })}
                                    type="text"
                                    component={InputField}
                                    label={intl.formatMessage({ id: 'common.lastName' })}
                                    maxLength={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Field
                                    validate={[requiredChk, emailChk]}
                                    name="userEmail"
                                    placeholder={intl.formatMessage({ id: 'common.email' })}
                                    type="text"
                                    component={InputField}
                                    normalize={trim}
                                    label={intl.formatMessage({ id: 'common.email' })}
                                    maxLength={60}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Field
                                    validate={[requiredChk, passwordChk]}
                                    name="password"
                                    type="password"
                                    placeholder={intl.formatMessage({ id: 'login.password' })}
                                    component={InputField}
                                    label={intl.formatMessage({ id: 'login.password' })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Field
                                    validate={[requiredChk, passwordsMatch]}
                                    name="confirmPassword"
                                    type="password"
                                    placeholder={intl.formatMessage({ id: 'register.confirm.password' })}
                                    component={InputField}
                                    label={intl.formatMessage({ id: 'register.confirm.password' })}
                                />
                                <p className="desc"><FormattedMessage id="account.password.tip"/></p>
                                {ajaxStatus.isServerError && <div className="error">{message}</div>}
                                {this.state.emailRequired &&
                                <div className="error"><FormattedMessage id={this.state.emailRequired}/></div>}
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
                        <div className="col-md-12">
                            <Button type="submit" className="btn btn-lg" submitting={ajaxStatus.isSubmitting}>
                                <FormattedMessage id="register"/>
                            </Button>
                            <p className="desc">
                                <FormattedHTMLMessage id="register.terms"/>
                            </p>
                            <hr/>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-8">
                        <p className="desc marginTop-15px">
                            <FormattedMessage id="login.have.account"/>
                        </p>
                    </div>
                    <div className="col-md-4 txt-right">
                        <button className="btn btn-lg yellow" onClick={this.goLogin}>
                            <FormattedMessage id="login"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(
    reduxForm({
        form: 'RegisterForm'
    })(RegisterForm)
);
