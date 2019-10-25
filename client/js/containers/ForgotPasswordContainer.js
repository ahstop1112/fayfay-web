import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { resetAjaxStatus, forgotPassword } from "../redux/actions/registerActions";

import PropTypes from "prop-types";

class ForgotPasswordContainer extends Component {

    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        resetAjaxStatus: PropTypes.func.isRequired,
        forgotPassword: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
        resetCaptcha: PropTypes.bool.isRequired
    };

    render() {
        const {
            ajaxStatus,
            resetAjaxStatus,
            forgotPassword,
            data,
            resetCaptcha
        } = this.props;
        return (

            <ForgotPasswordForm
                resetCaptcha={resetCaptcha}
                ajaxStatus={ajaxStatus}
                resetAjaxStatus={resetAjaxStatus}
                forgotPassword={forgotPassword}
                data={data}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        resetCaptcha: state.register.resetCaptcha,
        ajaxStatus: state.ajaxStatus,
        userInfo: state.userInfo
    };
};

export default connect(mapStateToProps, {
    forgotPassword,
    resetAjaxStatus
})(ForgotPasswordContainer);
