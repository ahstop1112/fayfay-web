import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartModal from './ShoppingCartModal';
import Modal from '../../components/Modal';
import { FormattedDate, FormattedMessage, injectIntl } from 'react-intl';
import FormatMoney from '../../components/pricing/FormatMoney';
import Constants from 'fayfayConstants';
import moment from 'moment';
import { getLangUrl, formatDate } from "../../utils/helpers";

class ShoppingCartItem extends Component {
    static propTypes = {
        checked: PropTypes.bool,
        cartItem: PropTypes.object.isRequired,
        availableDates: PropTypes.object,
        packageOptionMap: PropTypes.object,
        fetchAvailableDates: PropTypes.func,
        selectPackageBookingDate: PropTypes.func,
        selectPackageBookingTime: PropTypes.func,
        updatePackageTicketPurchase: PropTypes.func,
        loadTicketTypes: PropTypes.func,
        updateCart: PropTypes.func,
        updateCartSuccess: PropTypes.bool,
        deleteCart: PropTypes.func.isRequired,
        changeCheckStatus: PropTypes.func,
        editingCartId: PropTypes.number,
        updateEditingCartId: PropTypes.func,
        cancelUpdate: PropTypes.func,
        ajaxStatus: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired
    };

    static defaultProps = {
        checked: true,
        availableDates: {},
        packageOptionMap: {},
        packageAvailabilityId: 0,
        updateCartSuccess: false,
        editingCartId: 0,
        fetchAvailableDates: () => {
        },
        selectPackageBookingDate: () => {
        },
        selectPackageBookingTime: () => {
        },
        loadTicketTypes: () => {
        },
        updatePackageTicketPurchase: () => {
        },
        updateCart: () => {
        },
        changeCheckStatus: () => {
        },
        updateEditingCartId: () => {
        },
        cancelUpdate: () => {
        }
    };

    constructor(props) {
        super(props);
        const date = this.props.packageOptionMap.bookingDate || this.props.cartItem.packageAvailabilityDate;

        this.state = {
            showModal: false,
            showConfirmDelete: false,
            selectedBookingDate: moment(date)
        };
    }

    showEditModal = () => {
        const { cartItem } = this.props;
        const date = this.props.packageOptionMap.bookingDate || this.props.cartItem.packageAvailabilityDate;

        this.setState({
            selectedBookingDate: moment(date)
        }, () => {
            this.props.updateEditingCartId(cartItem.id);
            this.props.fetchAvailableDates(cartItem.activityId, cartItem.packageId);
            this.props.loadTicketTypes(cartItem.activityId, cartItem.packageId, cartItem.packageAvailabilityId);
        })
    };

    changeBookingDate = (value) => {
        const { cartItem } = this.props;
        this.setState({
            selectedBookingDate: value,
        });
        const dateString = moment(value).format('YYYY-MM-DD');
        this.props.selectPackageBookingDate(cartItem.packageId, dateString);

        const firstDate = this.props.availableDates[dateString][0];
        this.props.loadTicketTypes(this.props.cartItem.activityId, cartItem.packageId, firstDate.id);
    };

    closeModal = () => {
        this.props.cancelUpdate();
    };

    onDelete = () => {
        this.props.deleteCart([this.props.cartItem.id]);
    };

    closeConfirmDelete = () => {
        this.setState({
            showConfirmDelete: false
        });
    };

    showConfirmDelete = () => {
        this.setState({
            showConfirmDelete: true
        });
    };

    ticketTypes = () => {
        const types = this.props.cartItem.items.reduce((arr, next, index) => {
            return arr + (index > 0 ? ', ' : '') + `${next.ticketTypeName} x ${next.quantity}`;
        }, '');

        return types;
    };

    onCheckChanged = event => {
        this.props.changeCheckStatus(this.props.cartItem.id, event.target.checked);
    };

    render() {
        const {
            checked,
            cartItem,
            availableDates,
            packageOptionMap,
            editingCartId,
            loadTicketTypes,
            selectPackageBookingTime,
            updatePackageTicketPurchase,
            updateCartSuccess,
            updateCart,
            ajaxStatus,
            intl
        } = this.props;

        const langUrl = getLangUrl(intl.locale);

        return (
            <div className="greyborderbox">
                <div className="radio-photo">
                    {!cartItem.expired && (
                        <label className="radio-photo-label">
                            <input type="checkbox" name="payment_type" checked={checked}
                                   onChange={this.onCheckChanged}/>
                            <span className="checkmark"></span>
                        </label>
                    )}
                </div>
                <div className="photo">
                    <img
                        src={`${Constants.CLOUDINARY_IMAGE_URL}/w_640/${cartItem.thumbnailKey}.${
                            cartItem.thumbnailFormat
                            }`}
                    />
                </div>
                <div className="name">
                    <h5>
                        <a href={`${langUrl}/experience/${cartItem.activityId}-${cartItem.slug}`} target="_blank"
                           rel="noopener noreferrer">
                            {cartItem.activityName}
                        </a>
                    </h5>
                    <p className="desc">
                        {cartItem.packageName}
                        <br/>
                        {this.ticketTypes()}
                    </p>
                    <p className="visible-sm visible-xs">
                        <b>
                            <FormattedMessage id="common.subtotal"/>
                            :</b>{' '} <span className="price"><FormatMoney value={cartItem.amount}/></span>
                    </p>
                    <p className="mobile-date visible-xs">
                        <b>
                            <FormattedMessage id="common.activity.date"/> :
                        </b>{' '}
                        {formatDate(cartItem.packageAvailabilityDate, 'DD/MM/YYYY')}
                        <br/>
                        <span>{cartItem.packageAvailabilityTime !== Constants.ALL_DAY_BOOKING_TIME && cartItem.packageAvailabilityTime}</span>
                    </p>
                </div>
                <div className="date visible-sm visible-md visible-lg">
                    {formatDate(cartItem.packageAvailabilityDate, 'DD/MM/YYYY')}
                    {cartItem.packageAvailabilityTime !== Constants.ALL_DAY_BOOKING_TIME && <div>{cartItem.packageAvailabilityTime}</div>}
                </div>
                <div className="hr visible-xs"/>
                <div className="price price-tr hidden-sm hidden-xs">
                    <FormatMoney value={cartItem.amount}/>
                </div>
                <div className="hr visible-sm"/>
                <div className="edit-delete">
                    {!cartItem.expired && (
                        <React.Fragment>
                            <a onClick={this.showEditModal}>
                                <FormattedMessage id="common.edit"/>
                            </a>{' | '}
                        </React.Fragment>
                    )}
                    <a onClick={this.showConfirmDelete}>
                        <FormattedMessage id="shopping.delete"/>
                    </a>
                    <ShoppingCartModal
                        show={editingCartId === cartItem.id && !ajaxStatus.isSubmitSuccess}
                        cartItem={cartItem}
                        closeModal={this.closeModal}
                        availableDates={availableDates}
                        packageOptionMap={packageOptionMap}
                        selectPackageBookingTime={selectPackageBookingTime}
                        loadTicketTypes={loadTicketTypes}
                        updatePackageTicketPurchase={updatePackageTicketPurchase}
                        updateCart={updateCart}
                        updateCartSuccess={updateCartSuccess}
                        selectedBookingDate={this.state.selectedBookingDate}
                        changeBookingDate={this.changeBookingDate}
                        ajaxStatus={ajaxStatus}
                    />
                    <Modal
                        show={this.state.showConfirmDelete}
                        title={intl.formatMessage({id:'common.confirm'})}
                        body={<FormattedMessage id="shopping.sure.to.delete.this.item"/>}
                    >
                        <button type="button" className="btn btn-s" onClick={this.onDelete}>
                            <FormattedMessage id="common.yes"/>
                        </button>
                        <button type="button" className="btn btn-s grey" onClick={this.closeConfirmDelete}>
                            <FormattedMessage id="common.no"/>
                        </button>
                    </Modal>
                </div>
            </div>

        );
    }
}

export default injectIntl(ShoppingCartItem);
