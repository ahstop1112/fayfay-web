import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import InputField from "./inputs/InputField";
import { passwordChk, passwordsMatch, requiredChk } from '../utils/validators';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import Button from '../components/inputs/Button';

export class ResetPasswordForm extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        resetPassword: PropTypes.func.isRequired,
        error: PropTypes.object,
        handleSubmit: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired,
        verificationCode: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    submitResetHandler = (values) => {

        const resetInfo = {
            verificationCode: this.props.verificationCode,
            email: this.props.email,
            password: values.password
        };

        this.props.resetPassword(resetInfo);
    };

    render() {

        const {
            handleSubmit,
            ajaxStatus,
            intl
        } = this.props;

        let message;

        if (ajaxStatus.isServerError) {
            message = intl.formatMessage({ id: 'login.error.invalid.password' });
        }

        return (
            <div className="greyborderbox">
                <h4><FormattedMessage id="login.reset.password"/></h4>

                {ajaxStatus.isSubmitSuccess == '' ? (
                    <div className="row">
                        <div className="col-md-12">
                            <p><FormattedMessage
                                id="forgot.password.you.have.requested.to.reset.password"/><b>{this.props.email}</b></p>
                            <form className="resetPasswordForm" onSubmit={handleSubmit(this.submitResetHandler)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field validate={[requiredChk, passwordChk]} name="password"
                                                   placeholder={intl.formatMessage({ id: 'login.password' })}
                                                   type="password"
                                                   component={InputField}
                                                   label={intl.formatMessage({ id: 'login.password' })}/>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Button type="submit" className="btn btn-lg" submitting={ajaxStatus.isSubmitting}><FormattedMessage
                                            id="login.reset.password"/></Button>
                                        {ajaxStatus.isServerError && <div className="error"> {message}</div>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-12">
                            <p><FormattedMessage id="forgot.password.your.password.has.been.changed"/></p>
                            <p className="desc"><FormattedHTMLMessage
                                id="forgot.password.you.can.login.with.your.new.password"/></p>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

export default injectIntl(reduxForm({
    form: 'ResetPasswordForm'
})(ResetPasswordForm));
