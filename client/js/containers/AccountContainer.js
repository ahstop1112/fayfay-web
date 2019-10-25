import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyAccountForm from './myAccount/MyAccountForm';
import MySettings from './myAccount/MySettings';
import MyBookings from './myAccount/MyBookings';
import MyWishList from './myAccount/MyWishList';
import MyReviews from './myAccount/MyReviews';
import MyReviewForm from './myAccount/MyReviewForm';
import MyCoupons from './myAccount/MyCoupons';
import PropTypes from 'prop-types';
import {postFormData} from '../redux/actions/formSubmissionAction';
import {fetchBookings, removeFromWishList, fetchReviews, updateReviews, updateAccount, addCoupon, fetchCoupons} from '../redux/actions/accountActions';

class AccountContainer extends Component {
    static propTypes = {
        details: PropTypes.object.isRequired,
        pageName: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired,
        postFormData: PropTypes.func.isRequired,
        fetchBookings: PropTypes.func.isRequired,
        removeFromWishList: PropTypes.func.isRequired,
        fetchReviews: PropTypes.func.isRequired,
        updateReviews: PropTypes.func.isRequired,
        updateAccount: PropTypes.func.isRequired,
        addCoupon: PropTypes.func.isRequired,
        fetchCoupons: PropTypes.func.isRequired,
        ajaxStatus: PropTypes.object.isRequired
    };

    render() {
        const {
            ajaxStatus, details, pageName, data: {titles, countries, passports, languages, currencies, expiryTime, reviewKey},
            postFormData, fetchBookings, fetchReviews, removeFromWishList, updateReviews, updateAccount, addCoupon, fetchCoupons
        } = this.props;

        switch (pageName) {
            case 'account':
                return <MyAccountForm data={details} titles={titles} expiryTime={expiryTime} countries={countries} passports={passports}
                                      updateAccount={updateAccount} ajaxStatus={ajaxStatus}/>;
            case 'bookings':
                return <MyBookings bookings={details} fetchBookings={fetchBookings} ajaxStatus={ajaxStatus}/>;

            case 'wish-list':
                return <MyWishList wishes={details} ajaxStatus={ajaxStatus} removeFromWishList={removeFromWishList}/>;

            case 'coupons':
                return <MyCoupons coupons={details} ajaxStatus={ajaxStatus} addCoupon={addCoupon} fetchCoupons={fetchCoupons}/>;

            case 'review-form':
                return <MyReviewForm data={details} ajaxStatus={ajaxStatus} updateReviews={updateReviews} reviewKey={reviewKey}/>;

            case 'reviews':
                return <MyReviews reviews={details} ajaxStatus={ajaxStatus} fetchReviews={fetchReviews}/>;

            case 'settings':
                return <MySettings details={details} languages={languages} currencies={currencies}
                                   postFormData={postFormData} ajaxStatus={ajaxStatus}/>;
        }
    }


}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus,
        details: state.account.details,
        pageName: state.account.pageName
    };
};

export default connect(mapStateToProps,
    {postFormData, fetchBookings, removeFromWishList, fetchReviews, updateReviews, updateAccount, addCoupon, fetchCoupons}
)(AccountContainer);
