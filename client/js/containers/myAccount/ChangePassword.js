import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {injectIntl, FormattedMessage} from 'react-intl';
import InputField from '../../components/inputs/InputField';
import {requiredChk, passwordChk, passwordsMatch, maxLenChk, minLenChk } from "../../utils/validators";
import Button from "../../components/inputs/Button";

class ChangePassword extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        details: PropTypes.object.isRequired,
        postFormData: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        form: PropTypes.string.isRequired,
        intl: PropTypes.object.isRequired
    };

    minLenChk8 = minLenChk(8);

    maxLenChk20 = maxLenChk(20);

    submitHandlerPwd = (values) => {
        const uid = this.props.details.id;
        this.props.postFormData(`/api/users/${uid}`, {currentPassword: values.currentPassword, password: values.password}, this.props.form, 'patch');
    };

    render() {
        const {handleSubmit, intl, ajaxStatus, form} = this.props;

        return (
            <form onSubmit={handleSubmit(this.submitHandlerPwd)} noValidate>
                <h4><FormattedMessage id="common.settings"/></h4>
                <div className="row">
                    <div className="col-lg-6">
                        {ajaxStatus.sendForm === form && ajaxStatus.isSubmitSuccess &&
                        <div className="alert alert-success"><FormattedMessage id="account.passwordUpdateSuccess"/>
                        </div>}
                        <div className="form-group">
                            <Field validate={[requiredChk, passwordChk, this.minLenChk8, this.maxLenChk20]} name="currentPassword"
                                   placeholder={intl.formatMessage({id: 'account.enter.current.password'})}
                                   type="password" component={InputField}
                                   maxLength={20}
                                   label={intl.formatMessage({id: 'account.current.password'})}/>
                            {ajaxStatus.serverMessage && <p className="error">{intl.formatMessage({id:ajaxStatus.serverMessage})}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <Field validate={[requiredChk, passwordChk, this.minLenChk8, this.maxLenChk20]} name="password"
                                   placeholder={intl.formatMessage({id: 'account.enter.new.password'})}
                                   type="password" component={InputField}
                                   maxLength={20}
                                   label={intl.formatMessage({id: 'account.new.password'})}/>

                            <p className="desc"><FormattedMessage id="account.password.tip"/></p>

                            <Field validate={[requiredChk, passwordChk, passwordsMatch, this.minLenChk8, this.maxLenChk20]} name="passwordcc"
                                   placeholder={intl.formatMessage({id: 'account.confirm.password'})}
                                   type="password" component={InputField}
                                   maxLength={20}
                                   label={''}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-4 txt-right">
                        <Button
                            type="submit"
                            data-name="pwd"
                            className="btn btn-lg"
                            submitting={ajaxStatus.sendForm === form && ajaxStatus.isSubmitting}
                        >
                            <FormattedMessage id="common.save" />
                        </Button>
                    </div>
                </div>
            </form>
        )
    }
}

export default injectIntl(reduxForm({
    form: 'ChangePasswordForm',
})(ChangePassword));
