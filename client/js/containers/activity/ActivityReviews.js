import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ActivityRating from '../../components/activity/ActivityRating';
import Pagination from '../../components/activity/Pagination';
import ActivityReviewItem from './ActivityReviewItem';

export default class ActivityReviews extends Component {
    static propTypes = {
        activity: PropTypes.object,
        reviews: PropTypes.array.isRequired,
        totalPage: PropTypes.number.isRequired,
        totalCount: PropTypes.number.isRequired,
        pageIndex: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        fetchReviews: PropTypes.func.isRequired
    };

    state = {
        showedAllReviewIndex: -1
    }

    pageIndexChange = pageIndex => {
        this.props.fetchReviews(this.props.activity.id, pageIndex);
    };

    componentDidMount() {
        this.props.fetchReviews(this.props.activity.id, 1);
    }

    render() {
        const { reviews, totalCount, activity, totalPage, pageIndex, pageSize } = this.props;
        const ratingAverage = activity.ratingAverage.toFixed(1);

        return (
            <div className="whitebox">
                <div className="reviews-header">
                    <h4>
                        <FormattedMessage id="common.reviews" />
                    </h4>
                    <div className="header">
                        <div className="rating-num">{ratingAverage}</div>
                        <div className="rating-container">
                            <ActivityRating ratingNumber={activity.ratingAverage} />
                            <p className="review-count">{totalCount} <FormattedMessage id="common.reviews" /></p>
                        </div>
                    </div>
                </div>
                <div className="reviews-container">
                    {reviews.map((item) => {
                        return (
                            <ActivityReviewItem key={item.id} review={item} />
                        );
                    })}

                    {totalCount > 1 && (
                        <Pagination
                            pageIndex={pageIndex}
                            pageSize={pageSize}
                            totalPage={totalPage}
                            changePageIndex={this.pageIndexChange}
                        />
                    )}
                </div>
            </div>
        );
    }
}
