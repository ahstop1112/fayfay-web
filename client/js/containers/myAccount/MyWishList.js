import React, { Component } from 'react';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Constants from "fayfayConstants";
import LoadingContainer from "../../components/loading/LoadingContainer";
import Price from '../../components/pricing/Price';
import { getLangUrl } from "../../utils/helpers";

class MyWishList extends Component {

    static propTypes = {
        intl: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        wishes: PropTypes.object.isRequired,
        removeFromWishList: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired
    };

    removeFromWishList = (e) => {
        const id = e.target.getAttribute('data-id');
        this.props.removeFromWishList(id);
    };

    render() {
        const { wishes, ajaxStatus, intl } = this.props;
        const langUrl = getLangUrl(intl.locale);

        return (
            <React.Fragment>
                <LoadingContainer loading={ajaxStatus.isLoading}>
                    <div className="greyborderbox">

                        <h4><FormattedMessage id="account.wish.list"/></h4>
                        <div className="result-container">
                            <ul className="loaded-list">
                                {
                                    (!wishes.data || wishes.data.length === 0) &&
                                    <div className="no-data-match"><FormattedHTMLMessage id="account.noWishes"/>
                                    </div>
                                }

                                {
                                    wishes.data && wishes.data.map((wish, idx) => {
                                        return (
                                            <li key={idx} className="list-item" title={wish.title}>
                                                <div className="list-content">
                                                    <div className="banner">
                                                        <i className="wish-rm-sign far fa-times"
                                                           data-id={wish.activityId}
                                                           onClick={this.removeFromWishList}/>
                                                        <img
                                                            src={`${Constants.CLOUDINARY_IMAGE_URL}/${wish.thumbnailKey}.${wish.thumbnailFormat}`}
                                                            alt={wish.title} className="bg"/>
                                                    </div>
                                                    <div className="content">
                                                        <a href={`${langUrl}/experience/${wish.activityId}-${wish.slug}`}>
                                                            <h3>{wish.title}</h3>
                                                        </a>
                                                    </div>
                                                    <Price price={wish.displayPrice}
                                                           specialPrice={wish.displaySpecialPrice}/>
                                                    <div className="bottom">
                                                        <ul className="location">
                                                            <li>
                                                                <i className="icon bold-800 map-marker-alt"></i>
                                                                {wish.location}
                                                            </li>
                                                        </ul>
                                                        <ul className={`rating num-${parseInt(wish.ratingAverage)}`}>
                                                            <li className="star"></li>
                                                            <li className="star"></li>
                                                            <li className="star"></li>
                                                            <li className="star"></li>
                                                            <li className="star"></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </LoadingContainer>
            </React.Fragment>
        )
    }
}

export default injectIntl(MyWishList);
