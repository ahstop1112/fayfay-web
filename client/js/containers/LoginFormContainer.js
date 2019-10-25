import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './login/LoginForm';
import { resetAjaxStatus, login, register } from '../redux/actions/registerActions';

import PropTypes from 'prop-types';

class LoginFormContainer extends Component {
  static propTypes = {
    ajaxStatus: PropTypes.object.isRequired,
    resetAjaxStatus: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
  };

  render() {
    const { data, ajaxStatus, resetAjaxStatus, login, register } = this.props;

    return (
      <React.Fragment>
        {
          <LoginForm
            ajaxStatus={ajaxStatus}
            resetAjaxStatus={resetAjaxStatus}
            login={login}
            register={register}
            facebookId={data.facebookId}
            googleId={data.googleId}
          />
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ajaxStatus: state.ajaxStatus,
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps, {
  login,
  register,
  resetAjaxStatus
})(LoginFormContainer);
