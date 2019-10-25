import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import InputField from '../../components/inputs/InputField';
import CheckField from '../../components/inputs/CheckField';
import { emailChk, requiredChk, trim } from '../../utils/validators';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login';
import { getLangUrl } from "../../utils/helpers";
import Button from '../../components/inputs/Button';

export class LoginForm extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        error: PropTypes.object,
        handleSubmit: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired,
        facebookId: PropTypes.string.isRequired,
        googleId: PropTypes.string.isRequired
    };

    state = {
        emailRequired: ''
    };

    constructor(props) {
        super(props);
    }

    submitLoginHandler = values => {
        const userInfo = {
            username: values.userEmail,
            password: values.password,
            rememberMe: values.rememberMe
        };
        this.props.login(userInfo);
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

    goRegister = () => {
        const langUrl = getLangUrl(this.props.intl.locale);

        window.location.assign(`${langUrl}/register`);
    };

    render() {
        const { handleSubmit, ajaxStatus, intl, facebookId, googleId } = this.props;

        const langUrl = getLangUrl(intl.locale);

        let message;

        if (ajaxStatus.isServerError) {
            message = intl.formatMessage({ id: 'login.error.invalid.username.password' });
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
                                buttonText={intl.formatMessage({ id: 'login.facebook' })}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <GoogleLogin
                            clientId={googleId}
                            buttonText={intl.formatMessage({ id: 'login.google' })}
                            onSuccess={this.googleLogin}
                            className="btn btn-brand google"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 txt-center paddingBottom-10px">
                        <FormattedMessage id="common.or"/>
                    </div>
                </div>

                <form className="loginForm" onSubmit={handleSubmit(this.submitLoginHandler)}>
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
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <Field
                                    validate={[requiredChk]}
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
                        <div className="col-md-6 col-xs-6">
                            <div className="form-group">
                                <Field name="rememberMe" type="checkbox" component={CheckField} label=""/>
                                <span className="remember-me m-1-2">
                                    <FormattedMessage id="login.remember.me"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-6 txt-right">
                            <div className="form-group">
                                <a href={`${langUrl}/forgot-password`}>
                                    <FormattedMessage id="login.forgot.password"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Button type="submit" className="btn btn-lg" submitting={ajaxStatus.isSubmitting}>
                                <FormattedMessage id="login"/>
                            </Button>
                            {ajaxStatus.isServerError && <div className="error">{message}</div>}
                            {this.state.emailRequired &&
                            <div className="error"><FormattedMessage id={this.state.emailRequired}/></div>}
                            <hr/>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-8">
                        <p className="desc marginTop-15px">
                            <FormattedMessage id="login.no.account.yet"/>
                        </p>
                    </div>
                    <div className="col-md-4 txt-right">
                        <button className="btn btn-lg yellow" onClick={this.goRegister} >
                            <FormattedMessage id="register"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(
    reduxForm({
        form: 'LoginForm'
    })(LoginForm)
);
