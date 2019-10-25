import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './registration/RegisterForm';
import { resetAjaxStatus, register } from '../redux/actions/registerActions';

import PropTypes from 'prop-types';

class RegisterFormContainer extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        resetAjaxStatus: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        resetCaptcha: PropTypes.bool.isRequired
    };

    render() {
        const { data, ajaxStatus, resetAjaxStatus, register, resetCaptcha } = this.props;

        return (
            <React.Fragment>
                {
                    <RegisterForm
                        resetCaptcha={resetCaptcha}
                        ajaxStatus={ajaxStatus}
                        resetAjaxStatus={resetAjaxStatus}
                        register={register}
                        facebookId={data.facebookId}
                        googleId={data.googleId}
                        reCaptcha={data.reCaptcha}
                    />
                }
            </React.Fragment>
        );
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
    register,
    resetAjaxStatus
})(RegisterFormContainer);
