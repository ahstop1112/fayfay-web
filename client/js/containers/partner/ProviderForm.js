import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import InputField from "../../components/inputs/InputField";
import Button from "../../components/inputs/Button";
import { emailChk, numberChk, requiredChk, website } from '../../utils/validators';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import Recaptcha from 'react-grecaptcha';
import { RESET_STATUS } from "../../redux/reducers/ajaxStatusReducers";
import { getLangUrl } from "../../utils/helpers";

class ProviderForm extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        postFormData: PropTypes.func.isRequired,
        form: PropTypes.string.isRequired,
        reCaptcha: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            showRequiredCaptcha: false,
            captchaResponse: ''
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

    submitHandler = (values) => {
        const { postFormData, form } = this.props;
        postFormData(`/experience-provider?g-recaptcha-response=${this.state.captchaResponse}`, values, form, 'post', true);
    };

    componentDidUpdate() {
        const { ajaxStatus, dispatch } = this.props;
        if (ajaxStatus.serverMessage) {
            window.grecaptcha.reset();
            window.setTimeout(() => {
                dispatch({
                    type: RESET_STATUS
                });
            }, 2500)
        }
    }

    render() {
        const { handleSubmit, ajaxStatus, intl, form, reCaptcha } = this.props;

        const langUrl = getLangUrl(intl.locale);

        return (
            <React.Fragment>
                <section className="bg-orange">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 txt-center">
                                <h1><FormattedHTMLMessage id="partner.orange.title"/></h1>
                                <button className="btn btn-s white provider-register"><FormattedMessage id="register"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light-grey">
                    <div className="container-fluid">
                        <div className="row">
                            <div
                                className="col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="whitebox">
                                            <div className="img">
                                                <img src="/images/icons/travel.jpg" alt=""/>
                                            </div>
                                            <h3><FormattedMessage id="partner.attract.the.right.traveler"/></h3>
                                            <p className="desc"><FormattedMessage
                                                id="partner.attract.the.right.traveler.desc"/></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="whitebox">
                                            <div className="img">
                                                <img src="/images/icons/money.jpg" alt=""/>
                                            </div>
                                            <h3><FormattedMessage id="partner.increase.your.sales"/></h3>
                                            <p className="desc"><FormattedMessage
                                                id="partner.increase.your.sales.desc"/></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="whitebox">
                                            <div className="img">
                                                <img src="/images/icons/support.jpg" alt=""/>
                                            </div>
                                            <h3><FormattedMessage id="partner.get.expert.support"/></h3>
                                            <p className="desc"><FormattedMessage id="partner.get.expert.support.desc"/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="paddingTop-30px paddingBottom-30px experience-provider">
                    <div className="container-fluid">
                        <div className="row">
                            <div
                                className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 ">
                                        <p><FormattedHTMLMessage id="partner.experience.provider.form.desc"/></p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(this.submitHandler)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field name="firstName" type="text"
                                                       label={intl.formatMessage({ id: "common.firstName" })}
                                                       required={true} validate={[requiredChk]}
                                                       component={InputField}
                                                       placeholder={intl.formatMessage({ id: "common.firstName" })}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field name="lastName" type="text"
                                                       label={intl.formatMessage({ id: "common.lastName" })}
                                                       required={true} validate={[requiredChk]}
                                                       component={InputField}
                                                       placeholder={intl.formatMessage({ id: "common.lastName" })}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field name="publicCompanyName" type="text"
                                                       label={intl.formatMessage({ id: "partner.provider.publicCompanyName" })}
                                                       required={true} validate={[requiredChk]}
                                                       component={InputField}
                                                       placeholder={intl.formatMessage({ id: "partner.provider.publicCompanyName" })}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field name="legalCompanyName" type="text"
                                                       label={intl.formatMessage({ id: "partner.provider.legalCompanyName" })}
                                                       required={true} validate={[requiredChk]}
                                                       component={InputField}
                                                       placeholder={intl.formatMessage({ id: "partner.provider.legalCompanyName" })}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field name="companyWebsite" type="text"
                                                       label={intl.formatMessage({ id: "partner.provider.website" })}
                                                       required={true} validate={[requiredChk, website]}
                                                       component={InputField}
                                                       placeholder={intl.formatMessage({ id: "partner.provider.website" })}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field name="businessEmail" type="text"
                                                       label={intl.formatMessage({ id: "partner.provider.email" })}
                                                       required={true} validate={[requiredChk, emailChk]}
                                                       component={InputField}
                                                       placeholder={intl.formatMessage({ id: "partner.provider.email" })}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field name="phoneNumber" type="number"
                                                       label={intl.formatMessage({ id: "common.phone.number" })}
                                                       required={true} validate={[requiredChk, numberChk]}
                                                       component={InputField}
                                                       placeholder={intl.formatMessage({ id: "common.phone.number" })}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field name="businessAddress" type="text"
                                                       label={intl.formatMessage({ id: "partner.provider.address" })}
                                                       required={true} validate={[requiredChk]}
                                                       component={InputField}
                                                       placeholder={intl.formatMessage({ id: "partner.provider.address" })}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <Field name="aboutCompany" type="textarea"
                                                       label={intl.formatMessage({ id: 'partner.provider.tellAboutYourCompany' })}
                                                       required={true} validate={[requiredChk]}
                                                       component={InputField} row={10} className={"resize-none"}
                                                       placeholder={intl.formatMessage({ id: 'partner.provider.saySth' })}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Recaptcha
                                                    sitekey={reCaptcha.siteKey}
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
                                        <div className="col-md-2 col-sm-4 col-xs-4">
                                            <Button
                                                type="submit"
                                                className="btn btn-lg submit-btn"
                                                submitting={ajaxStatus.sendForm === form && ajaxStatus.isSubmitting}
                                            >
                                                <FormattedMessage id="common.submit"/>
                                            </Button>

                                        </div>
                                        <div className="col-md-8 col-sm-8 col-xs-8 ask-fayfay-msg">
                                            {
                                                ajaxStatus.sendForm === form && ajaxStatus.isSubmitSuccess && (
                                                    <FormattedMessage id="help.contact.received"/>)
                                            }
                                            {
                                                ajaxStatus.sendForm === form && ajaxStatus.serverMessage && (
                                                    <FormattedMessage id={ajaxStatus.serverMessage}/>)
                                            }
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <FormattedHTMLMessage id="partner.provider.moreForm" values={{
                                                    langUrl: langUrl
                                                }}/>
                                            </div>
                                            <hr/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default reduxForm({
    form: 'providerForm', // a unique identifier for this form
})(injectIntl(ProviderForm));
