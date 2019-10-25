import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import ActivityRating from '../../components/activity/ActivityRating';
import { formatDate } from '../../utils/helpers';
import Constants from 'fayfayConstants';

export default class ActivityRecentReview extends Component {
    static propTypes = {
        activity: PropTypes.object.isRequired
    };

    render() {
        const { activity } = this.props;
        return (
            <div>
                {activity.latestReview && (
                    <React.Fragment>
                        <h4>
                            <FormattedMessage id="package.most.recent.views" />
                        </h4>
                        <div className="recent-views-container">
                            <div className="recent-view">
                                <div className="user-photo">
                                    <div className="img-container">
                                        {activity.latestReview.profileImage && (
                                            <img
                                                src={`${Constants.CLOUDINARY_IMAGE_URL}/${
                                                    activity.latestReview.profileImage.key
                                                }.${activity.latestReview.profileImage.format}`}
                                            />
                                        )}
                                        {!activity.latestReview.profileImage && <img src="/images/avatar-sign.jpg" />}
                                    </div>
                                    <div className="user-name">
                                        {activity.latestReview.reviewer}
                                    </div>
                                </div>
                                <div className="user-comment">
                                    <div className="header">
                                        <ActivityRating ratingNumber={activity.latestReview.rating} />
                                        <div className="comment-date">
                                            {formatDate(activity.latestReview.createdDate, 'DD/MM/YYYY')}
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>{activity.latestReview.content}</p>
                                        <p className="marginTop-20px">
                                            <a id="showReviewsBtn" href="#reviews" className="hidden-xs">
                                                <FormattedMessage id="package.view.all.reviews" />
                                            </a>
                                        </p>
                                    </div>
                                    <div className="mobile-view-all-link visible-xs">
                                        <a href="#reviews" className="visible-xs">
                                            <FormattedMessage id="package.view.all.reviews" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}
