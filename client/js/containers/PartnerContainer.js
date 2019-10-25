import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProviderForm from './partner/ProviderForm';
import InfluencerForm from './partner/InfluencerForm';
import PropTypes from 'prop-types';
import { postFormData } from '../redux/actions/formSubmissionAction';

class PartnerContainer extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        postFormData: PropTypes.func.isRequired,
        ajaxStatus: PropTypes.object.isRequired
    };

    render() {
        const { postFormData, ajaxStatus, data } = this.props;

        return (
            <div className="tab-content">
                <div className="tab-pane fade in active">
                    {data.pageName === 'partner' && (
                        <ProviderForm ajaxStatus={ajaxStatus} postFormData={postFormData}
                                      reCaptcha={data.reCaptcha}/>)}
                    {data.pageName === 'influencer' && (
                        <InfluencerForm ajaxStatus={ajaxStatus} postFormData={postFormData}
                                        reCaptcha={data.reCaptcha}/>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus
    };
};

export default connect(mapStateToProps,
    { postFormData }
)(PartnerContainer);
