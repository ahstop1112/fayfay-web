import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'react-intl';
import InputField from '../../components/inputs/InputField';
import { requiredChk, trim } from '../../utils/validators';
import Button from "../../components/inputs/Button";
import { formatDate } from '../../utils/helpers';
import LoadingContainer from "../../components/loading/LoadingContainer";

class MyCoupons extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        coupons: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        addCoupon: PropTypes.func.isRequired,
        fetchCoupons: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        form: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            live: true,
            out: false
        }
    }

    componentDidUpdate() {
        const { fetchCoupons, ajaxStatus } = this.props;
        if (ajaxStatus.isSubmitSuccess && !ajaxStatus.serverMessage) {
            fetchCoupons()
        }
    }

    addCoupon = (values) => {
        const { addCoupon, form } = this.props;
        addCoupon(values.code, form);
    };

    render() {
        const { coupons, ajaxStatus, intl, handleSubmit, form } = this.props;

        const usedCoupons = [], expiredCoupons = [], invalidCoupons = [],  applicable =[];
        if (coupons.data.length) {
            coupons.data.forEach(it => {
                if (it.numOfUsed > 0 && it.maximumRedemptionCountPerUser === it.numOfUsed) {
                    usedCoupons.push(it);
                }
                else {
                    if (it.expired){
                        expiredCoupons.push(it);
                    }
                    else {
                        if (it.statusId > 1){
                            invalidCoupons.push(it);
                        }
                        else {
                            applicable.push(it);
                        }
                    }
                }
            });
        }

        const notApplicable = [...usedCoupons, ...expiredCoupons, ...invalidCoupons];

        return (
            <div className="greyborderbox">
                <h4>
                    <FormattedMessage id="account.coupons"/>
                </h4>
                <p><FormattedMessage id="account.coupon.desc"/></p>
                <form onSubmit={handleSubmit(this.addCoupon)}>
                    {
                        ajaxStatus.sendForm === form && ajaxStatus.serverMessage &&
                        <div className="alert alert-danger"><FormattedMessage id={ajaxStatus.serverMessage}/></div>
                    }
                    <div className="coupon-redeem-box">
                        <div className="coupon-code-field">
                            <Field label="" validate={[requiredChk]} type="text" name="code"
                                   component={InputField}
                                   normalize={trim}
                                   placeholder={intl.formatMessage({ id: 'account.coupon.enterYourCode' })}/>
                        </div>
                        <div className="redeem-btn">
                            <Button
                                type="submit"
                                className="btn btn-lg"
                                submitting={ajaxStatus.sendForm === form && ajaxStatus.isSubmitting}
                            >
                                <FormattedMessage id="account.coupon.redeem"/>
                            </Button>
                        </div>
                    </div>
                </form>

                <LoadingContainer loading={ajaxStatus.isLoading}>
                    <div className="coupons-list">
                        <div className="coupons-list-title">
                            <ul className="clt-ul">
                                <li className={`applicable ${this.state.live ? 'active' : ''}`} onClick={() => {
                                    if (applicable.length) {
                                        this.setState({ live: true, out: false })
                                    }
                                }
                                }>
                                    <span>
                                        <FormattedMessage id="account.coupon.applicable"/> ({applicable.length})
                                    </span>
                                </li>
                                <li className={`not-applicable ${this.state.out ? 'active' : ''}`} onClick={() => {
                                    if (notApplicable.length) {
                                        this.setState({ live: false, out: true })
                                    }
                                }
                                }>
                                    <span>
                                        <FormattedMessage id="account.coupon.applicableNot"/> ({notApplicable.length})
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <hr/>
                        {
                            this.state.live && (
                                <div className="coupons-list-content">
                                    <ul className="clc-ul">
                                        {
                                            applicable.map((c, index) => {
                                                return (
                                                    <li key={`applicable-${c.id}`} className="coupon-item">
                                                        <ul className="ci-left-70">
                                                            <li className="ci-promo">{c.title}</li>
                                                            <li className="ci-title">{c.description}</li>
                                                        </ul>
                                                        <ul className="ci-right-30">
                                                            <li className="ci-code">{c.code}</li>
                                                            <li className="ci-expires"><FormattedMessage
                                                                id="payment.coupon.expired"/>&nbsp;
                                                                {c.forever ? intl.formatMessage({ id: "account.coupon.noLimitTime" }) : formatDate(c.endDate, 'DD/MM/YYYY HH:mm')}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        {
                            this.state.out && (
                                <div className="coupons-list-content">
                                    <ul className="clc-ul">
                                        {
                                            usedCoupons.map((c, index) => {
                                                return (
                                                    <li key={`used-${c.id}`} className="coupon-item">
                                                        <ul className="ci-left-70">
                                                            <li className="ci-promo-out">{c.title}</li>
                                                            <li className="ci-title">{c.description}</li>
                                                        </ul>
                                                        <ul className="invalid used-coupon"><li><FormattedMessage id="account.used"/></li></ul>
                                                        <ul className="ci-right-30">
                                                            <li className="ci-code">{c.code}</li>
                                                            <li className="ci-expires"><FormattedMessage
                                                                id="payment.coupon.expired"/>&nbsp;
                                                                {c.forever ? intl.formatMessage({ id: "account.coupon.noLimitTime" }) : formatDate(c.endDate, 'DD/MM/YYYY HH:mm')}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                )
                                            })
                                        }
                                        {
                                            expiredCoupons.map((c, index) => {
                                                return (
                                                    <li key={`expired-${c.id}`} className="coupon-item">
                                                        <ul className="ci-left-70">
                                                            <li className="ci-promo-out">{c.title}</li>
                                                            <li className="ci-title">{c.description}</li>
                                                        </ul>
                                                        <ul className="invalid expired-coupon"><li><FormattedMessage id="account.expired"/></li></ul>
                                                        <ul className="ci-right-30">
                                                            <li className="ci-code">{c.code}</li>
                                                            <li className="ci-expires"><FormattedMessage
                                                                id="payment.coupon.expired"/>&nbsp;
                                                                {c.forever ? intl.formatMessage({ id: "account.coupon.noLimitTime" }) : formatDate(c.endDate, 'DD/MM/YYYY HH:mm')}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                )
                                            })
                                        }
                                        {
                                            invalidCoupons.map((c, index) => {
                                                return (
                                                    <li key={`invalid-${c.id}`} className="coupon-item">
                                                        <ul className="ci-left-70">
                                                            <li className="ci-promo-out">{c.title}</li>
                                                            <li className="ci-title">{c.description}</li>
                                                        </ul>
                                                        <ul className="invalid invalid-coupon"><li><FormattedMessage id="account.invalid"/></li></ul>
                                                        <ul className="ci-right-30">
                                                            <li className="ci-code">{c.code}</li>
                                                            <li className="ci-expires"><FormattedMessage
                                                                id="payment.coupon.expired"/>&nbsp;
                                                                {c.forever ? intl.formatMessage({ id: "account.coupon.noLimitTime" }) : formatDate(c.endDate, 'DD/MM/YYYY HH:mm')}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                </LoadingContainer>
            </div>

        )
    }
}

export default reduxForm({
    form: 'CouponRedeemForm',
})(injectIntl(MyCoupons));
