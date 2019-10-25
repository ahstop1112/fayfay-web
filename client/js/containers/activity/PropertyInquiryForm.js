import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../components/inputs/InputField';
import { reduxForm, Field } from 'redux-form';
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { required, email, minValueChk } from '../../utils/validators';
import AdvancedDropDown from '../../components/inputs/AdvancedDropDown';
import DateInputField from "../../components/inputs/DateInputField";
import Recaptcha from "react-grecaptcha";
import config from "../../../../config";
import ModalDialog from 'react-bootstrap/lib/Modal';
import Button from "../../components/inputs/Button";
import moment from 'moment';

export class PropertyInquiryForm extends Component {
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
        interestedExperience: PropTypes.string.isRequired,
        langId: PropTypes.number.isRequired
    };

    static defaultProps = {
        show: false
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
            const { postFormData, form, langId } = this.props;

            const submitData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                instantMessenger: values.instantMessenger,
                instantMessengerCountryCode: Number(values.instantMessengerCountryCode),
                instantMessengerKey: values.instantMessengerKey,
                interestedExperience: values.interestedExperience,
                date: moment(values.date).format('YYYY-MM-DD'),
                numOfAdultOrChildren: Number(values.numOfAdultOrChildren),
                budget: values.budget,
                unitTypes: values.unitTypes,
                unitSize: values.unitSize,
                preferredPropertyDistrict: values.preferredPropertyDistrict,
                specialRequest: values.specialRequest
            };

            this.setState(
                { resetCaptcha: true },
                () => postFormData(`/public/activity/email/inquiry/property?langId=${langId}&g-recaptcha-response=${this.state.captchaResponse}`, submitData, form, 'post', true));
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
            this.setState({ resetCaptcha: false });
        }
    }

    componentDidMount() {
        this.props.initialize({
            interestedExperience: this.props.interestedExperience
        })
    }

    render() {
        const { handleSubmit, ajaxStatus, countries, instantMessengers, intl, form, pristine, onClose } = this.props;

        const countryList = countries.map(item => {
            return { value: item.countryCode, label: `${item.name} (+${item.countryCode})`, id: item.id };
        });

        const messengers = instantMessengers.map(item => {
            return { value: item, label: intl.formatMessage({ id: item }) };
        });

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
                                        <FormattedMessage id="common.select.date"/> <span
                                        className="required">*</span>
                                    </label>
                                    <div className="visa-date-of-arrival-picker">
                                        <Field name={`date`} component={DateInputField}
                                               minDate={moment()} validate={required}
                                               onChange={this.dateFromChange}
                                               placeHolder={intl.formatMessage({ id: 'common.select.date' })}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.numberOfAdultsOrChildren"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field
                                        name="numOfAdultOrChildren"
                                        type="number"
                                        maxLength={2}
                                        component={InputField}
                                        validate={[required, this.minimumNumber]}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.budget"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field name={`budget`}
                                           component={AdvancedDropDown}
                                           options={[{
                                               label: intl.formatMessage({ id: 'label.inquiry.property.budget.below1M' }),
                                               value: 'label.inquiry.property.budget.below1M'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.budget.from1to2M' }),
                                               value: 'label.inquiry.property.budget.from1to2M'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.budget.from2to3M' }),
                                               value: 'label.inquiry.property.budget.from2to3M'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.budget.from3to4M' }),
                                               value: 'label.inquiry.property.budget.from3to4M'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.budget.from4to5M' }),
                                               value: 'label.inquiry.property.budget.from4to5M'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.budget.above5M' }),
                                               value: 'label.inquiry.property.budget.above5M'
                                           }]}
                                           validate={required}
                                           searchable={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.unitTypes"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field name={`unitTypes`}
                                           component={AdvancedDropDown}
                                           options={[{
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.studio' }),
                                               value: 'label.inquiry.property.unitTypes.studio'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.oneBedroom' }),
                                               value: 'label.inquiry.property.unitTypes.oneBedroom'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.twoBedroom' }),
                                               value: 'label.inquiry.property.unitTypes.twoBedroom'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.threeBedroom' }),
                                               value: 'label.inquiry.property.unitTypes.threeBedroom'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.villas' }),
                                               value: 'label.inquiry.property.unitTypes.villas'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.allOfAbove' }),
                                               value: 'label.inquiry.property.unitTypes.allOfAbove'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.others' }),
                                               value: 'label.inquiry.property.unitTypes.others'
                                           }]}
                                           validate={required}
                                           searchable={false}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.unitSize"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field name={`unitSize`}
                                           component={AdvancedDropDown}
                                           options={[{
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.below600' }),
                                               value: 'label.inquiry.property.unitSize.below600'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.from600to1000' }),
                                               value: 'label.inquiry.property.unitSize.from600to1000'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.from1000to2000' }),
                                               value: 'label.inquiry.property.unitSize.from1000to2000'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.from2000to3000' }),
                                               value: 'label.inquiry.property.unitSize.from2000to3000'
                                           }, {
                                               label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.above3000' }),
                                               value: 'label.inquiry.property.unitSize.above3000'
                                           }]}
                                           validate={required}
                                           searchable={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.preferredPropertyDistrict"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field name="preferredPropertyDistrict" type="text"
                                           component={InputField}
                                           maxLength={100}
                                           validate={required}
                                    />
                                </div>
                            </div>
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
    form: 'propertyInquiryForm', // a unique identifier for this form,
    onSubmitFail: (errors) => {
        const keys = Object.keys(errors);
        const match = document.querySelectorAll(`div [name="${keys[0]}"]`);
        if (match.length) {
            match[0].scrollIntoView({ block: 'center', behaviour: 'smooth' });
        }
    }

})(injectIntl(PropertyInquiryForm));

