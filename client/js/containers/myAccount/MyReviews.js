import React, { Component } from 'react';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Constants from "fayfayConstants";
import LoadingContainer from "../../components/loading/LoadingContainer";
import { formatDate, getLangUrl } from "../../utils/helpers";
import ActivityRating from "../../components/activity/ActivityRating";
import Pagination from '../../components/activity/Pagination';

class MyReviews extends Component {

    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        reviews: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        fetchReviews: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,
            pageIndex: 0
        };
    }

    changPageSize = e => {
        this.onChangePageSize(Number(e.target.value));
    };

    onChangePageSize = pageSize => {
        this.setState({
            pageSize
        });
        const query = `?index=${this.state.pageIndex}&size=${pageSize}`;
        this.props.fetchReviews(query);
    };

    onChangePageIndex = pageIndex => {
        if (pageIndex !== this.state.pageSize) {
            this.setState({
                pageIndex
            });
            const query = `?index=${pageIndex}&size=${this.state.pageSize}`;
            this.props.fetchReviews(query);
        }
    };

    render() {
        const { reviews, ajaxStatus, intl } = this.props;

        const langUrl = getLangUrl(intl.locale);

        const { page } = reviews;

        return (
            <React.Fragment>
                <LoadingContainer loading={ajaxStatus.isLoading}>
                    <div className="greyborderbox" id="my-review">
                        <h4><FormattedMessage id="common.reviews"/></h4>
                        {
                            (!reviews.data || reviews.data.length === 0) &&
                            <div className="no-data-match"><FormattedHTMLMessage id="account.noReviews"/></div>
                        }
                        {
                            reviews.data && reviews.data.map((review, i) => {
                                const url = `${langUrl}/experience/${review.activityId}-${review.activitySlug}`;
                                let tickets = '';
                                if (review.details) {
                                    review.details.forEach(ticket => {
                                        tickets += `, ${ticket.ticketTypeName} x ${ticket.quantity}`;
                                    });
                                }
                                return (
                                    <div className="whitebox" key={i}>
                                        <div className="row ">
                                            <div className="col-md-3 col-sm-3 col-xs-12 whitebox-banner">
                                                <a href={url}>
                                                    <div className="banner">
                                                        <img
                                                            src={`${Constants.CLOUDINARY_IMAGE_URL}/${review.thumbnailKey}.${review.thumbnailFormat}`}
                                                            className="bg"/>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-12 whitebox-content">
                                                <div className="name">
                                                    <a href={url}><h5>{review.activityName}</h5></a>
                                                    <p className="desc">{tickets.substr(2)}</p>
                                                    <b><FormattedMessage id="account.booking.number"/> : </b>
                                                    <span className="content">{review.orderId}</span>

                                                    <br className="br-mobile-h"/>
                                                    <b><FormattedMessage id="account.booking.date"/> : </b>
                                                    <span
                                                        className="content">{formatDate(review.orderCreatedDate, 'DD/MM/YYYY HH:mm')}</span>

                                                    <br className="br-mobile-h"/>
                                                    <b><FormattedMessage id="common.activity.date"/> : </b>
                                                    <span
                                                        className="content">{formatDate(review.packageAvailabilityDate, 'DD/MM/YYYY')} {review.packageAvailabilityTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-12 col-sm-12 col-xs-12 whitebox-content">
                                                <h5><FormattedMessage id="common.displayName"/></h5>
                                                <div className="marginBottom-20px fayfay-rating">
                                                    {review.displayName}
                                                </div>
                                                <h5><FormattedMessage id="review.activity.rating"/></h5>
                                                <div className="marginBottom-20px fayfay-rating">
                                                    <ActivityRating ratingNumber={review.rating}/>
                                                </div>
                                                <h5>
                                                    <FormattedMessage id="review.activity.review"/>
                                                </h5>
                                                <span>{review.content}</span>
                                                {
                                                    review.medias && (
                                                        <div className="div-photos">
                                                            <ul className="review-photos-bg">
                                                                {
                                                                    review.medias && review.medias.map((file, idx) => {
                                                                        return (<li key={idx}>
                                                                            <div className="review-photo">
                                                                                <a href={`${Constants.CLOUDINARY_IMAGE_URL}/${file.key}.${file.format}`}
                                                                                   target="_blank"
                                                                                   rel="noreferrer noopener">
                                                                                    <img
                                                                                        src={`${Constants.CLOUDINARY_IMAGE_URL}/${file.key}.${file.format}`}
                                                                                        className="photo-img"/>
                                                                                </a>
                                                                            </div>
                                                                        </li>)
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {reviews.data && reviews.totalPage > 1 &&
                    <Pagination
                        pageIndex={page.index}
                        pageSize={page.size}
                        totalPage={reviews.totalPage}
                        changePageIndex={this.onChangePageIndex}
                        changePageSize={this.changPageSize}
                    />
                    }
                </LoadingContainer>
            </React.Fragment>
        )
    }
}

export default injectIntl(MyReviews);
