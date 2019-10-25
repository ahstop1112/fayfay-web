import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResetPasswordForm from "../components/ResetPasswordForm";
import {resetAjaxStatus, resetPassword} from "../redux/actions/registerActions";

import PropTypes from "prop-types";


class ResetPasswordContainer extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        resetAjaxStatus: PropTypes.func.isRequired,
        resetPassword: PropTypes.func.isRequired
    };

    render() {
        const {
            data,
            ajaxStatus,
            resetAjaxStatus,
            resetPassword
        } = this.props;

        return (
            <ResetPasswordForm
                ajaxStatus={ajaxStatus}
                resetAjaxStatus={resetAjaxStatus}
                resetPassword={resetPassword}
                email={data.email}
                verificationCode={data.verificationCode}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus,
        userInfo: state.userInfo
    };
};

export default connect(mapStateToProps, {
    resetPassword,
    resetAjaxStatus
})(ResetPasswordContainer);
