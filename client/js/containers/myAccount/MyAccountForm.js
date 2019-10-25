import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {injectIntl, FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import InputField from '../../components/inputs/InputField';
import SelectField from '../../components/inputs/SelectField';
import UserImageField from '../../components/inputs/UserImageField';
import {requiredChk, emailChk, numberChk, validateAccount} from '../../utils/validators';
import Button from "../../components/inputs/Button";
import VerificationCodeForm from './VerificationCodeForm';
import {goVerifyEmail, goVerifyPhone, postValidationCode} from "../../redux/actions/accountActions";
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DatePickerCustomInput from "../../components/inputs/DatePickerCustomInput";

class MyAccountForm extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
        formData: PropTypes.object,
        titles: PropTypes.array.isRequired,
        countries: PropTypes.array.isRequired,
        passports: PropTypes.array.isRequired,
        updateAccount: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        initialize: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired,
        goVerifyEmail: PropTypes.func.isRequired,
        goVerifyPhone: PropTypes.func.isRequired,
        postValidationCode: PropTypes.func.isRequired,
        needToVerifyEmail: PropTypes.bool,
        expiryTime: PropTypes.number.isRequired,
        form: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            showVerifyPhone: false,
            showVerifyEmail: false,
            count: 0,
            birthday: null
        }
    }

    static defaultProps = {
        needToVerifyEmail: false
    };

    componentDidMount() {
        const {data} = this.props;
        const initData = {
            languageId: data.languageId,
            profileImage: data.profileImage,
            preferredCurrency: data.preferredCurrency,
            title: data.title,
            firstName: data.firstName,
            lastName: data.lastName,
            passportCountryId: data.passportCountryId,
            countryId: data.countryId,
            phoneNumber: data.phoneNumber,
            email: data.email
        };
        this.setState({
            fullName: `${data.firstName} ${data.lastName}`
        });
        this.setState({
            birthday: moment(data.birthDate)
        });
        this.props.initialize(initData);
    }

    updateMyAccount = values => {
        this.setState({
            fullName: `${values.firstName} ${values.lastName}`,
            showVerifyPhone: false,
            showVerifyEmail: false
        });

        if (values.countryId) {
            const country = this.props.countries.find(country => country.id.toString() === values.countryId.toString());
            values.countryCode = country.countryCode;
        }
        const day = moment(this.state.birthday._d).format('YYYY-MM-DD');
        const data = { ...values, birthDate: day };
        const uid = this.props.data.id;

        this.props.updateAccount(`/update-account/${uid}`, data, this.props.form);
    };

    showVerificationPopup = (type) => {
        const count = this.state.count + 1;
        this.setState({
            showVerifyPhone: type === 'phone',
            showVerifyEmail: type === 'email',
            count: count
        });
    };

    componentDidUpdate(){
        //needToVerifyEmail=true means auto popup
        if (this.props.needToVerifyEmail && !this.state.showVerifyEmail) {
            const count = this.state.count + 1;
            this.setState({
                showVerifyPhone: false,
                showVerifyEmail: true,
                count: count
            });
        }
    }

    handleChangeDate = value => {
        this.setState({ birthday: value });
    };

    render() {
        const {
            handleSubmit, countries, passports, intl, ajaxStatus, data, formData, form, goVerifyEmail, goVerifyPhone, postValidationCode, needToVerifyEmail, expiryTime
        } = this.props;

        const titles = this.props.titles.map(it => {
            let label = intl.formatMessage({id: it});
            return {value: it === 'common.please.select' ? '' : it, text: label};
        });

        let newEmail = '', newPhone = '', newCountryCode = '', phoneTitle='', emailTitle = '';
        if (formData) {
            newEmail = formData.email;
            newPhone = formData.phoneNumber;
            const country = this.props.countries.find(country => country.id.toString() === formData.countryId);
            newCountryCode = country ? country.countryCode : '';
            phoneTitle = <FormattedHTMLMessage id="account.verifyPhoneDesc" values={{"phone": `(+${newCountryCode}) ${newPhone}`}}/>;
            emailTitle = <FormattedHTMLMessage id="account.verifyEmailDesc" values={{"email": newEmail}}/>;
        }

        return (
            <React.Fragment>
                <div className="greyborderbox">
                    <form onSubmit={handleSubmit(this.updateMyAccount)} noValidate>
                        <h4 className="hidden-xs">
                            <FormattedMessage id="account.my.account"/>
                        </h4>
                        <div className="row">
                            <div className="col-md-12 user-area">
                                <Field name="profileImage" component={UserImageField} label={this.state.fullName}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                {ajaxStatus.sendForm === form && ajaxStatus.serverMessage &&
                                <div className="alert alert-danger"><FormattedMessage id={ajaxStatus.serverMessage}/></div>}
                                {ajaxStatus.sendForm === form && ajaxStatus.isSubmitSuccess && !ajaxStatus.serverMessage &&
                                <div className="alert alert-success"><FormattedMessage id="account.accountInfoSave"/></div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-3 nopadding-right">
                                <Field
                                    component={SelectField}
                                    label={intl.formatMessage({id: 'common.title'})}
                                    name="title"
                                    selects={titles}
                                    required={true}
                                    showHeading={false}
                                />
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-4">
                                <Field
                                    validate={[requiredChk]}
                                    name="firstName"
                                    placeholder={intl.formatMessage({id: 'common.as.shown.on.passport'})}
                                    required={true}
                                    type="text"
                                    component={InputField}
                                    label={intl.formatMessage({id: 'account.first.name'})}
                                />
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-5">
                                <Field
                                    validate={[requiredChk]}
                                    name="lastName"
                                    placeholder={intl.formatMessage({id: 'common.as.shown.on.passport'})}
                                    required={true}
                                    type="text"
                                    component={InputField}
                                    label={intl.formatMessage({id: 'account.family.name'})}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8">
                                <Field
                                    component={SelectField}
                                    label={intl.formatMessage({id: 'account.passport.information'})}
                                    name="passportCountryId"
                                    selects={passports}
                                    required={true}
                                    showHeading={false}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-4 nopadding-right">
                                <Field
                                    component={SelectField}
                                    label={intl.formatMessage({id: 'common.country.code'})}
                                    name="countryId"
                                    selects={countries}
                                    showHeading={false}
                                />
                            </div>
                            <div className="col-lg-4 col-md-7 col-sm-8">
                                {/*
                                    formData && !data.verifiedPhoneNumber && <button className="btn btn-xxs verify-click" onClick={()=>this.showVerificationPopup('phone')}><FormattedMessage
                                        id="account.verifyNow"/></button>
                                */}
                                {
                                    formData &&
                                    (<VerificationCodeForm ajaxStatus={ajaxStatus} expiryTime={expiryTime}
                                                           name="phoneCode" title={phoneTitle}
                                                           label={intl.formatMessage({id:"account.enterPhoneCode"})}
                                                           verified={data.verifiedPhoneNumber}
                                                           needToVerifyEmail={false}
                                                           autoPop={false}
                                                           show={this.state.showVerifyPhone}
                                                           count={this.state.count}
                                                           sentTip={intl.formatMessage({id:'account.phoneCodeSent'})}
                                                           sendCode={{
                                                               func: postValidationCode,
                                                               url: `/api/users/${data.id}/phone-verification`, params:{}
                                                           }}
                                                           verificationSubmit={{
                                                               func: goVerifyPhone,
                                                               url: '/verification/phone-verification',
                                                               params: {}
                                                           }}/>)}
                                <Field
                                    validate={[numberChk]}
                                    name="phoneNumber"
                                    placeholder={intl.formatMessage({id: 'common.phone'})}
                                    type="number"
                                    component={InputField}
                                    label={intl.formatMessage({id: 'common.phone'})}
                                    maxLength={16}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-sm-6">
                                {
                                    formData && !data.verifiedEmail && <button className="btn btn-xxs verify-click" onClick={()=>this.showVerificationPopup('email')}><FormattedMessage
                                        id="account.verifyNow"/></button>
                                }
                                {
                                    formData &&
                                    (<VerificationCodeForm ajaxStatus={ajaxStatus} expiryTime={expiryTime}
                                                           name="emailCode" title={emailTitle}
                                                           label={intl.formatMessage({id:"account.enterEmailCode"})}
                                                           verified={data.verifiedEmail}
                                                           needToVerifyEmail={needToVerifyEmail}
                                                           autoPop={false}
                                                           show={this.state.showVerifyEmail}
                                                           count={this.state.count}
                                                           sentTip={intl.formatMessage({id:'account.emailCodeSent'})}
                                                           sendCode={{
                                                               func: postValidationCode,
                                                               url: `/api/users/${data.id}/email-verification`,
                                                               params:{"email": formData.email}
                                                           }}
                                                           verificationSubmit={{
                                                               func: goVerifyEmail,
                                                               url: '/verification/email-verification',
                                                               params: {"email": formData.email}
                                                           }}/>)}
                                <Field
                                    validate={[requiredChk, emailChk]}
                                    name="email"
                                    placeholder={intl.formatMessage({id: 'common.email'})}
                                    required={true}
                                    type="text"
                                    component={InputField}
                                    verifiedStatus={data.verifiedEmail}
                                    label={intl.formatMessage({id: 'common.email.address'})}
                                />
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="account.birthday"/>
                                    </label>
                                    <div className="account-birth-date-picker">
                                        <DatePicker
                                            customInput={
                                                <DatePickerCustomInput fontAwesome="fa-calendar-alt" iconClassName="fayfay-calendar-icon"
                                                                       placeholderText={intl.formatMessage({id:'package.selectDate'})}/>
                                            }
                                            readOnly
                                            dateFormat="DD/MM/YYYY"
                                            selected={this.state.birthday}
                                            onChange={this.handleChangeDate}
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            locale={intl.locale}
                                            maxDate={moment()}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 txt-right">
                                <Button
                                    type="submit"
                                    className="btn btn-lg"
                                    submitting={ajaxStatus.sendForm === form && ajaxStatus.isSubmitting}
                                >
                                    <FormattedMessage id="common.save"/>
                                </Button>
                            </div>
                        </div>
                    </form>

                </div>
            </React.Fragment>
        );
    }
}

MyAccountForm = reduxForm({
    form: 'myAccountForm',
    validate: validateAccount
})(injectIntl(MyAccountForm));

MyAccountForm = connect(
    state => ({
        formData: state.form.myAccountForm && state.form.myAccountForm.values,
        fieldsToVerify: state.account.fieldsToVerify,
        needToVerifyEmail: state.account.needToVerifyEmail
    }),
    {goVerifyEmail, goVerifyPhone, postValidationCode}
)(MyAccountForm);

export default MyAccountForm;
