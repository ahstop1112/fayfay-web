import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class ConfirmationFaySimHotelDelivery extends Component {
    static propTypes = {
        extraInfos: PropTypes.array.isRequired,
        intl: PropTypes.object.isRequired
    };

    accommodationTypes = [{label: <FormattedMessage id='common.hotel'/>, value: 'label.sim.accommodationType.hotel'},
        {label: <FormattedMessage id='common.airbnb'/>, value: 'label.sim.accommodationType.airbnb'}];

    render() {
        const { extraInfos } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((item, index) => {
                    return (<div key={`faysim-delivery-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.accommodationType"/>
                                    </label>
                                    <div>{ this.accommodationTypes.find(it => it.value === item.accommodationType).label }</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.hotelName"/>
                                    </label>
                                    <div>{item.hotelName}</div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.deliveryAddress"/>
                                    </label>
                                    <div>{item.deliveryAddress}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.note"/>
                                    </label>
                                    <div>{item.note}</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(ConfirmationFaySimHotelDelivery);
