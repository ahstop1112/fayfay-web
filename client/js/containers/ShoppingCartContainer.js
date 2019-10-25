import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    cancelUpdate,
    cartCheckout,
    deleteCart,
    fetchAvailableDates,
    loadTicketTypes,
    selectPackageBookingDate,
    updateCart,
    updatePackageTicketPurchase,
    updateSelectedCarts
} from '../redux/actions/cartActions';
import ShoppingCartItem from './shoppingCart/ShoppingCartItem';
import Modal from '../../js/components/Modal';
import LoadingContainer from '../components/loading/LoadingContainer';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import FormatMoney from '../components/pricing/FormatMoney';
import PubSub from "pubsub-js";
import constants from 'fayfayConstants';

export class ShoppingCartContainer extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        cartItems: PropTypes.array.isRequired,
        selectedCartIds: PropTypes.array.isRequired,
        availableDates: PropTypes.object.isRequired,
        packageOptionMap: PropTypes.object.isRequired,
        fetchAvailableDates: PropTypes.func.isRequired,
        selectPackageBookingDate: PropTypes.func.isRequired,
        updatePackageTicketPurchase: PropTypes.func.isRequired,
        loadTicketTypes: PropTypes.func.isRequired,
        updateCart: PropTypes.func.isRequired,
        deleteCart: PropTypes.func.isRequired,
        cancelUpdate: PropTypes.func.isRequired,
        cartCheckout: PropTypes.func.isRequired,
        updateSelectedCarts: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            editingCartId: 0
        };
    }

    onCheckChanged = (id, checked) => {
        const { selectedCartIds, updateSelectedCarts } = this.props;

        if (checked) {
            updateSelectedCarts([...selectedCartIds, id]);
        } else {
            const index = selectedCartIds.indexOf(id);
            if (index !== -1) {
                const newValue = [...selectedCartIds.slice(0, index), ...selectedCartIds.slice(index + 1)];
                updateSelectedCarts(newValue);
            }
        }
    };

    onCheckedAllChanged = e => {
        const { cartItems, updateSelectedCarts } = this.props;
        let selectedIds = [];
        if (e.target.checked) {
            selectedIds = cartItems.filter(item => !item.expired).map(item => item.id);
        }
        updateSelectedCarts(selectedIds);
    };

    onDeleteCart = id => {
        this.props.deleteCart(id);
        PubSub.publish(constants.EVENTS.SHOPPING_CART_ITEM_DELETED);
    };

    onEditCart = id => {
        this.setState({
            editingCartId: id
        });
    };

    enhancedCancelUpdate = id => {
        this.setState({
            editingCartId: 0
        });
        this.props.cancelUpdate();
    };

    enhancedUpdateCart = (id, values) => {
        this.props.updateCart(id, values);
    };

    deleteAllExpiredItems = () => {
        this.setState({
            showConfirmDelete: true,
            expiredOnly: true
        });
    };

    deleteAllSelectedItems = () => {
        this.setState({
            showConfirmDelete: true,
            expiredOnly: false
        });
    };

    closeConfirmDelete = () => {
        this.setState({
            showConfirmDelete: false
        });
    };

    onDeleteMultipleItem = () => {
        const { cartItems, deleteCart, selectedCartIds } = this.props;
        this.setState(
            {
                showConfirmDelete: false
            },
            () => {
                if (this.state.expiredOnly) {
                    const expiredItems = cartItems.filter(item => item.expired).map(item => item.id);
                    deleteCart(expiredItems);
                } else {
                    deleteCart(selectedCartIds);
                    PubSub.publish(constants.EVENTS.SHOPPING_CART_ITEM_DELETED);
                }
            }
        );
    };

    onCheckout = () => {
        this.props.cartCheckout(this.props.selectedCartIds, this.props.intl.locale);
    };

    componentDidMount(){
        this.deleteItemFromCartToken = PubSub.subscribe(constants.EVENTS.SHOPPING_CART_ITEM_DELETING, (msg, data) => {
            this.onDeleteCart(data);
        });
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.deleteItemFromCartToken);
    }

    render() {
        const {
            intl,
            cartItems,
            availableDates,
            packageOptionMap,
            ajaxStatus,
            selectedCartIds,
            fetchAvailableDates,
            loadTicketTypes,
            selectPackageBookingDate,
            updatePackageTicketPurchase,
            deleteCart
        } = this.props;

        const activeItems = cartItems.filter(item => !item.expired).sort((a, b) => a.id - b.id);
        const expiredItems = cartItems.filter(item => item.expired).sort((a, b) => a.id - b.id);

        const sum = activeItems.reduce((sum, item) => {
            if (selectedCartIds.indexOf(item.id) !== -1) return sum + item.amount;
            else return sum;
        }, 0);

        return (
            <LoadingContainer loading={ajaxStatus.isLoading}>
                <div className="table-title">
                    <div className="bg-light-grey">
                        <div className="radio-photo">
                            <label className="radio-photo-label">
                                <input
                                    type="checkbox"
                                    name="payment_type"
                                    checked={activeItems.length>0 && selectedCartIds.length === activeItems.length}
                                    onChange={this.onCheckedAllChanged}/>
                                <span className="checkmark"/>
                            </label>
                        </div>
                        <div className="photo">
                            <FormattedMessage id="common.all"/>
                        </div>
                        <div className="name">
                            <FormattedMessage id="common.activity.description"/>
                        </div>
                        <div className="date hidden-xs">
                            <FormattedMessage id="common.activity.date"/>
                        </div>
                        <div className="price-th hidden-sm hidden-xs">
                            <FormattedMessage id="common.subtotal"/>
                        </div>
                        <div className="edit-delete hidden-sm"/>
                    </div>
                </div>
                <div className="table-activity marginBottom-15px">
                    {!ajaxStatus.isLoading &&
                    !activeItems.length && (
                        <div className="padding-20px">
                            <FormattedMessage id="shopping.your.shopping.cart.empty"/>{' '}
                            <FormattedHTMLMessage id="payment.last.popular.info.to.checkout"/>
                        </div>
                    )}
                    {activeItems.map(item => {
                        const checked = selectedCartIds.indexOf(item.id) !== -1;
                        return (
                            <ShoppingCartItem
                                key={item.id}
                                checked={checked}
                                cartItem={item}
                                editingCartId={this.state.editingCartId}
                                availableDates={availableDates}
                                packageOptionMap={packageOptionMap}
                                fetchAvailableDates={fetchAvailableDates}
                                loadTicketTypes={loadTicketTypes}
                                selectPackageBookingDate={selectPackageBookingDate}
                                updatePackageTicketPurchase={updatePackageTicketPurchase}
                                updateCart={this.enhancedUpdateCart}
                                deleteCart={this.onDeleteCart}
                                changeCheckStatus={this.onCheckChanged}
                                updateEditingCartId={this.onEditCart}
                                cancelUpdate={this.enhancedCancelUpdate}
                                ajaxStatus={ajaxStatus}
                            />
                        );
                    })}
                </div>
                {selectedCartIds.length > 0 && (
                    <div className="row marginBottom-30px">
                        <div className="col-lg-5 col-md-4 col-sm-12">

                            <a className="btn btn-s grey" onClick={this.deleteAllSelectedItems}>
                                <FormattedMessage id="shopping.delete.selected.activity"/>
                            </a>

                        </div>
                    </div>
                )}
                {expiredItems.length > 0 && (
                    <React.Fragment>
                        <h4>
                            <FormattedMessage id="payment.expired"/>
                        </h4>
                    </React.Fragment>
                )}
                <div className="table-expired marginBottom-15px">
                    {expiredItems.map(item => {
                        return <ShoppingCartItem cartItem={item} key={item.id} deleteCart={deleteCart}
                                                 ajaxStatus={ajaxStatus}/>;
                    })}
                </div>

                {expiredItems.length > 0 && (
                    <div className="row marginBottom-30px">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                            <a onClick={this.deleteAllExpiredItems} className="expired">
                                <FormattedMessage id="shopping.clear.expired.activities"/>
                            </a>
                        </div>
                    </div>
                )}

                <div className="total-box greyborderbox">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-3 col-xs-12 txt-right">
                            <FormattedMessage id="shopping.activity.total"/>:{' '}{selectedCartIds.length}
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-12 txt-right">
                            <FormattedMessage id="shopping.order.total"/>:{' '}
                            <span className="price">
                                <FormatMoney value={sum}/>
                            </span>
                        </div>
                        <div className="col-lg-2 col-lg-offset-0 col-md-3 col-sm-offset-0 col-sm-4 col-xs-12 txt-right">
                            <button className="btn btn-s" disabled={!selectedCartIds.length} onClick={this.onCheckout}>
                                <FormattedMessage id="common.pay.now"/>
                            </button>
                        </div>
                    </div>
                </div>
                <Modal
                    show={this.state.showConfirmDelete}
                    title={intl.formatMessage({id:'common.confirm'})}
                    body={
                        this.state.expiredOnly
                            ? intl.formatMessage({ id: "shopping.sure.to.delete.expired.item" })
                            : intl.formatMessage({ id: "shopping.sure.to.delete.selected.item" })
                    }
                >
                    <button type="button" className="btn btn-s" onClick={this.onDeleteMultipleItem}>
                        <FormattedMessage id="common.yes"/>
                    </button>
                    <button type="button" className="btn btn-s grey" onClick={this.closeConfirmDelete}>
                        <FormattedMessage id="common.no"/>
                    </button>
                </Modal>
            </LoadingContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus,
        cartItems: state.cart.cartItems,
        availableDates: state.cart.availableDates,
        packageOptionMap: state.cart.packageOptionMap,
        selectedCartIds: state.cart.selectedCartIds
    };
};

export default injectIntl(
    connect(mapStateToProps, {
        fetchAvailableDates,
        selectPackageBookingDate,
        loadTicketTypes,
        updatePackageTicketPurchase,
        updateCart,
        deleteCart,
        cancelUpdate,
        cartCheckout,
        updateSelectedCarts
    })(ShoppingCartContainer)
);
