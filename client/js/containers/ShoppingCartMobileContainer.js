import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import constants from 'fayfayConstants';
import PubSub from 'pubsub-js';
import { connect } from 'react-redux';
import { getPreviewCartItems } from '../redux/actions/cartActions';
import PropTypes from 'prop-types';

class ShoppingCartMobileContainer extends Component {

    static propTypes = {
        intl: PropTypes.object.isRequired,
        getPreviewCartItems: PropTypes.func.isRequired,
        cartCount: PropTypes.number
    };

    static defaultProps = {
        cartCount: 0
    };

    componentWillUnmount() {
        PubSub.unsubscribe(this.mobileAdedToCartToken);
    }

    getCartItems = () => {
        if (window.innerWidth < 1200) {
            this.props.getPreviewCartItems();
        }
    };

    componentDidMount() {
        this.mobileAdedToCartToken = PubSub.subscribe(constants.EVENTS.SHOPPING_CART_ITEM_ADDED, (msg) => {
            this.getCartItems();
        });

        this.getCartItems();
    }

    render() {
        const { intl, cartCount } = this.props;
        const langUrl = intl.locale || 'en-us';

        return (
            <a href={`/${langUrl}/cart`}>
                <i className="icon cart"/>
                <span className="badge badge-notify cart-count">{cartCount || ''}</span>
            </a>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartCount: state.cart.cartCount
    };
};

export default connect(mapStateToProps, {
    getPreviewCartItems
})(injectIntl(ShoppingCartMobileContainer));
