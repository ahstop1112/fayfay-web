import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { FormattedMessage } from 'react-intl';

export default class ActivityWishList extends Component {
    static propTypes = {
        isMobileView: PropTypes.bool,
        changeWishList: PropTypes.func.isRequired,
        wishListId: PropTypes.number
    };

    static defaultProps = {
        wishListId: null,
        isMobileView: false
    }

    render() {
        const { isMobileView, wishListId, changeWishList } = this.props;
        return (
            <span className={classNames('add-to-wish-list', { 'visible-sm visible-xs': isMobileView })}
                  onClick={changeWishList}>
                <i
                    className={classNames('fa-heart', {
                        'far': !wishListId,
                        'fas': wishListId
                    })}
                />{' '}
                {wishListId ? (
                    <span className="hidden-sm hidden-xs">
                        <FormattedMessage id="activity.removeWishList"/>
                    </span>
                ) : (
                    <span className="hidden-sm hidden-xs">
                        <FormattedMessage id="activity.addToWishList"/>
                    </span>
                )}</span>
        );
    }
}
