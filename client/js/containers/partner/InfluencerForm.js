import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import InputField from "../../components/inputs/InputField";
import Button from "../../components/inputs/Button";
import RadioField from "../../components/inputs/RadioField";
import CheckboxFields from "../../components/inputs/CheckboxFields";
import { requiredChk, emailChk, numberChk } from '../../utils/validators';
import { FormattedMessage, injectIntl } from 'react-intl';
import Recaptcha from 'react-grecaptcha';
import { connect } from 'react-redux';
import { RESET_STATUS } from "../../redux/reducers/ajaxStatusReducers";

const deliverablesList = [
    { label: 'common.article', code: 'Article', checked: false },
    { label: 'common.video', code: 'Video', checked: false },
    { label: 'common.photo', code: 'Photo', checked: false },
    { label: 'common.review', code: 'Review', checked: false },
    { label: 'common.other', code: 'Other', checked: false, more: { value: '' } }
];

const generalOptions = (intl, array) => {
    return array.map((it) => {
        return { ...it, label: intl.formatMessage({ id: it.label }) }
    })
};

class InfluencerForm extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        reCaptcha: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        initialize: PropTypes.func.isRequired,
        postFormData: PropTypes.func.isRequired,
        form: PropTypes.string.isRequired,
        change: PropTypes.func.isRequired,
        formData: PropTypes.object
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

    componentDidMount() {
        const initData = {
            contentDeliverables: generalOptions(this.props.intl, deliverablesList)
        };
        this.props.initialize(initData);
    }

    submitHandler = (values) => {
        const { postFormData, form } = this.props;
        const socials = [];
        socials.push({ blog: values.blog, numberOfFollowers: values.numberOfFollowers });
        if (values.blog2) {
            socials.push({ blog: values.blog2, numberOfFollowers: values.numberOfFollowers2 });
        }
        if (values.blog3) {
            socials.push({ blog: values.blog3, numberOfFollowers: values.numberOfFollowers3 });
        }

        const data = { ...values, socials: socials, createdContent: values.createdContent === 'Yes' };
        if (data.requiredCompensation === 'FREE') {
            data.requiredCompensation = this.props.intl.formatMessage({ id: 'partner.influencer.freeProduct' })
        }
        else if (data.requiredCompensation === 'EXPOSURE') {
            data.requiredCompensation = this.props.intl.formatMessage({ id: 'partner.influencer.lookingExposure' })
        }

        const list = [];
        data.contentDeliverables.forEach(it => {
            if (it.checked) {
                if (it.more) {
                    list.push(it.label + '-' + it.more.value)
                } else {
                    list.push(it.label)
                }
            }
        });
        data.contentDeliverables = list;

        delete data.blog;
        delete data.blog2;
        delete data.blog3;
        delete data.numberOfFollowers;
        delete data.numberOfFollowers2;
        delete data.numberOfFollowers3;

        postFormData(`/partner-influencer?g-recaptcha-response=${this.state.captchaResponse}`, data, form, 'post', true);
    };

    generateCreatedContent = (formData, intl) => {
        const isContentPast = formData ? formData.createdContent === 'Yes' : false;
        const isContentPastNo = formData ? formData.createdContent === 'No' : false;
        return [
            { label: intl.formatMessage({ id: 'common.yes' }), value: 'Yes', checked: isContentPast },
            { label: intl.formatMessage({ id: 'common.no' }), value: 'No', checked: isContentPastNo }
        ];
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

    generateRequiredCompensation = (formData, intl) => {
        const isCompensationYes = formData ? formData.requiredCompensation === 'Yes' : false;
        const isCompensationFree = formData ? formData.requiredCompensation === 'FREE' : false;
        const isCompensationExposure = formData ? formData.requiredCompensation === 'EXPOSURE' : false;
        return [
            { label: intl.formatMessage({ id: 'partner.influencer.paid' }), value: 'Yes', checked: isCompensationYes },
            {
                label: intl.formatMessage({ id: 'partner.influencer.freeProduct' }),
                value: 'FREE',
                checked: isCompensationFree
            },
            {
                label: intl.formatMessage({ id: 'partner.influencer.lookingExposure' }),
                value: 'EXPOSURE',
                checked: isCompensationExposure
            }
        ];
    };

    render() {
        const { handleSubmit, ajaxStatus, intl, form, reCaptcha, formData } = this.props;
        const contentPastRadios = this.generateCreatedContent(formData, intl);
        const compensationRadios = this.generateRequiredCompensation(formData, intl);

        return (
            <section className="paddingTop-30px paddingBottom-30px">
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 ">
                                    <p><FormattedMessage id="partner.influencer.form.desc"/></p>
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
                                                   label={intl.formatMessage({ id: "common.lastName" })} required={true}
                                                   validate={[requiredChk]}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "common.lastName" })}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="onlineAlias" type="text"
                                                   label={intl.formatMessage({ id: "partner.influencer.onlineAlias" })}
                                                   required={true} validate={[requiredChk]}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "partner.influencer.onlineAlias" })}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="email" type="text"
                                                   label={intl.formatMessage({ id: "common.email.address" })}
                                                   required={true} validate={[requiredChk, emailChk]}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "common.email.address" })}/>
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
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="address" type="text"
                                                   label={intl.formatMessage({ id: "partner.influencer.residence" })}
                                                   required={true} validate={[requiredChk]}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "partner.influencer.residence" })}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 ">
                                        <h5><FormattedMessage id="partner.influencer.socialTitle"/></h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="blog" type="text"
                                                   label={intl.formatMessage({ id: "partner.influencer.socialDetail" }, { "num": 1 })}
                                                   required={true} validate={[requiredChk]}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "partner.influencer.socialDetail" }, { "num": 1 })}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="numberOfFollowers" type="number"
                                                   label={intl.formatMessage({ id: "partner.influencer.followers" }, { "num": 1 })}
                                                   required={true} validate={[requiredChk]}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "partner.influencer.followers" }, { "num": 1 })}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="blog2" type="text"
                                                   label={intl.formatMessage({ id: "partner.influencer.socialDetail" }, { "num": 2 })}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "partner.influencer.socialDetail" }, { "num": 2 })}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="numberOfFollowers2" type="number"
                                                   label={intl.formatMessage({ id: "partner.influencer.followers" }, { "num": 2 })}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "partner.influencer.followers" }, { "num": 2 })}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="blog3" type="text"
                                                   label={intl.formatMessage({ id: "partner.influencer.socialDetail" }, { "num": 3 })}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "partner.influencer.socialDetail" }, { "num": 3 })}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field name="numberOfFollowers3" type="number"
                                                   label={intl.formatMessage({ id: "partner.influencer.followers" }, { "num": 3 })}
                                                   component={InputField}
                                                   placeholder={intl.formatMessage({ id: "partner.influencer.followers" }, { "num": 3 })}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field name="aboutYourself" type="textarea"
                                                   label={intl.formatMessage({ id: 'partner.influencer.socialAboutYourself' })}
                                                   required={true} validate={[requiredChk]}
                                                   component={InputField} row={10} className={"resize-none"}
                                                   placeholder={intl.formatMessage({ id: 'partner.influencer.socialSaySth' })}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field
                                                component={RadioField}
                                                className="display-block"
                                                name="createdContent"
                                                type="radio"
                                                label={intl.formatMessage({ id: 'partner.influencer.contentForOtherTravel' })}
                                                radios={contentPastRadios}
                                                change={this.props.change}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field name="contentDescription" type="textarea"
                                                   label={intl.formatMessage({ id: 'partner.influencer.pleaseState' })}
                                                   component={InputField} row={10} className={"resize-none"}
                                                   placeholder={intl.formatMessage({ id: 'partner.influencer.stateSth' })}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group content-deliverables">
                                            <FieldArray
                                                classLabel="display-block"
                                                classLeft="col-md-2"
                                                classRight="col-md-10"
                                                label={intl.formatMessage({ id: 'partner.influencer.deliverables' })}
                                                validate={[requiredChk]} component={CheckboxFields}
                                                name="contentDeliverables"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group require-compensation">
                                            <Field
                                                component={RadioField}
                                                name="requiredCompensation"
                                                className="display-block"
                                                validate={[requiredChk]}
                                                type="radio"
                                                label={intl.formatMessage({ id: 'partner.influencer.requireCompensation' })}
                                                radios={compensationRadios}
                                                change={this.props.change}
                                            />
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
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

InfluencerForm = reduxForm({
    form: 'influencerForm', // a unique identifier for this form
})(injectIntl(InfluencerForm));

InfluencerForm = connect(state => ({
    formData: state.form.influencerForm && state.form.influencerForm.values
}))(InfluencerForm);

export default InfluencerForm;
