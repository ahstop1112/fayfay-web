import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Constants from 'fayfayConstants';
import InputField from '../../components/inputs/InputField';
import { Field, FieldArray } from 'redux-form';
import { required } from '../../utils/validators';
import VisaExtraInfo from './VisaExtraInfo';
import CheckBoxField from '../../components/inputs/CheckboxInputField';
import { formatDate } from '../../utils/helpers';
import TransportExtraInfo from './TransportExtraInfo';
import VisaAndTransportExtraInfo from './VisaAndTransportExtraInfo';
import AirportFastTrackArrival from './AirportFastTrackArrival';
import AirportFastTrackDeparture from './AirportFastTrackDeparture';
import AirportFastTrackArrivalAndDeparture from './AirportFastTrackArrivalAndDeparture';
import FaySimHotelDelivery from './FaySimHotelDelivery';
import FaySimDelivery from './FaySimDelivery';
import FaySimPickup from './FaySimPickup';
import FlightArrivalExtraInfo from './FlightArrivalExtraInfo';
import PropertyExtraInfo from './PropertyExtraInfo';
import PassengerExtraInfo from './PassengerExtraInfo';

export class PaymentActivities extends Component {
    static propTypes = {
        fields: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        userInfo: PropTypes.object.isRequired,
        genders: PropTypes.array.isRequired,
        nationalities: PropTypes.array.isRequired
    };

    render() {
        const {
            intl,
            fields,
            userInfo,
            genders,
            nationalities
        } = this.props;

        return (
            <div className="row">
                {fields.map((field, index) => {
                    const cartItem = fields.get(index);
                    return (
                        <div className="col-sm-12" key={cartItem.id}>
                            <div className="greybox activity">
                                <div className="row activity-row">
                                    <div className="col-lg-3 col-md-4 col-sm-5">
                                        <div className="banner">
                                            <img
                                                src={`${Constants.CLOUDINARY_IMAGE_URL}/w_200/${cartItem.thumbnailKey}.${
                                                    cartItem.thumbnailFormat
                                                }`}
                                                className="bg"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-8 col-sm-7">
                                        <div className="content">
                                            <h5>{cartItem.activityName}</h5>
                                            <p>{cartItem.packageName}</p>
                                            {cartItem.items.map(ticketType =>
                                                <p key={ticketType.id}>{ticketType.ticketTypeName} x {ticketType.quantity}</p>
                                            )}
                                            <p>{formatDate(cartItem.packageAvailabilityDate, 'DD/MM/YYYY')} {cartItem.packageAvailabilityTime}</p>
                                        </div>
                                    </div>
                                </div>
                                {!cartItem.extraInfoTypeName &&
                                <div className="row marginTop-10px">
                                    <div className="col-md-12">
                                        <label>
                                            <FormattedMessage id="payment.note"/>
                                        </label>
                                        <Field
                                            name={`${field}.bookingNote`}
                                            type="textarea"
                                            row={3}
                                            component={InputField}
                                            label=""
                                            placeholder={intl.formatMessage({ id: 'payment.specialRequest' })}
                                            maxLength={1500}
                                            autocomplete="new-password"
                                        />
                                        <Field className="radio-search-label" name={`${field}.check`}
                                               component={CheckBoxField} validate={cartItem.bookingNote ? [] : required}
                                               label={<FormattedMessage id="payment.no.pickup.details"/>}
                                               errorMessage={<FormattedMessage id={'payment.bookingNoteEmpty'}/>}
                                        />
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_VISA' && <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="marginBottom-20px"><FormattedMessage
                                            id="account.applicants.information"/></h4>
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`} component={VisaExtraInfo}
                                                        userInfo={userInfo} genders={genders}
                                                        experienceDate={cartItem.packageAvailabilityDate}
                                                        nationalities={nationalities}/>
                                        </div>
                                    </div>
                                </div>}
                                {
                                    cartItem.extraInfoTypeName === 'EXTRA_INFO_VISA_URGENT' && <div className="row">
                                        <div className="col-md-12">
                                            <h4 className="marginBottom-20px"><FormattedMessage
                                                id="account.applicants.information"/></h4>
                                            <div className="visa-applicants-container">
                                                <FieldArray name={`${field}.extraInfo`} component={VisaExtraInfo}
                                                            userInfo={userInfo} genders={genders}
                                                            experienceDate={cartItem.packageAvailabilityDate}
                                                            urgent={true}
                                                            nationalities={nationalities}/>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_TRANSPORT' && <div className="row">
                                    <div className="col-md-12">
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={TransportExtraInfo}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_VISA_TRANSPORT_SIM' && <div className="row">
                                    <div className="col-md-12">
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={VisaAndTransportExtraInfo}
                                                        nationalities={nationalities}
                                                        userInfo={userInfo} genders={genders}
                                                        experienceDate={cartItem.packageAvailabilityDate}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_DEPARTURE' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="marginBottom-20px"><FormattedMessage
                                            id="payment.travelersInformation"/></h4>
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={AirportFastTrackDeparture}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_ARRIVAL' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="marginBottom-20px"><FormattedMessage
                                            id="payment.travelersInformation"/></h4>
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={AirportFastTrackArrival}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_AIRPORT_VIP_FAST_TRACK_ARRIVAL_DEPARTURE' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="marginBottom-20px"><FormattedMessage
                                            id="payment.travelersInformation"/></h4>
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={AirportFastTrackArrivalAndDeparture}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_FAY_SIM_HK_DELIVERY' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={FaySimDelivery}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_FAY_SIM_HOTEL_DELIVERY' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={FaySimHotelDelivery}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_FAY_SIM_VIETNAM_PICK_UP' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={FaySimPickup}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_FLIGHT_ARRIVAL' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={FlightArrivalExtraInfo}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_PROPERTY_FORM' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`}
                                                        component={PropertyExtraInfo}/>
                                        </div>
                                    </div>
                                </div>}
                                {cartItem.extraInfoTypeName === 'EXTRA_INFO_PASSENGER_INFORMATION' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="marginBottom-20px"><FormattedMessage
                                            id="passenger.information"/></h4>
                                        <div className="visa-applicants-container">
                                            <FieldArray name={`${field}.extraInfo`} component={PassengerExtraInfo}
                                                        userInfo={userInfo} genders={genders}
                                                        nationalities={nationalities}/>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default injectIntl(PaymentActivities);
