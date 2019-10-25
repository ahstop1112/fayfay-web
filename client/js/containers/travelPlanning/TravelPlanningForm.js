import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import InputField from "../../components/inputs/InputField";
import Button from "../../components/inputs/Button";
import { emailChk, numberChk, required, requiredChk } from '../../utils/validators';
import moment from 'moment';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import Recaptcha from 'react-grecaptcha';
import { RESET_CAPTCHA } from "../../redux/reducers/registerReducer";
import DateInputField from "../../components/inputs/DateInputField";
import Select from 'react-select';
import config from '../../../../config';

class TravelPlanningForm extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        postFormData: PropTypes.func.isRequired,
        form: PropTypes.string.isRequired,
        resetCaptcha: PropTypes.bool.isRequired,
        cities: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            showRequiredCaptcha: false,
            captchaResponse: '',
            destination: '',
            typeOfEvent: ''
        };
    }

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

    onDestinationChange = e => {

        this.setState({
            destination: e ? e.value : '',
        });
    };

    onTypeOfEventChange = e => {
        this.setState({
            typeOfEvent: e ? e.value : '',
        });

    };

    submitHandler = (values) => {
        if (!this.state.captchaResponse) {
            this.setState({
                showRequiredCaptcha: true
            });
        } else {
            const { postFormData, form } = this.props;

            const submitData = {
                name: values.name,
                companyName: values.companyName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                destination: this.state.destination,
                numOfParticipant: values.numOfParticipant,
                dateOfArrival: moment(values.dateOfArrival).format('YYYY-MM-DD'),
                dateOfDeparture: moment(values.dateOfDeparture).format('YYYY-MM-DD'),
                typeOfEvent: this.state.typeOfEvent,
                message: values.message
            };

            postFormData(`/contact-itinerary-planning?g-recaptcha-response=${this.state.captchaResponse}`, submitData, form, 'post', true);
        }
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
        const { handleSubmit, ajaxStatus, intl, form, cities } = this.props;
        const typeOfEvent = [
            {id: 'travel.planning.honeymoon'},
            {id: 'travel.planning.familytrip'},
            {id: 'travel.planning.wedding'},
            {id: 'travel.planning.wellness'},
            {id: 'travel.planning.study'},
            {id: 'travel.planning.dive'},
            {id: 'travel.planning.corporate'},
            {id: 'travel.planning.conference'},
            {id: 'travel.planning.others'}
        ];

        return (
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 ">
                            <h3><FormattedHTMLMessage id="common.contact.us"/></h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(this.submitHandler)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Field name="name" type="text"
                                           label={intl.formatMessage({ id: "travel.planning.name" })}
                                           validate={[requiredChk]}
                                           required={true}
                                           component={InputField}
                                           placeholder={intl.formatMessage({ id: "travel.planning.name" })}
                                           maxLength={200}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Field name="companyName" type="text"
                                           label={intl.formatMessage({ id: "travel.planning.companyName" })}
                                           validate={[requiredChk]}
                                           required={true}
                                           component={InputField}
                                           placeholder={intl.formatMessage({ id: "travel.planning.companyName" })}
                                           maxLength={200}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Field name="email" type="text"
                                           label={intl.formatMessage({ id: "travel.planning.email" })}
                                           validate={[requiredChk, emailChk]}
                                           required={true}
                                           component={InputField}
                                           placeholder={intl.formatMessage({ id: "travel.planning.email" })}
                                           maxLength={100}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Field name="phoneNumber" type="text"
                                           label={intl.formatMessage({ id: "travel.planning.phoneNumber" })}
                                           validate={[requiredChk]}
                                           required={true}
                                           component={InputField}
                                           placeholder={intl.formatMessage({ id: "travel.planning.phoneNumber" })}
                                           maxLength={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="package-select-date">
                                        <FormattedMessage id="travel.planning.destination"/>
                                        <span className="required"> *</span>
                                    </label>
                                    <Select
                                        name="destination"
                                        instanceId="destination"
                                        value={this.state.destination}
                                        onChange={this.onDestinationChange}
                                        options={cities.map(value => {
                                            return { value: value.name, label: value.name }
                                        })}
                                        required={true}
                                        placeholder={<FormattedMessage id="travel.planning.destination"/>}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Field name="numOfParticipant" type="number"
                                           label={intl.formatMessage({ id: "travel.planning.numOfParticipant" })}
                                           validate={[numberChk, requiredChk]}
                                           required={true}
                                           component={InputField}
                                           numberFormat="#####"
                                           placeholder={intl.formatMessage({ id: "travel.planning.numOfParticipant" })}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="package-select-date">
                                        <FormattedMessage id="travel.planning.dateOfArrival"/>
                                        <span className="required"> *</span>
                                    </label>
                                    <div className="travel-planning-arrival-picker">
                                        <Field name={`dateOfArrival`}
                                               component={DateInputField}
                                               validate={required}
                                               required={true}
                                               minDate={moment()}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="package-select-date">
                                        <FormattedMessage id="travel.planning.dateOfDeparture"/>
                                        <span className="required"> *</span>
                                    </label>
                                    <div className="travel-planning-depature-picker">
                                        <Field name={`dateOfDeparture`}
                                               component={DateInputField}
                                               validate={required}
                                               required={true}
                                               minDate={moment()}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="typeOfEvent">
                                        <FormattedMessage id="travel.planning.typeOfEvent"/>
                                        <span className="required"> *</span>
                                    </label>
                                    <Select
                                        name="typeOfEvent"
                                        instanceId="typeOfEvent"
                                        value={this.state.typeOfEvent}
                                        onChange={this.onTypeOfEventChange}
                                        options={typeOfEvent.map(item => {
                                            return {
                                                value: intl.formatMessage({ id: item.id }),
                                                label: intl.formatMessage({ id: item.id })
                                            }
                                        })}
                                        required={true}
                                        placeholder={<FormattedMessage id="travel.planning.typeOfEvent"/>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <Field name="message" type="textarea"
                                           label={intl.formatMessage({ id: 'travel.planning.message' })}
                                           required={true} component={InputField} row={10} className={"resize-none"}
                                           validate={[requiredChk]}
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
                                    <div className="error"><FormattedMessage id="common.captcha.required"/></div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-sm-4 col-xs-4">
                                <Button
                                    type="submit"
                                    className="btn btn-lg submit-btn"
                                    submitting={ajaxStatus.sendForm === form && ajaxStatus.isSubmitting}
                                >
                                    <FormattedMessage id="common.submit"/>
                                </Button>
                            </div>
                            <div className="col-md-10 col-sm-8 col-xs-8 ask-fayfay-msg">
                                {ajaxStatus.sendForm === form && ajaxStatus.isSubmitSuccess && (
                                    <FormattedMessage id="help.contact.received"/>)}
                                {ajaxStatus.sendForm === form && ajaxStatus.serverMessage && (
                                    <FormattedMessage id={ajaxStatus.serverMessage}/>)}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'travelPlanningForm', // a unique identifier for this form
})(injectIntl(TravelPlanningForm));
