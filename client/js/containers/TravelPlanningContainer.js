import React, { Component } from 'react';
import { connect } from 'react-redux';
import TravelPlanningForm from './travelPlanning/TravelPlanningForm';
import PropTypes from 'prop-types';
import { postFormData } from '../redux/actions/formSubmissionAction';

class TravelPlanningContainer extends Component {
    static propTypes = {
        postFormData: PropTypes.func.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        resetCaptcha: PropTypes.bool.isRequired,
        data: PropTypes.object
    };

    render() {
        const { postFormData, ajaxStatus, resetCaptcha,data } = this.props;

        return (
                <TravelPlanningForm
                    resetCaptcha={resetCaptcha}
                    ajaxStatus={ajaxStatus}
                    postFormData={postFormData}
                    cities={data.cities}
                />
            )
    }
}

const mapStateToProps = state => {
    return {
        resetCaptcha: state.register.resetCaptcha,
        ajaxStatus: state.ajaxStatus
    };
}

export default connect(mapStateToProps,
    { postFormData }
)(TravelPlanningContainer);
