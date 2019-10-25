import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Constants from "fayfayConstants";
import LoadingContainer from "../../components/loading/LoadingContainer";
import { Field, FieldArray, reduxForm } from 'redux-form';
import Rating from 'react-rating';
import { maxLenChk, minLenChk, requiredChk } from "../../utils/validators";
import InputField from "../../components/inputs/InputField";
import { connect } from "react-redux";
import { formatDate, getLangUrl } from '../../utils/helpers';
import ReviewUploadImage from './ReviewUploadImage';
import ActivityRating from '../../components/activity/ActivityRating';

class MyReviewForm extends Component {

    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        updateReviews: PropTypes.func.isRequired,
        initialize: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        change: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        formData: PropTypes.object,
        reviewKey: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            isRatingValid: true
        };
    }

    minLenChk10 = minLenChk(10);
    maxLenChk200 = maxLenChk(200);

    submitHandler = (values) => {
        this.setState({
            isRatingValid: values.rating > 0
        });

        if (!values.rating) {
            return;
        }

        const { data, updateReviews, reviewKey } = this.props;
        const formData = {
            ...values,
            "orderId": data.id,
            "orderItemId": data.items[0].id,
            "activityId": data.items[0].activityId
        };

        if (reviewKey) {
            updateReviews(`/public-reviews?k=${reviewKey}`, formData)
        } else {
            updateReviews('/api/reviews', formData)
        }
    };

    onRatingChange = (rate) => {
        const { change, dispatch } = this.props;
        dispatch(change('rating', rate));
    };

    componentDidMount() {
        const { data } = this.props;
        this.props.initialize({ "displayName": `${data.firstName} ${data.lastName}` })
    }

    render() {
        const { data, ajaxStatus, handleSubmit, formData, reviewKey, intl } = this.props;
        const langUrl = getLangUrl(intl.locale);

        const item = data.items[0];
        const url = `${langUrl}/experience/${item.activityId}-${item.activitySlug}`;
        let tickets = '';
        item.items.forEach(ticket => {
            tickets += `, ${ticket.ticketTypeName} x ${ticket.quantity}`;
        });
        const currRating = formData ? formData.rating : 0;

        return (
            <LoadingContainer loading={ajaxStatus.isLoading}>
                <div className="greyborderbox" id="my-review">
                    <h4><FormattedMessage id="review"/></h4>
                    <div>
                        <div className="col-md-4 col-sm-4 col-xs-12 whitebox-banner">
                            <a href={url}>
                                <div className="banner">
                                    <img
                                        src={`${Constants.CLOUDINARY_IMAGE_URL}/${item.thumbnailKey}.${item.thumbnailFormat}`}
                                        className="bg"/>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-12 whitebox-content">
                            <div className="name">
                                <a href={url}><h5>{item.activityName}</h5></a>
                                <p className="desc">{tickets.substr(2)}</p>
                                <hr/>
                                <b><FormattedMessage id="account.booking.number"/> : </b>
                                <span className="content">{data.id}</span>

                                <br className="br-mobile-h"/>
                                <b><FormattedMessage id="account.booking.date"/> : </b>
                                <span
                                    className="content">{formatDate(data.createdDate, 'DD/MM/YYYY HH:mm')}</span>

                                <br className="br-mobile-h"/>
                                <b><FormattedMessage id="common.activity.date"/> : </b>
                                <span
                                    className="content">{formatDate(item.packageAvailabilityDate, 'DD/MM/YYYY')} {item.packageAvailabilityTime}</span>
                            </div>
                        </div>
                    </div>
                    {
                        item.review && (
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 whitebox-content">
                                    <div className="bg-light-grey">
                                        <h5><FormattedMessage id="common.displayName"/></h5>
                                        <div className="marginBottom-20px fayfay-rating">
                                            {data.firstName} {data.lastName}
                                        </div>
                                        <h5><FormattedMessage id="review.activity.rating"/></h5>
                                        <div className="marginBottom-20px fayfay-rating">
                                            <ActivityRating ratingNumber={item.review.rating}/>
                                        </div>
                                        <h5>
                                            <FormattedMessage id="review.activity.review"/>
                                        </h5>
                                        <span>{item.review.content}</span>
                                        {
                                            item.review.medias &&
                                            <div className="div-photos">
                                                <ul className="review-photos-bg">
                                                    {item.review.medias.map((file, idx) => {
                                                        return (<li key={idx}>
                                                            <div className="review-photo">
                                                                <img
                                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/${file.key}.${file.format}`}
                                                                    className="user-photo-img"/>
                                                            </div>
                                                        </li>)
                                                    })
                                                    }

                                                </ul>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        !item.review && (
                            <div className="row">
                                <form onSubmit={handleSubmit(this.submitHandler)}>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="bg-light-grey">
                                            <p><FormattedMessage id="review.activity.experience.desc"/></p>
                                            <hr/>
                                            <Field
                                                validate={[requiredChk, this.maxLenChk200]}
                                                name="displayName"
                                                type="text"
                                                component={InputField}
                                                className="marginTop-10px input-field input-s"
                                                required={true}
                                                maxLength={200}
                                                divClassName="display-name"
                                                requiredPosition="left"
                                                label={<FormattedMessage id="common.displayName"/>}
                                            />
                                            <h5><span>*</span> <FormattedMessage id="review.activity.rating"/></h5>
                                            <div className="marginBottom-20px fayfay-rating">
                                                <Rating
                                                    initialRating={currRating}
                                                    emptySymbol={<img src="/images/rate_icon2.png"
                                                                      className="icon opacity-3"/>}
                                                    fullSymbol={<img src="/images/rate_icon2.png" className="icon"/>}
                                                    onChange={this.onRatingChange}
                                                />
                                                {!this.state.isRatingValid &&
                                                <div className="error err-rating"><FormattedMessage
                                                    id='account.review.rating.required'/></div>}
                                            </div>
                                            <h5><span>* </span>
                                                <FormattedMessage id="review.activity.review"/>
                                                <b> <FormattedMessage id="review.activity.textarea.desc"/> </b>
                                            </h5>
                                            <Field
                                                validate={[requiredChk, this.minLenChk10]}
                                                name="content"
                                                type="textarea"
                                                component={InputField}
                                                label=""
                                                row={3}
                                            />

                                            <h5><FormattedMessage id="review.upload.photos"/></h5>
                                            <p className="desc marginBottom-20px">
                                                <FormattedMessage id="review.you.can.upload"/>
                                            </p>
                                            <FieldArray name="medias"
                                                        max={6}
                                                        change={this.props.change}
                                                        dispatch={this.props.dispatch}
                                                        reviewKeyData={
                                                            reviewKey ?
                                                                {
                                                                    orderId: data.id,
                                                                    orderItemId: item.id,
                                                                    activityId: item.activityId,
                                                                    key: reviewKey
                                                                }
                                                                : {}
                                                        }
                                                        component={ReviewUploadImage}
                                                        label=""/>
                                        </div>
                                        <div className="marginTop-20px marginBottom-20px">
                                            <button className="btn btn-lg orange marginRight-15px">
                                                <FormattedMessage id="review.leave.review"/>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </div>
            </LoadingContainer>
        )
    }
}

MyReviewForm = reduxForm({
    form: 'MyReviewForm',
})(MyReviewForm);

MyReviewForm = connect(
    state => ({
        formData: state.form.MyReviewForm && state.form.MyReviewForm.values
    })
)(MyReviewForm);

export default injectIntl(MyReviewForm);
