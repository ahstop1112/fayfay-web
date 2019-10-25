import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ActivityPreview from '../../components/activity/ActivityPreview';
import Constants from 'fayfayConstants';

export default class RelatedActivities extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    };

    render() {
        const { list } = this.props;
        return (
            <section className="related-activities-section">
                <div className="container-fluid">
                    <div className="main-logo-container">
                        <div className="main-logo">
                            <img src="/images/icons/recommend.png"/>
                        </div>
                        <h2><FormattedMessage id="activity.relatedExperiences"/></h2>
                    </div>
                </div>
                <div className=" container-fluid">
                    <div className=" drag-content">
                        <ul className=" drag-list recommend-list related-experiences-slider">
                            {list.map((item, index) => {
                                return (
                                    <ActivityPreview
                                        packageAvailabilityDate={item.packageAvailabilityDate}
                                        index={index}
                                        key={item.id}
                                        id={item.id}
                                        slug={item.slug}
                                        title={item.title}
                                        thumbnail={`${
                                            Constants.CLOUDINARY_IMAGE_URL
                                            }/w_640/${item.thumbnailKey}.${item.thumbnailFormat}`}
                                        displayPrice={item.displayPrice}
                                        displaySpecialPrice={item.displaySpecialPrice}
                                        location={item.location}
                                        ratingAverage={item.ratingAverage}
                                        bookedCount={item.bookedCount}
                                        priceRange={item.priceRange}
                                        popular={item.popular}
                                        paymentFlow={item.paymentFlow}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

        );
    }
}
