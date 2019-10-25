import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { postFormData, resetAjaxStatus } from '../../redux/actions/formSubmissionAction';
import ModalDialog from 'react-bootstrap/lib/Modal';
import HotelInquiryForm from './HotelInquiryForm';
import GeneralInquiryForm from './GeneralInquiryForm';
import PropertyInquiryForm from './PropertyInquiryForm';
import F1InquiryForm from './F1InquiryForm';
import TourGuideInquiryForm from './TourGuideInquiryForm';
import CoachCharterInquiryForm from './CoachCharterInquiryForm';
import HoneymoonInquiryForm from './HoneymoonInquiryForm';
import EventInquiryForm from './EventInquiryForm';
import Constants from 'fayfayConstants';

export class InquiryModal extends Component {
    static propTypes = {
        show: PropTypes.oneOfType([
            PropTypes.string, // string value
            PropTypes.bool // boolean value
        ]), // show if not false 0 "" null undefined NaN, else hide
        onClose: PropTypes.func.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        countries: PropTypes.array.isRequired,
        instantMessengers: PropTypes.array.isRequired,
        postFormData: PropTypes.func.isRequired,
        interestedExperience: PropTypes.string.isRequired,
        interestedPackage: PropTypes.string,
        interestedTicketTypes: PropTypes.array,
        langId: PropTypes.number.isRequired,
        resetAjaxStatus: PropTypes.func.isRequired,
        paymentFlowType: PropTypes.string.isRequired,
        campaignClassName: PropTypes.string
    };

    static defaultProps = {
        show: false,
        campaignClassName: '',
        interestedPackage: '',
        interestedTicketTypes: []
    };

    closeModal = () => {
        this.props.resetAjaxStatus();
        this.props.onClose();
    };

    render() {
        const {
            show, interestedExperience, postFormData, ajaxStatus, countries, instantMessengers, paymentFlowType,
            langId, campaignClassName, interestedPackage, interestedTicketTypes
        } = this.props;

        return (
            <ModalDialog bsSize="large" show={!!show} onHide={this.closeModal} className={campaignClassName}>
                {
                    paymentFlowType === Constants.PAYMENT_FLOW_TYPE.EVENT &&
                    <EventInquiryForm ajaxStatus={ajaxStatus} langId={langId} onClose={this.closeModal}
                                      postFormData={postFormData}/>
                }
                {
                    paymentFlowType === Constants.PAYMENT_FLOW_TYPE.HOTEL &&
                    <HotelInquiryForm countries={countries} instantMessengers={instantMessengers}
                                      ajaxStatus={ajaxStatus} langId={langId} onClose={this.closeModal}
                                      postFormData={postFormData} interestedExperience={interestedExperience}/>
                }
                {
                    paymentFlowType === Constants.PAYMENT_FLOW_TYPE.F1 &&
                    <F1InquiryForm countries={countries} instantMessengers={instantMessengers}
                                   campaignClassName={campaignClassName} interestedPackage={interestedPackage}
                                   ajaxStatus={ajaxStatus} langId={langId} onClose={this.closeModal}
                                   postFormData={postFormData} interestedExperience={interestedExperience}
                                   interestedTicketTypes={interestedTicketTypes}
                    />
                }
                {
                    paymentFlowType === Constants.PAYMENT_FLOW_TYPE.PROPERTY &&
                    <PropertyInquiryForm countries={countries} instantMessengers={instantMessengers}
                                         ajaxStatus={ajaxStatus} langId={langId} onClose={this.closeModal}
                                         postFormData={postFormData} interestedExperience={interestedExperience}/>
                }
                {
                    paymentFlowType === Constants.PAYMENT_FLOW_TYPE.GENERAL &&
                    <GeneralInquiryForm countries={countries} instantMessengers={instantMessengers}
                                        ajaxStatus={ajaxStatus} langId={langId} onClose={this.closeModal}
                                        postFormData={postFormData} interestedExperience={interestedExperience}/>
                }
                {
                    paymentFlowType === Constants.PAYMENT_FLOW_TYPE.TOUR_GUIDE &&
                    <TourGuideInquiryForm countries={countries} instantMessengers={instantMessengers}
                                          ajaxStatus={ajaxStatus} langId={langId} onClose={this.closeModal}
                                          postFormData={postFormData} interestedExperience={interestedExperience}/>
                }
                {
                    paymentFlowType === Constants.PAYMENT_FLOW_TYPE.COACH_CHARTER &&
                    <CoachCharterInquiryForm countries={countries} instantMessengers={instantMessengers}
                                             ajaxStatus={ajaxStatus} langId={langId} onClose={this.closeModal}
                                             postFormData={postFormData} interestedExperience={interestedExperience}/>
                }
                {
                    paymentFlowType === Constants.PAYMENT_FLOW_TYPE.HONEYMOON &&
                    <HoneymoonInquiryForm countries={countries} instantMessengers={instantMessengers}
                                          ajaxStatus={ajaxStatus} langId={langId} onClose={this.closeModal}
                                          postFormData={postFormData} interestedExperience={interestedExperience}/>
                }

            </ModalDialog>
        );
    }
}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus
    };
};

export default connect(
    mapStateToProps,
    {
        postFormData,
        resetAjaxStatus
    }
)(injectIntl(InquiryModal));

