import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import { FormattedMessage, injectIntl } from 'react-intl';
import Button from '../../components/inputs/Button';
import PaypalButton from './PaypalButton';
import ConfirmationTransportExtraInfo from './ConfirmationTransportExtraInfo';
import ConfirmationVisaExtraInfo from './ConfirmationVisaExtraInfo';
import ConfirmationVisaAndTransportInfo from './ConfirmationVisaAndTransportExtraInfo';
import ConfirmationAirportFastTrackArrival from './ConfirmationAirportFastTrackArrival';
import ConfirmationAirportFastTrackDeparture from './ConfirmationAirportFastTrackDeparture';
import ConfirmationFastTrackArrivalAndDeparture from './ConfirmationFastTrackArrivalAndDeparture';
import ConfirmationFaySimHotelDelivery from './ConfirmationFaySimHotelDelivery';
import ConfirmationFaySimDelivery from './ConfirmationFaySimDelivery';
import ConfirmationFaySimPickup from './ConfirmationFaySimPickup';
import ConfirmationFlightArrivalExtraInfo from './ConfirmationFlightArrivalExtraInfo';
import ConfirmationPropertyExtraInfo from './ConfirmationPropertyExtraInfo';
import ConfirmationPassengerExtraInfo from './ConfirmationPassengerExtraInfo';

class ExtraInfoConfirmationModal extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        data: PropTypes.array.isRequired,
        close: PropTypes.func.isRequired,
        paymentType: PropTypes.string.isRequired,
        onepay: PropTypes.func.isRequired,
        onMouseOverPaypalButton: PropTypes.func.isRequired,
        onMouseOutPaypalButton: PropTypes.func.isRequired,
        onPaypalPayment: PropTypes.func.isRequired,
        getPayPalLocale: PropTypes.func.isRequired,
        onPaypalAuthorize: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        $(document.body).toggleClass('popup');
        this.state = {
            showConfirm: true
        };
    }

    closeModal = () => {
        $(document.body).toggleClass('popup');
        this.setState({
            showConfirm: false
        });
        this.props.close();
    };

    process = () => {
        this.closeModal();
        this.props.onepay();
    };

    render() {
        const { intl, paymentType, data } = this.props;

        return (
            <Modal
                className="confirmation-form"
                show={this.state.showConfirm}
                title={intl.formatMessage({ id: 'payment.confirmation' })}
                body={
                    (
                        <div>
                            {data.map(cartItem => {
                                const extraInfos = JSON.parse(cartItem.extraInfoValue);
                                return (<div key={`${cartItem.activityId}-${cartItem.packageId}`}
                                             className="greybox activity">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5>{cartItem.activityName}</h5>
                                                <div className="visa-applicants-container">
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_VISA'
                                                        && <ConfirmationVisaExtraInfo extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_VISA_URGENT'
                                                        && <ConfirmationVisaExtraInfo extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_TRANSPORT' &&
                                                        <ConfirmationTransportExtraInfo extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_VISA_TRANSPORT_SIM' &&
                                                        <ConfirmationVisaAndTransportInfo extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_DEPARTURE' &&
                                                        <ConfirmationAirportFastTrackDeparture extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_ARRIVAL' &&
                                                        <ConfirmationAirportFastTrackArrival extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_ARRIVAL_DEPARTURE' &&
                                                        <ConfirmationFastTrackArrivalAndDeparture
                                                            extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_FAY_SIM_HK_DELIVERY' &&
                                                        <ConfirmationFaySimDelivery extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_FAY_SIM_VIETNAM_PICK_UP' &&
                                                        <ConfirmationFaySimPickup extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_FLIGHT_ARRIVAL' &&
                                                        <ConfirmationFlightArrivalExtraInfo extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_FAY_SIM_HOTEL_DELIVERY' &&
                                                        <ConfirmationFaySimHotelDelivery extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_PROPERTY_FORM' &&
                                                        <ConfirmationPropertyExtraInfo extraInfos={extraInfos}/>
                                                    }
                                                    {
                                                        cartItem.extraInfoType === 'EXTRA_INFO_PASSENGER_INFORMATION' &&
                                                        <ConfirmationPassengerExtraInfo extraInfos={extraInfos}/>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )
                }>

                {
                    (paymentType === 'ONEPAY' || paymentType === 'DOMESTIC') && (
                        <React.Fragment>
                            <button type="button" className="btn btn-s pop-process-btn" onClick={this.process}>
                                <FormattedMessage id="payment.process"/>
                            </button>
                            <button type="button" className="btn btn-s yellow" onClick={this.closeModal}>
                                <FormattedMessage id="payment.modify"/>
                            </button>
                        </React.Fragment>)
                }
                {
                    paymentType === 'PAYPAL' && (
                        <div className="confirmation-footer">
                            <div className="col-lg-4">
                                <div onMouseOver={this.props.onMouseOverPaypalButton}
                                     onMouseOut={this.props.onMouseOutPaypalButton}>
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        opacity: 0,
                                        zIndex: 1
                                    }}>
                                        <Button type="button"
                                                style={{ width: '100%' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                        </Button>
                                    </div>
                                    <div style={{
                                        zIndex: this.state.zIndex,
                                        position: 'relative'
                                    }}>
                                        <PaypalButton payment={this.props.onPaypalPayment}
                                                      locale={this.props.getPayPalLocale()}
                                                      onAuthorize={this.props.onPaypalAuthorize}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xs-12">
                                <button type="button" className="btn btn-s yellow" onClick={this.closeModal}>
                                    <FormattedMessage id="payment.modify"/>
                                </button>
                            </div>
                        </div>
                    )
                }

            </Modal>
        );
    }
}

export default injectIntl(ExtraInfoConfirmationModal);
