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

export class HotelInquiryForm extends Component {
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
            resetCaptcha: false,
            dateFrom: null,
            dateTo: null
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
                interested: values.interested,
                dateFrom: moment(values.dateFrom).format('YYYY-MM-DD'),
                dateTo: moment(values.dateTo).format('YYYY-MM-DD'),
                numOfAdult: Number(values.numOfAdult),
                numOfChildren: Number(values.numOfChildren),
                numOfRoom: Number(values.numOfRoom),
                specialRequest: values.specialRequest
            };

            this.setState(
                { resetCaptcha: true },
                () => postFormData(`/public/activity/email/inquiry/hotel?langId=${langId}&g-recaptcha-response=${this.state.captchaResponse}`, submitData, form, 'post', true));
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

    dateFromChange = (dateFrom) => {
        this.setState({ dateFrom });
    };

    dateToChange = (dateTo) => {
        this.setState({ dateTo });
    };

    componentDidUpdate() {
        const { ajaxStatus } = this.props;
        if ((ajaxStatus.isSubmitSuccess || ajaxStatus.isServerError) && this.state.resetCaptcha && this.state.captchaResponse) {
            window.grecaptcha.reset();
            this.expiredCallback();
            this.setState({ resetCaptcha: false, dateFrom: null, dateTo: null });
        }
    }

    componentDidMount() {
        this.props.initialize({
            interested: this.props.interestedExperience
        })
    }

    render() {
        const { show, handleSubmit, ajaxStatus, countries, instantMessengers, intl, form, pristine, onClose } = this.props;

        const countryList = countries.map(item => {
            return { value: item.countryCode, label: `${item.name} (+${item.countryCode})`, id: item.id };
        });

        const messengers = instantMessengers.map(item => {
            return { value: item, label: intl.formatMessage({ id: item }) };
        });

        let numberOfDays = 0;
        if (this.state.dateFrom && this.state.dateTo) {
            numberOfDays = moment(this.state.dateTo).diff(this.state.dateFrom, 'days');
        }

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
                                        name="interested"
                                        type="text"
                                        component={InputField}
                                        validate={required}
                                        maxLength={500}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-md-12">
                                            <FormattedMessage id="inquiry.experiencePeriod"/> <span
                                            className="required">*</span>
                                        </label>
                                        <div className="col-md-6">
                                            <div className="visa-date-of-arrival-picker">
                                                <Field name={`dateFrom`} component={DateInputField}
                                                       minDate={moment()} validate={required}
                                                       onChange={this.dateFromChange}
                                                       placeHolder={intl.formatMessage({ id: 'search.dateFrom' })}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="visa-date-of-arrival-picker">
                                                <Field name={`dateTo`} component={DateInputField}
                                                       minDate={this.state.dateFrom ? moment(this.state.dateFrom).add(1, 'days') : moment()}
                                                       validate={required} onChange={this.dateToChange}
                                                       placeHolder={intl.formatMessage({ id: 'search.dateTo' })}/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            {numberOfDays > 0 && `${numberOfDays} ${intl.formatMessage({ id: 'package.nights' })}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.numberOfAdults"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field
                                        name="numOfAdult"
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
                                        <FormattedMessage id="inquiry.numberOfChildren"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field
                                        name="numOfChildren"
                                        type="number"
                                        maxLength={2}
                                        component={InputField}
                                        validate={required}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.numberOfRooms"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field
                                        name="numOfRoom"
                                        type="number"
                                        maxLength={2}
                                        component={InputField}
                                        validate={[required, this.minimumNumber]}
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
                                           placeholder={intl.formatMessage({ id: 'travel.planning.hotel.message.desc' })}
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
    form: 'inquiryForm', // a unique identifier for this form,
    validate: (values) => {
        const errors = {};
        if (values.dateFrom && values.dateTo) {
            const numberOfDays = moment(values.dateTo).diff(values.dateFrom, 'days');
            if (numberOfDays < 1) {
                errors.dateTo = 'MSG_ERROR_INQUIRY_FLOW_DATE_FROM_MUST_GREATER_THAN_DATE_TO'
            }
        }
        return errors;
    },
    onSubmitFail: (errors) => {
        const keys = Object.keys(errors);
        const match = document.querySelectorAll(`div [name="${keys[0]}"]`);
        if (match.length) {
            match[0].scrollIntoView({ block: 'center', behaviour: 'smooth' });
        }
    }

})(injectIntl(HotelInquiryForm));

