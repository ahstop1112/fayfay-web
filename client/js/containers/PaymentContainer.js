import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    cartCheckout,
    fetchCartInfo,
    fetchCoupons,
    onePayCheckout,
    paypalCheckOut,
    redeemCoupon,
    resetAjaxStatus,
    selectCoupon
} from '../redux/actions/paymentActions';
import PaymentForm from './payment/PaymentForm';
import PaymentActivitiesPreview from './payment/PaymentActivitiesPreview';
import { injectIntl, FormattedMessage } from 'react-intl';
import Modal from '../components/Modal';
import ModalDialog from 'react-bootstrap/lib/Modal';
import CircleSpinner from '../components/loading/CircleSpinner';

class PaymentContainer extends Component {
    static propTypes = {
        data: PropTypes.object,
        cartItems: PropTypes.array.isRequired,
        payment: PropTypes.object.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        coupons: PropTypes.array.isRequired,
        cartCheckout: PropTypes.func.isRequired,
        onePayCheckout: PropTypes.func.isRequired,
        paypalCheckOut: PropTypes.func.isRequired,
        redeemCoupon: PropTypes.func.isRequired,
        fetchCartInfo: PropTypes.func.isRequired,
        resetAjaxStatus: PropTypes.func.isRequired,
        selectedCoupon: PropTypes.object.isRequired,
        selectedCouponId: PropTypes.number.isRequired,
        selectCoupon: PropTypes.func.isRequired,
        fetchCoupons: PropTypes.func.isRequired,
        paymentForm: PropTypes.object,
        intl: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            paymentType: 'ONEPAY'
        }
    }

    buttonClicked = () => {
        window.location.replace('/');
    };

    paymentTypeChanged = (type) => {
        this.setState({
                paymentType: type
            }, () => this.props.fetchCartInfo(this.props.data.cartId, type === 'DOMESTIC' ? 'ONEPAY' : type, this.props.selectedCouponId)
        );
    }

    componentDidMount() {
        this.setState({
            client: true
        })
    }

    render() {
        const {
            data,
            coupons,
            ajaxStatus,
            selectedCoupon,
            selectedCouponId,
            fetchCartInfo,
            cartCheckout,
            paypalCheckOut,
            onePayCheckout,
            redeemCoupon,
            selectCoupon,
            resetAjaxStatus,
            fetchCoupons,
            paymentForm,
            intl
        } = this.props;

        const cartItems = this.props.cartItems.length > 0 ? this.props.cartItems : data.cartItems;
        const payment = this.props.cartItems.length > 0 ? this.props.payment : data.payment;

        return (
            <div className="row">
                {cartItems.length > 0 && this.state.client && (<React.Fragment>
                        <div className="col-lg-9 col-md-8">
                            <PaymentForm
                                cartItems={cartItems}
                                countries={data.countries}
                                titles={data.titles}
                                instantMessengers={data.instantMessengers}
                                genders={data.genders}
                                nationalities={data.nationalities}
                                coupons={coupons}
                                selectedCoupon={selectedCoupon}
                                selectedCouponId={selectedCouponId}
                                fetchCartInfo={fetchCartInfo}
                                cartCheckout={cartCheckout}
                                paypalCheckOut={paypalCheckOut}
                                onePayCheckOut={onePayCheckout}
                                redeemCoupon={redeemCoupon}
                                selectCoupon={selectCoupon}
                                ajaxStatus={ajaxStatus}
                                resetAjaxStatus={resetAjaxStatus}
                                payNowCartId={data.cartId}
                                fetchCoupons={fetchCoupons}
                                userInfo={data.userInfo}
                                payment={payment}
                                paymentForm={paymentForm}
                                paymentType={this.state.paymentType}
                                paymentTypeChanged={this.paymentTypeChanged}
                                lang={data.lang}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <PaymentActivitiesPreview
                                cartItems={cartItems}
                                payment={payment}
                                selectedCoupon={selectedCoupon}
                                selectedCouponId={selectedCouponId}
                            />
                        </div>
                    </React.Fragment>
                )}

                <Modal
                    show={!cartItems.length}
                    title={intl.formatMessage({ id: "payment.notice" })}
                    body={intl.formatMessage({ id: "payment.cartEmpty" })}>
                    <button type="button" className="btn btn-s" onClick={this.buttonClicked}>
                        <FormattedMessage id="common.ok"/>
                    </button>
                </Modal>
                <ModalDialog show={ajaxStatus.isSubmitting || ajaxStatus.isLoading} bsSize='small'
                             className="checkout-modal">
                    <ModalDialog.Body>
                        <CircleSpinner/>
                        <div><FormattedMessage id="checkout.pleaseWait"/></div>
                    </ModalDialog.Body>
                </ModalDialog>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ajaxStatus: state.ajaxStatus,
        coupons: state.checkout.coupons,
        selectedCoupon: state.checkout.selectedCoupon,
        selectedCouponId: state.checkout.selectedCouponId,
        cartItems: state.checkout.cartItems,
        payment: state.checkout.payment,
        paymentForm: state.form.paymentForm
    };
};

export default connect(
    mapStateToProps,
    {
        cartCheckout,
        paypalCheckOut,
        onePayCheckout,
        redeemCoupon,
        fetchCartInfo,
        resetAjaxStatus,
        selectCoupon,
        fetchCoupons
    }
)(injectIntl(PaymentContainer));
