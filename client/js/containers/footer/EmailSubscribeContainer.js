import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import { subscribe } from '../../redux/actions/formSubmissionAction';
import classNames from 'classnames';
import { emailChk } from "../../utils/validators";
import Button from '../../components/inputs/Button';

export class EmailSubscribeContainer extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        subscribe: PropTypes.func.isRequired
    };

    state = {
        email: '',
        emailInvalid: null
    }

    submit = () => {
        if (this.state.email.trim()) {
            const emailInvalid = emailChk(this.state.email.trim());
            if (!emailInvalid) {
                this.props.subscribe(this.state.email.trim());
                this.setState({
                    email: ''
                })
            }

            this.setState({
                emailInvalid
            });
        }
    };

    onKeyPress = e => {
        if (e.key === 'Enter' && this.state.email.trim()) {
            this.submit();
        }
    };

    onEmailChanged = e => {
        this.setState({
            email: e.target.value
        });
    };


    render() {
        const { intl, ajaxStatus } = this.props;

        let serverResponse = '';
        if (ajaxStatus.isServerError) {
            switch (ajaxStatus.serverStatus) {
                case 400:
                    serverResponse = <FormattedMessage id="common.invalid.email.address"/>;
                    break;
                default:
                    serverResponse = <FormattedMessage id={ajaxStatus.serverMessage}/>;
            }
        } else if (ajaxStatus.isSubmitSuccess) {
            serverResponse = <FormattedMessage id="common.thanksForSubscribing"/>;
        }

        return (
            <div className="row">
                <div className="col-lg-5 col-md-offset-1 col-md-5 col-sm-6 col-xs-12 txt-right">
                    <b><FormattedMessage id="common.subscribe.title"/></b>
                    <p className="txt-right"><FormattedHTMLMessage id="common.subscribe.desc"/></p>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <div className="subscribe-form">
                        <input type="text" value={this.state.email} onChange={this.onEmailChanged}
                               onKeyPress={this.onKeyPress}
                               className="input-field input-s"
                               placeholder={intl.formatMessage({ id: 'common.subscribe.field' })}/>

                        <Button className="btn btn-lg yellow"
                                submitting={ajaxStatus.isSubmitting}
                                type="button"
                                onClick={this.submit}>
                            <FormattedMessage
                                id="common.subscribe"/>
                        </Button>
                    </div>
                    <div className="validation">
                        {!this.state.emailInvalid && serverResponse && (
                            <div
                                className={classNames('', {
                                    'error': ajaxStatus.isServerError,
                                    'success': ajaxStatus.isSubmitSuccess
                                })}
                            >
                                {serverResponse}
                            </div>
                        )}
                        {this.state.emailInvalid && this.state.email &&
                        <div className="error"><FormattedMessage id={this.state.emailInvalid}/></div>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus
    };
};

export default connect(mapStateToProps, { subscribe })(injectIntl(EmailSubscribeContainer));
