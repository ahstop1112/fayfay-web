import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PackageTimeSelect from '../activity/PackageTimeSelect';
import PackageTicketTypeList from '../activity/PackageTicketTypeList';
import { injectIntl, FormattedMessage } from 'react-intl';
import moment from 'moment';
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import DatePickerCustomInput from "../../components/inputs/DatePickerCustomInput";
import Constants from "fayfayConstants";

class ShoppingCartModal extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired,
        cartItem: PropTypes.object,
        availableDates: PropTypes.object,
        packageOptionMap: PropTypes.object,
        selectPackageBookingTime: PropTypes.func.isRequired,
        loadTicketTypes: PropTypes.func.isRequired,
        updatePackageTicketPurchase: PropTypes.func.isRequired,
        updateCart: PropTypes.func.isRequired,
        selectedBookingDate: PropTypes.object.isRequired,
        changeBookingDate: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired
    };

    static defaultProps = {
        cartItem: {},
        availableDates: {},
        packageOptionMap: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            timeChanged: false
        };
    }

    // This function will set the booking time and load the ticket types
    enhancedSelectPackageBookingTime = (packageId, packageAvailabilityId) => {
        this.setState({
            timeChanged: true
        });
        this.props.loadTicketTypes(this.props.cartItem.activityId, packageId, packageAvailabilityId);
    };

    saveCartDetails = () => {
        const { cartItem, packageOptionMap } = this.props;
        const items = [];
        const bookingTimeId = packageOptionMap.packageAvailabilityId || cartItem.packageAvailabilityId;

        Object.entries(packageOptionMap.ticketsToPurchase).forEach(entry => {
            const [ticketTypeId, ticketPurchaseInfo] = entry;
            items.push({
                packagePriceId: Number(ticketTypeId),
                quantity: ticketPurchaseInfo.quantity
            });
        });

        if (!this.state.timeChanged) {
            cartItem.items.forEach(element => {
                const existed = items.find(i => i.packagePriceId === element.packagePriceId);
                if (!existed && element.quantity)
                    items.push({
                        quantity: element.quantity,
                        packagePriceId: element.packagePriceId
                    });
            });
        }

        const values = {
            activityId: cartItem.activityId,
            packageId: cartItem.packageId,
            packageAvailabilityId: bookingTimeId,
            items: items.filter(it => {
                return it.quantity > 0
            })
        };

        this.setState({
            timeChanged: false
        }, () => this.props.updateCart(cartItem.id, values));

    };

    handleActivityDateChange = (value) => {
        this.setState({
            timeChanged: true
        });

        this.props.changeBookingDate(value);
    };

    close = () => {
        this.setState({
                timeChanged: false
            },
            this.props.closeModal
        );
    }

    render() {
        const {
            show,
            cartItem,
            availableDates,
            packageOptionMap,
            updatePackageTicketPurchase,
            selectedBookingDate,
            intl,
            ajaxStatus
        } = this.props;
        const bookingDate = packageOptionMap.bookingDate || cartItem.packageAvailabilityDate;
        const bookingTimeId = packageOptionMap.packageAvailabilityId || cartItem.packageAvailabilityId;
        let showTime = !!availableDates[bookingDate];
        const timeList = availableDates[bookingDate] || [];

        if (showTime && timeList.length === 1 && timeList[0].time === Constants.ALL_DAY_BOOKING_TIME) {
            showTime = false;
        }

        let newPackageOption;

        if (!this.state.timeChanged && packageOptionMap.ticketTypeData) {
            const ticketTypes = [];
            packageOptionMap.ticketTypeData.forEach(element => {
                let updateTicket = cartItem.items.find(item => item.packagePriceId === element.id);

                Object.entries(packageOptionMap.ticketsToPurchase || {}).forEach(entry => {
                    const [ticketTypeId, ticketPurchaseInfo] = entry;
                    if (Number(ticketTypeId) === element.id) {
                        updateTicket = ticketPurchaseInfo;
                    }
                });

                if (updateTicket) ticketTypes.push({ ...element, quantity: updateTicket.quantity });
                else ticketTypes.push(element);
            });
            const selectedTime = timeList.find(item => item.id === bookingTimeId);

            newPackageOption = {
                ...packageOptionMap,
                ticketTypeData: ticketTypes,
                ticketsToPurchase: ticketTypes,
                quota: selectedTime ? selectedTime.quota : null
            };

        } else {
            if (showTime) {
                newPackageOption = packageOptionMap;

            } else {
                newPackageOption = { ...packageOptionMap, quota: timeList.length ? timeList[0].quota : null };
            }
        }

        let disabledSubmitButton = true;
        Object.entries(packageOptionMap.ticketsToPurchase || {}).forEach(entry => {
            const [ticketTypeId, ticketPurchaseInfo] = entry;
            if (ticketTypeId) {
                disabledSubmitButton = false;
            }
        });

        const dates = Object.entries(availableDates).map(entry => {
            const [date, ...rest] = entry;
            return moment(date)
        });

        //Quantity Validation
        let hasError = false;
        let hasPackageError = false;
        const ticketTypeData = packageOptionMap.ticketTypeData || [];
        const ticketsToPurchase = Object.entries(packageOptionMap.ticketsToPurchase || {});
        ticketTypeData.forEach(type => {
            if (type.minimumTicketCount) {
                const purchasedTicket = ticketsToPurchase.find((item) => Number(item[0]) === type.id);

                if (!purchasedTicket) {
                    const currentPurchasedTicket = cartItem.items.find(ticketTypeItem => ticketTypeItem.packagePriceId === type.id);
                    if (!currentPurchasedTicket) {
                        hasError = true;
                    } else if (currentPurchasedTicket.quantity < type.minimumTicketCount) {
                        hasError = true;
                    }
                }
                else if (purchasedTicket[1].quantity < type.minimumTicketCount) {
                    hasError = true;
                }
            }
        })

        let totalBookings = ticketsToPurchase.reduce((sum, item) => {
            const [ticketTypeId, ticketPurchaseInfo] = item;
            if (ticketPurchaseInfo.quantity) {
                return sum + Number(ticketPurchaseInfo.quantity);
            } else {
                return sum;
            }
        }, 0);

        if (!this.state.timeChanged) {
            totalBookings += cartItem.items.reduce((sum, cartItemType) => {
                const purchasedTicket = ticketsToPurchase.find((item) => Number(item[0]) === cartItemType.packagePriceId);

                if (!purchasedTicket) {
                    return sum + cartItemType.quantity;
                }
                return sum;
            }, 0);
        }

        if (cartItem.minimumTicketCount && totalBookings < cartItem.minimumTicketCount) {
            hasPackageError = true;
        }

        if (cartItem.maximumTicketCount && totalBookings > cartItem.maximumTicketCount) {
            hasPackageError = true;
        }

        return (
            <div className={classNames('popup-details', { opened: show })}>
                <div className="popup-header">
                    <div className="row">
                        <div className="col-sm-6 col-xs-5">
                            <i className="icon arrow-left close-popup-details" onClick={this.props.closeModal}/>
                        </div>
                        <div className="col-sm-6 col-xs-7">
                            <h5><FormattedMessage id="common.edit"/></h5>
                        </div>
                    </div>
                </div>
                <div className="popup-body">
                    <h5 className="visible-xs">{cartItem.activityName}</h5>
                    <p className="desc visible-xs">{cartItem.packageName}</p>
                    <hr className="visible-xs"/>
                    <div className="form-group  package-date">
                        <label htmlFor="package-select-date"><FormattedMessage id='common.select.date'/></label>
                        <DatePicker
                            customInput={
                                <DatePickerCustomInput fontAwesome="fa-calendar-alt"
                                                       iconClassName="fayfay-calendar-icon"
                                                       placeholderText={intl.formatMessage({ id: 'package.selectDate' })}/>
                            }
                            selected={selectedBookingDate}
                            onChange={this.handleActivityDateChange}
                            includeDates={dates}
                            showDisabledMonthNavigation
                            dateFormat="YYYY-MM-DD"
                            locale={intl.locale}
                            readOnly
                        />
                    </div>
                    {showTime && <div className="form-group  package-time">
                        <label htmlFor="package-select-time"><FormattedMessage id='common.select.time'/></label>
                        <PackageTimeSelect
                            packageId={cartItem.packageId}
                            packageAvailabilityId={bookingTimeId}
                            timeList={timeList}
                            selectPackageBookingTime={this.enhancedSelectPackageBookingTime}
                            showDefaultOption={false}
                        />
                    </div>}

                    <div className="form-group package-qty-row">
                        <label htmlFor="package-select-time"><FormattedMessage id='package.quantity'/></label>
                        <div className="row">
                            <PackageTicketTypeList
                                packageTicketPurchaseInfo={newPackageOption}
                                updatePackageTicketPurchase={updatePackageTicketPurchase}
                                maximumTicketCount={cartItem.maximumTicketCount}
                                className="col-md-12 package-qty-row"
                            />
                            <div className="col-md-12">
                                <hr/>
                            </div>
                        </div>
                        {!hasError && hasPackageError &&
                        <div className="row">
                            <div className="col-sm-12">
                                <span className="error">
                                    <FormattedMessage id="package.orderMinimumAmount"
                                                      values={{ value: cartItem.minimumTicketCount }}/>
                                </span>
                            </div>
                        </div>}
                        {ajaxStatus.isServerError && ajaxStatus.serverMessage === 'MSG_ERROR_CART_PACKAGE_MINIMUM_TICKET_COUNT_INVALID' &&
                        <span className="error"><FormattedMessage id={ajaxStatus.serverMessage}
                                                                  values={{ 'value': cartItem.minimumTicketCount }}/></span>}
                        {ajaxStatus.isServerError && ajaxStatus.serverMessage !== 'MSG_ERROR_CART_PACKAGE_MINIMUM_TICKET_COUNT_INVALID' &&
                        <span className="error"><FormattedMessage id={ajaxStatus.serverMessage}/></span>}
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6 txt-right">
                                <button className="btn btn-s grey" onClick={this.close}>
                                    <FormattedMessage id="common.cancel"/>
                                </button>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 ">
                                <button className="btn btn-s" onClick={this.saveCartDetails}
                                        disabled={disabledSubmitButton || hasError || hasPackageError}>
                                    <FormattedMessage id="common.confirm"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="arrow"/>
                </div>
            </div>
        );
    }
}

export default injectIntl(ShoppingCartModal)
