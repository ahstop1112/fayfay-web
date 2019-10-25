import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityRating from '../../components/activity/ActivityRating';
import Constants from 'fayfayConstants';
import { formatDate } from '../../utils/helpers';
import { FormattedMessage } from 'react-intl';
import Gallery from '../../components/Gallery';

export default class ActivityReviewItem extends Component {
    static propTypes = {
        review: PropTypes.object.isRequired
    };

    state = {
        showAll: false,
        drawerIsOpen: true,
        lightboxIsOpen: true
    }

    toggleShowReview = () => {
        this.setState({
            showAll: !this.state.showAll
        })
    }

    render() {
        const { review} = this.props;
        let reviewImages = [];

        if (review.medias){
            reviewImages = review.medias.map((file) => {
                return {
                    src: `${Constants.CLOUDINARY_IMAGE_URL}/w_1000/${file.key}.${file.format}`,
                    thumbnail: `${Constants.CLOUDINARY_IMAGE_URL}/w_320/${file.key}.${file.format}`,
                }
            });
        }

    return (
                    <div className="reviews">
                        <div className="user-photo">
                            <div className="img-container">
                                {review.profileImage && (
                                    <img
                                        src={`${Constants.CLOUDINARY_IMAGE_URL}/w_320/${
                                    review.profileImage.key
                                    }.${review.profileImage.format}`}
                            />
                        )}
                        {!review.profileImage && (
                            <img src="/images/avatar-sign.jpg"/>
                        )}
                    </div>
                    <div className="user-name">
                        {review.reviewer}
                    </div>
                </div>
                <div className="user-comment">
                    <div className="header">
                        <ActivityRating ratingNumber={review.rating}/>
                        <div className="comment-date">
                            {formatDate(review.createdDate, 'DD/MM/YYYY')}
                        </div>
                    </div>
                    <div className="content">
                        <p className="showAll">
                            {review.content.length > Constants.MAXIMUM_LENGTH_OF_REVIEW && (!this.state.showAll ? review.content.substring(0, Constants.MAXIMUM_LENGTH_OF_REVIEW) + '...' : review.content)}
                            {review.content.length <= Constants.MAXIMUM_LENGTH_OF_REVIEW && review.content}
                        </p>
                        {review.content.length > Constants.MAXIMUM_LENGTH_OF_REVIEW && <p className="marginTop-20px">
                            <a className="showMore" onClick={this.toggleShowReview}>
                                {this.state.showAll ? <FormattedMessage id="common.showLess"/> :
                                    <FormattedMessage id="common.showAll"/>}
                            </a>
                        </p>}
                        {
                            review.medias &&
                            <div className="div-photos">
                                <ul className="review-photos-bg">
                                    <Gallery
                                        images={reviewImages}
                                    />
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
