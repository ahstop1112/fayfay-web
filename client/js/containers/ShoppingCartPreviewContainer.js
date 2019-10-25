import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePreviewCart, getPreviewCartItems } from '../redux/actions/cartActions';
import { FormattedMessage, injectIntl } from 'react-intl';
import FormatMoney from '../components/pricing/FormatMoney';
import { getLangUrl } from '../utils/helpers';
import constants from 'fayfayConstants';
import classNames from 'classnames';
import PubSub from 'pubsub-js';

export class ShoppingCartPreviewContainer extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        cartCount: PropTypes.number,
        previewCartItems: PropTypes.array.isRequired,
        deletePreviewCart: PropTypes.func.isRequired,
        getPreviewCartItems: PropTypes.func.isRequired
    };

    static defaultProps = {
        cartCount: 0
    };

    state = {
        showShoppingCartPreview: false
    };

    ticketTypes = (cartItem) => {
        return cartItem.items.reduce((arr, next, index) => {
            return arr + (index > 0 ? ', ' : '') + `${next.ticketTypeName} x ${next.quantity}`;
        }, '');
    };

    onDeleteCart = id => {
        if (window.location.href.indexOf('/cart') < 0) {
            //Not in cart page
            this.props.deletePreviewCart(id);
        }
        PubSub.publish(constants.EVENTS.SHOPPING_CART_ITEM_DELETING, [id]);
    };

    onCheckout = () => {
        window.location = '/cart';
    };

    componentWillUnmount() {
        PubSub.unsubscribe(this.itemAdedToCartToken);
        PubSub.unsubscribe(this.itemDeletedFromCartToken);
    }

    getCartItems = () => {
        if (window.innerWidth >= 1200) {
            this.props.getPreviewCartItems();
        }
    };

    componentDidMount() {
        this.itemAdedToCartToken = PubSub.subscribe(constants.EVENTS.SHOPPING_CART_ITEM_ADDED, (msg) => {
            this.getCartItems();
        });

        this.itemDeletedFromCartToken = PubSub.subscribe(constants.EVENTS.SHOPPING_CART_ITEM_DELETED, (msg) => {
            this.getCartItems();
        });

        this.getCartItems();
    }

    render() {
        const {
            intl,
            cartCount,
            previewCartItems
        } = this.props;

        const activeItems = previewCartItems.filter(item => !item.expired).sort((a, b) => a.id - b.id);
        const langUrl = getLangUrl(intl.locale);
        const total = activeItems.reduce((sum, next) => sum + next.amount, 0);

        return (
            <div onMouseOver={() => this.setState({ showShoppingCartPreview: true })}
                 onMouseLeave={() => this.setState({ showShoppingCartPreview: false })}>
                <div className="btn-group">
                    <a className="smoth-scroll" href={`${langUrl}/cart`}>
                        <i className="icon cart"/>
                        <span className="badge badge-notify cart-count">{cartCount || ''}</span>
                    </a>
                </div>
                {activeItems.length > 0 && (
                    <div
                        className={classNames('top-shopping-cart-preview', { open: this.state.showShoppingCartPreview })}>
                        <div className="table-activity">
                            {activeItems.slice(0, 5).map((item, index) => {
                                return (
                                    <div key={index} className="item">
                                        <div className="photo">
                                            <img
                                                src={`${constants.CLOUDINARY_IMAGE_URL}/w_210/${item.thumbnailKey}.${
                                                    item.thumbnailFormat
                                                }`}
                                                className="bg"
                                            />
                                        </div>
                                        <div className="name">
                                            <a href={`${langUrl}/experience/${item.activityId}-${item.slug}`}
                                               target="_blank"
                                               rel="noopener noreferrer">
                                                {item.activityName}
                                            </a>
                                            <p className="desc">
                                                {this.ticketTypes(item)}
                                            </p>
                                            <p className="price">
                                                <FormatMoney value={item.amount}/>
                                            </p>
                                        </div>
                                        <div className="edit-delete">
                                            <i className="icon fal fa-times"
                                               onClick={() => this.onDeleteCart(item.id)}/>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="cart-bottom">
                                {(activeItems.length - 5) > 0 && (
                                    <div className="view-all" onClick={this.onCheckout}>
                                        <FormattedMessage id="common.view.all"/>
                                    </div>
                                )}
                                <div className="cart-total">
                                    <FormattedMessage id="common.cart.total"/>:&nbsp;
                                    <FormatMoney value={total}/>
                                </div>
                                <div className="cart-btn">
                                    <button className="btn btn-xs" onClick={this.onCheckout}>
                                        <FormattedMessage id="common.view.cart"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        previewCartItems: state.cart.previewCartItems,
        cartCount: state.cart.cartCount
    };
};

export default connect(mapStateToProps, {
    getPreviewCartItems, deletePreviewCart
})(injectIntl(ShoppingCartPreviewContainer));
