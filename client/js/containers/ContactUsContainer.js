import React, { Component } from 'react';
import { connect } from 'react-redux';
import AskFayFayForm from './contactus/AskFayFayForm';
import PropTypes from 'prop-types';
import { postFormData } from '../redux/actions/formSubmissionAction';

class ContactUsContainer extends Component {
    static propTypes = {
        postFormData: PropTypes.func.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        data: PropTypes.object,
        resetCaptcha: PropTypes.bool.isRequired
    };

    render() {
        const { postFormData, ajaxStatus, data, resetCaptcha } = this.props;

        return (
            <AskFayFayForm
                ajaxStatus={ajaxStatus}
                postFormData={postFormData}
                instantMessengers={data.instantMessengers}
                countries={data.countries}
                reCaptcha={data.reCaptcha}
                resetCaptcha={resetCaptcha}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        resetCaptcha: state.register.resetCaptcha,
        ajaxStatus: state.ajaxStatus
    };
};

export default connect(mapStateToProps,
    { postFormData }
)(ContactUsContainer);
