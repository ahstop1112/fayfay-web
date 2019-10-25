import React, {Component} from 'react';
import InputField from "../../components/inputs/InputField";
import {injectIntl, FormattedMessage} from 'react-intl';
import {Field, reduxForm} from 'redux-form';
import Modal from '../../components/Modal';
import PropTypes from 'prop-types';
import Button from "../../components/inputs/Button";
import {connect} from 'react-redux';
import {RESET_STATUS} from "../../redux/reducers/ajaxStatusReducers";
import {FIELDS_TO_VERIFY} from "../../redux/reducers/accountReducers";

class VerificationCodeForm extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        change: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        sendCode: PropTypes.object.isRequired,
        verificationSubmit: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.object.isRequired,
        label: PropTypes.string.isRequired,
        sentTip: PropTypes.string.isRequired,
        verified: PropTypes.bool.isRequired,
        autoPop: PropTypes.bool,
        expiryTime: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired,
        needToVerifyEmail: PropTypes.bool.isRequired
    };

    static defaultProps = {
        autoPop: false
    };

    constructor(props) {
        super(props);
        this.state = {
            noticeMessage: '',
            isVerifyClick: false,
            isSendCode: false,
            counter: 0,
            count: 0,
            interval: 0
        }
    }

    startCountDown = () => {
        if (!this.props.ajaxStatus.serverMessage) {
            this.setState({
                noticeMessage: <span className="success">{this.props.sentTip}</span>,
                counter: this.props.expiryTime
            });
            window.clearInterval(this.state.interval);
            this.setState({
                interval : window.setInterval(() => {
                    const timer = this.state.counter - 1;
                    this.setState({
                        counter: timer
                    });

                    if (timer === 0) {
                        window.clearInterval(this.state.interval)
                    }
                }, 1000)
            })
        }
    };

    sendCode = () => {
        if (!this.props.verified) {
            this.setState({
                isSendCode: true,
                isVerifyClick: false
            });
            const {func, url, params} = this.props.sendCode;
            func(url, params, this.startCountDown);
        }
    };

    submit = (values) => {
        if (values[this.props.name] && !this.props.verified) {
            this.setState({
                isSendCode: false,
                isVerifyClick: true,
                noticeMessage: ''
            });
            const {func, url, params} = this.props.verificationSubmit;
            func(url, {...params, verificationCode: values[this.props.name]});
        }
    };

    componentDidUpdate() {
        if (this.props.ajaxStatus.serverMessage) {
            if (this.state.isVerifyClick) {
                this.setState({
                    noticeMessage: this.props.intl.formatMessage({id: this.props.ajaxStatus.serverMessage}),
                });
                this.props.dispatch({
                    type: RESET_STATUS
                })
            }

            if (this.state.isSendCode) {
                this.setState({
                    noticeMessage: this.props.intl.formatMessage({id: this.props.ajaxStatus.serverMessage}),
                });
                this.props.dispatch({
                    type: RESET_STATUS
                })
            }
        }
        if (this.props.count !== this.state.count && this.props.show) {
            this.setState({
                count: this.props.count
            });
            this.showModal()
        }
    }

    showModal = () => {
        $(document.body).toggleClass('popup');
        this.setState({
            showConfirm: true,
        });

        //after auto popup , set it to false to prevent auto popup again.
        if (this.props.needToVerifyEmail) {
            const {dispatch} = this.props;
            dispatch({
                type: FIELDS_TO_VERIFY,
                needToVerifyEmail: false
            });
            this.startCountDown();
        }
    };

    closeModal = () => {
        $(document.body).toggleClass('popup');
        this.setState({
            showConfirm: false,
            isVerifyClick: false,
            isSendCode: false
        });
    };

    render() {
        const {intl, ajaxStatus, name, title, label, handleSubmit, verified} = this.props;

        return (
                <Modal
                    show={this.state.showConfirm}
                    title={intl.formatMessage({id: 'account.secureVerify'})}
                    body={
                        (
                            <div className="account-verify-content">
                                <form className="verification-form">
                                    <p>{title}</p>
                                    <Field
                                        name={name}
                                        placeholder={intl.formatMessage({id: 'account.verification.code'})}
                                        required={true}
                                        maxLength={6}
                                        type="number"
                                        component={InputField}
                                        label={label}
                                        disabled={verified ? 'disabled' : ''}
                                        divClassName="verification-field"
                                    />
                                    {
                                        !verified && this.state.counter === 0 && (
                                            <p className="resend" onClick={() => this.sendCode()}><a><FormattedMessage
                                                id="account.sendCode"/></a></p>)
                                    }
                                    {
                                        !verified && this.state.counter > 0 && (
                                            <p className="resend verify-timer">
                                                <a>{this.state.counter}</a></p>)
                                    }
                                    {
                                        !verified &&
                                        (<Button
                                            type="button"
                                            className="btn btn-s orange"
                                            submitting={this.state.isSendCode && ajaxStatus.isSubmitting}
                                            onClick={handleSubmit(this.submit)}
                                        >
                                            <FormattedMessage id="account.verify"/>
                                        </Button>)
                                    }
                                    {
                                        verified && (
                                            <i className="fas fa-check-circle success-verified-code"/>)
                                    }
                                    {this.state.noticeMessage &&
                                    <p className="verify-error-message">{this.state.noticeMessage}</p>}
                                </form>
                            </div>
                        )
                    }>

                    <button type="button" className="btn btn-s grey" onClick={() => this.closeModal()}>
                        <FormattedMessage id="common.close"/>
                    </button>
                </Modal>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        form: `VerificationCodeForm_${props.name}`
    };
}
export default connect(mapStateToProps)(
    reduxForm({

    })(injectIntl(VerificationCodeForm))
);
