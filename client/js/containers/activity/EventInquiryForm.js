import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../components/inputs/InputField';
import { Field, reduxForm } from 'redux-form';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import { email, required, requiredChk } from '../../utils/validators';
import Recaptcha from 'react-grecaptcha';
import config from '../../../../config';
import ModalDialog from 'react-bootstrap/lib/Modal';
import Button from '../../components/inputs/Button';

export class EventInquiryForm extends Component {
    static propTypes = {
        show: PropTypes.oneOfType([
            PropTypes.string, // string value
            PropTypes.bool // boolean value
        ]), // show if not false 0 "" null undefined NaN, else hide
        onClose: PropTypes.func.isRequired,
        initialize: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        pristine: PropTypes.bool.isRequired,
        intl: PropTypes.object.isRequired,
        postFormData: PropTypes.func.isRequired,
        submitFailed: PropTypes.bool.isRequired,
        form: PropTypes.string.isRequired,
        langId: PropTypes.number.isRequired
    };

    static defaultProps = {
        show: false
    };

    constructor(props) {
        super(props);
        this.state = {
            showRequiredCaptcha: false,
            captchaResponse: '',
            resetCaptcha: false
        };
    }

    submitHandler = values => {
        if (!this.state.captchaResponse) {
            this.setState({
                showRequiredCaptcha: true
            });
        } else {
            const { postFormData, form, langId } = this.props;

            const submitData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                specialRequest: values.specialRequest
            };

            this.setState(
                { resetCaptcha: true },
                () => postFormData(`/public/activity/email/inquiry/event?langId=${langId}&g-recaptcha-response=${this.state.captchaResponse}`, submitData, form, 'post', true));
        }
    };

    verifyCallback = (response) => {
        this.setState({
            captchaResponse: response,
            showRequiredCaptcha: false
        });
    };

    expiredCallback = () => {
        this.setState({
            captchaResponse: ''
        });
    };

    componentDidUpdate() {
        const { ajaxStatus } = this.props;
        if ((ajaxStatus.isSubmitSuccess || ajaxStatus.isServerError) && this.state.resetCaptcha && this.state.captchaResponse) {
            window.grecaptcha.reset();
            this.expiredCallback();
            this.setState({ resetCaptcha: false });
        }
    }

    componentDidMount() {
        this.props.initialize({
            interestedExperience: this.props.interestedExperience
        });
    }

    render() {
        const { handleSubmit, ajaxStatus, intl, form, pristine, onClose } = this.props;

        return (
            <form onSubmit={handleSubmit(this.submitHandler)}>
                <ModalDialog.Header closeButton>
                    <ModalDialog.Title><FormattedMessage id="inquiry.title"/></ModalDialog.Title>
                </ModalDialog.Header>
                <ModalDialog.Body>
                    <div className="greybox activity">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.firstName"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name="firstName"
                                        type="text"
                                        component={InputField}
                                        validate={required}
                                        maxLength={100}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.lastName"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name="lastName"
                                        type="text"
                                        component={InputField}
                                        validate={required}
                                        maxLength={100}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedHTMLMessage
                                            id="common.email.address"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field
                                        name="email"
                                        type="text"
                                        component={InputField}
                                        validate={[required, email]}
                                        maxLength={60}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Field name="phoneNumber"
                                           type="text"
                                           label={intl.formatMessage({ id: 'travel.planning.phoneNumber' })}
                                           component={InputField}
                                           maxLength={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <Field name="specialRequest" type="textarea"
                                           label={intl.formatMessage({ id: 'travel.planning.message' })}
                                           component={InputField} row={10} className={'resize-none'}
                                           placeholder={intl.formatMessage({ id: 'travel.planning.message.desc' })}
                                           maxLength={2000}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Recaptcha
                                        sitekey={config.reCaptcha.siteKey}
                                        callback={this.verifyCallback}
                                        expiredCallback={this.expiredCallback}
                                        locale={intl.locale}
                                    />
                                    {this.state.showRequiredCaptcha &&
                                    <div className="error"><FormattedMessage id="common.captcha.required"/>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 ask-fayfay-msg">
                                {ajaxStatus.sendForm === form && ajaxStatus.isSubmitSuccess && (
                                    <FormattedMessage id="help.contact.received"/>)}
                                {ajaxStatus.isServerError &&
                                ajaxStatus.serverErrors &&
                                ajaxStatus.serverErrors.map(error => {
                                    return <div key={error}><FormattedMessage id={error}/></div>;
                                })}
                            </div>
                        </div>
                    </div>
                </ModalDialog.Body>
                <ModalDialog.Footer>
                    <React.Fragment>
                        <button type="button" className="btn btn-s grey" onClick={onClose}>
                            <FormattedMessage id="common.close"/>
                        </button>
                        <Button
                            type="submit"
                            className="btn btn-s"
                            disabled={pristine}
                            submitting={ajaxStatus.sendForm === form && ajaxStatus.isSubmitting}
                        >
                            <FormattedMessage id="common.submit"/>
                        </Button>
                    </React.Fragment>
                </ModalDialog.Footer>
            </form>
        );
    }
}

export default reduxForm({
    form: 'eventInquiryForm', // a unique identifier for this form,
    onSubmitFail: (errors) => {
        const keys = Object.keys(errors);
        const match = document.querySelectorAll(`div [name="${keys[0]}"]`);
        if (match.length) {
            match[0].scrollIntoView({ block: 'center', behaviour: 'smooth' });
        }
    }

})(injectIntl(EventInquiryForm));

