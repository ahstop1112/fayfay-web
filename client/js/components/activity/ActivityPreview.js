import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Price from '../pricing/Price';
import ActivityRating from './ActivityRating';
import { injectIntl } from 'react-intl';
import { getLangUrl } from "../../utils/helpers";
import Constants from 'fayfayConstants';

class ActivityPreview extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        className: PropTypes.string,
        displayPrice: PropTypes.number.isRequired,
        displaySpecialPrice: PropTypes.number,
        location: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ratingAverage: PropTypes.number.isRequired,
        bookedCount: PropTypes.number.isRequired,
        popular: PropTypes.bool,
        intl: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        priceRange: PropTypes.string,
        packageAvailabilityDate: PropTypes.string,
        paymentFlow: PropTypes.string
    };

    static defaultProps = {
        className: '',
        displaySpecialPrice: 0,
        packageAvailabilityDate: '',
        paymentFlow: ''
    };

    render() {
        const { index, id, slug, thumbnail, displayPrice, displaySpecialPrice, packageAvailabilityDate, location, title, ratingAverage, priceRange, popular, intl, bookedCount, paymentFlow } = this.props;

        const langUrl = getLangUrl(intl.locale);

        return (
            <li className={`list-item ap-${index}`}>
                <a href={`${langUrl}/experience/${id}-${slug}`} title={title} rel="noreferrer noopener" target="_blank">
                    <div className="list-content">
                        {!packageAvailabilityDate && paymentFlow === Constants.PAYMENT_FLOW.NORMAL && (
                            <div className="overlay-soldout">
                                <div className="banner">
                                    {(intl.locale === 'zh-hk' || intl.locale === 'zh-cn') && (
                                        <img src="/images/sold_tc.png" className="soldout"/>)}
                                    {(intl.locale !== 'zh-hk' && intl.locale !== 'zh-cn') && (
                                        <img src="/images/sold_en.png" className="soldout"/>)}
                                </div>
                            </div>
                        )}
                        <div className="badge-container">
                            {priceRange && (
                                <div className={`priceRange-icon ${priceRange}`}>
                                    <div className="priceRange-type-img"/>
                                    <div
                                        className="priceRange-type-text">{intl.formatMessage({ id: `common.${priceRange}` })}</div>
                                </div>
                            )}
                            {popular && (
                                <div className="popular-icon">
                                    <div className="popular-type-img"/>
                                    <div
                                        className="popular-type-text">{intl.formatMessage({ id: 'common.popular' })}</div>
                                </div>
                            )}
                        </div>
                        <div className="banner">
                            <img src={thumbnail} alt={title} className="bg"/>
                        </div>
                        <div className="content">
                            <h3>{title}</h3>
                        </div>
                        <Price price={displayPrice} specialPrice={displaySpecialPrice}/>
                        <div className="bottom">
                            <ul className="location">
                                <li>
                                    <i className="icon bold-800 map-marker-alt"></i>{location}
                                </li>
                            </ul>
                            <ActivityRating ratingNumber={ratingAverage}/>
                            <ul className="booked">
                                <li>{intl.formatMessage({ id: 'search.bookedCount' }, { count: bookedCount.toLocaleString('en-us') })}</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}

export default injectIntl(ActivityPreview);
