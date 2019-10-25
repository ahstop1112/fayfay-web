import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../components/inputs/InputField';
import { reduxForm, Field } from 'redux-form';
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { required, email, minValueChk } from '../../utils/validators';
import AdvancedDropDown from '../../components/inputs/AdvancedDropDown';
import Recaptcha from "react-grecaptcha";
import config from "../../../../config";
import ModalDialog from 'react-bootstrap/lib/Modal';
import Button from "../../components/inputs/Button";
import CheckBoxField from "../../components/inputs/CheckboxInputField";

export class F1InquiryForm extends Component {
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
        countries: PropTypes.array.isRequired,
        instantMessengers: PropTypes.array.isRequired,
        postFormData: PropTypes.func.isRequired,
        submitFailed: PropTypes.bool.isRequired,
        form: PropTypes.string.isRequired,
        campaignClassName: PropTypes.string,
        interestedTicketTypes: PropTypes.array,
        interestedExperience: PropTypes.string,
        interestedPackage: PropTypes.string,
        langId: PropTypes.number.isRequired
    };

    static defaultProps = {
        show: false,
        campaignClassName: '',
        interestedTicketTypes: [],
        interestedExperience: '',
        interestedPackage: ''
    };

    minimumNumber = minValueChk(1);

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
            const { postFormData, form, langId, campaignClassName } = this.props;

            if (campaignClassName) {
                const submitData = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    instantMessenger: values.instantMessenger,
                    instantMessengerCountryCode: Number(values.instantMessengerCountryCode),
                    instantMessengerKey: values.instantMessengerKey,
                    interestedTicketType: values.interestedTicketType,
                    numOfTraveller: Number(values.numOfTraveller),
                    requestForGroup: values.requestForGroup,
                    specialRequest: values.specialRequest
                };

                this.setState({ resetCaptcha: true },
                    () => postFormData(`/public/campaign/email/inquiry/f1?langId=${langId}&g-recaptcha-response=${this.state.captchaResponse}`, submitData, form, 'post', true));
            }
            else {
                const submitData = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    instantMessenger: values.instantMessenger,
                    instantMessengerCountryCode: Number(values.instantMessengerCountryCode),
                    instantMessengerKey: values.instantMessengerKey,
                    interestedExperience: values.interestedExperience,
                    interestedPackage: values.interestedPackage,
                    numOfTraveller: Number(values.numOfTraveller),
                    requestForGroup: values.requestForGroup,
                    specialRequest: values.specialRequest
                };

                this.setState({ resetCaptcha: true },
                    () => postFormData(`/public/activity/email/inquiry/f1?langId=${langId}&g-recaptcha-response=${this.state.captchaResponse}`, submitData, form, 'post', true));
            }
        }
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

    componentDidUpdate() {
        const { ajaxStatus } = this.props;
        if ((ajaxStatus.isSubmitSuccess || ajaxStatus.isServerError) && this.state.resetCaptcha && this.state.captchaResponse) {
            window.grecaptcha.reset();
            this.expiredCallback();
            this.setState({ resetCaptcha: false })
        }
    }

    componentDidMount() {
        const { campaignClassName, initialize, interestedExperience, interestedPackage } = this.props;
        if (!campaignClassName) {
            initialize({
                interestedExperience,
                interestedPackage
            });
        }
    }

    render() {
        const { show, handleSubmit, ajaxStatus, countries, interestedTicketTypes, campaignClassName, instantMessengers, intl, form, pristine, onClose } = this.props;

        const countryList = countries.map(item => {
            return { value: item.countryCode, label: `${item.name} (+${item.countryCode})`, id: item.id };
        });

        const messengers = instantMessengers.map(item => {
            return { value: item, label: intl.formatMessage({ id: item }) };
        });

        return (
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <ModalDialog.Header closeButton>
                        {campaignClassName && (
                            <React.Fragment>
                                <h2 className="title"><FormattedMessage id="inquiry.title"/></h2>
                                <div className="title-deco"/>
                            </React.Fragment>
                        )}
                        {!campaignClassName && (
                            <ModalDialog.Title>
                                <FormattedMessage id="inquiry.title"/>
                            </ModalDialog.Title>
                        )}
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

                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="payment.instantMsgCountryCode"/>{' '}
                                            <span className="required">*</span>
                                        </label>
                                        <Field name="instantMessengerCountryCode" validate={required}
                                               component={AdvancedDropDown} options={countryList}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
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
                                            maxLength={20}
                                        />
                                    </div>
                                </div>
                            </div>
                            {campaignClassName && (
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>
                                                <FormattedMessage id="inquiry.interestedTicketType"/>{' '}
                                                <span className="required">*</span>
                                            </label>
                                            <Field
                                                name="interestedTicketType"
                                                componentName="interestedTicketType"
                                                component={AdvancedDropDown}
                                                validate={required}
                                                options={interestedTicketTypes}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field className="radio-search-label" name={`requestForGroup`}
                                                   component={CheckBoxField}
                                                   label={<FormattedMessage id="inquiry.requestForGroup"/>}/>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {!campaignClassName && (
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>
                                                <FormattedMessage id="inquiry.interestedExperience"/>{' '}
                                                <span className="required">*</span>
                                            </label>
                                            <Field
                                                name="interestedExperience"
                                                type="text"
                                                component={InputField}
                                                validate={required}
                                                maxLength={500}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>
                                                <FormattedMessage id="inquiry.interestedPackage"/>{' '}
                                                <span className="required">*</span>
                                            </label>
                                            <Field
                                                name="interestedPackage"
                                                type="text"
                                                component={InputField}
                                                validate={required}
                                                maxLength={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>
                                            <FormattedMessage id="inquiry.numberOfTravelers"/>{' '}
                                            <span className="required">*</span>
                                        </label>
                                        <Field
                                            name="numOfTraveller"
                                            type="number"
                                            maxLength={2}
                                            component={InputField}
                                            validate={[required, this.minimumNumber]}
                                        />
                                    </div>
                                </div>
                                {!campaignClassName && (
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <Field className="radio-search-label" name={`requestForGroup`}
                                               component={CheckBoxField}
                                               label={<FormattedMessage id="inquiry.requestForGroup"/>}/>
                                    </div>
                                </div>)}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <Field name="specialRequest" type="textarea"
                                               label={intl.formatMessage({ id: 'travel.planning.message' })}
                                               component={InputField} row={10} className={"resize-none"}
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
                                className="btn btn-s submit"
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
    form: 'formulaOneForm', // a unique identifier for this form,
    onSubmitFail: (errors) => {
        const keys = Object.keys(errors);
        const match = document.querySelectorAll(`div [name="${keys[0]}"]`);
        if (match.length) {
            match[0].scrollIntoView({ block: 'center', behaviour: 'smooth' });
        }
    }

})(injectIntl(F1InquiryForm));

