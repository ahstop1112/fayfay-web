import React, { Component } from 'react';
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Constants from 'fayfayConstants';
import LoadingContainer from "../../components/loading/LoadingContainer";
import { formatDate, getLangUrl } from "../../utils/helpers";
import Pagination from '../../components/activity/Pagination';

class MyBookings extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        bookings: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        fetchBookings: PropTypes.func.isRequired
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
        this.props.fetchBookings(query);
    };

    onChangePageIndex = pageIndex => {
        if (pageIndex !== this.state.pageSize) {
            this.setState({
                pageIndex
            });
            const query = `?index=${pageIndex}&size=${this.state.pageSize}`;
            this.props.fetchBookings(query);
        }
    };

    render() {
        const { bookings, ajaxStatus, intl } = this.props;
        const langUrl = getLangUrl(intl.locale);

        const { page } = bookings;

        return (
            <React.Fragment>
                <LoadingContainer loading={ajaxStatus.isLoading}>
                    <div className="greyborderbox">
                        <h4>
                            <FormattedMessage id="account.my.bookings"/>
                        </h4>
                        {
                            (!bookings.data || bookings.data.length === 0) &&
                            <div className="no-data-match"><FormattedHTMLMessage id="account.noBookings"/></div>
                        }
                        {
                            bookings.data &&
                            bookings.data.map(order => {
                                // 2: ORDER_PAID, 5: ORDER_CONFIRMED, 6: ORDER_PARTIAL_COMPLETED, 7: ORDER_COMPLETED, 13: ORDER_UNKNOWN, 14: ORDER_NOT_AVAILABLE
                                const isOrderValid = [Constants.ORDER_STATUS.PAID, Constants.ORDER_STATUS.CONFIRMED, Constants.ORDER_STATUS.PARTIAL_COMPLETED,
                                    Constants.ORDER_STATUS.COMPLETED, Constants.ORDER_STATUS.UNKNOWN, Constants.ORDER_STATUS.NOT_AVAILABLE, Constants.ORDER_STATUS.REFUNDED, Constants.ORDER_STATUS.PARTIAL_REFUNDED].includes(order.statusId);

                                return (
                                    <div key={`order-${order.id}`} className="table-activity booking-order-table">
                                        <div className="bg-light-grey">
                                            <div className="order-date-pay">
                                                <div className="order-date">
                                                    <FormattedMessage id="account.booking.number"/>:
                                                    <span className="content">{order.id}</span><br/>

                                                    <FormattedMessage id="account.booking.date"/>:<span
                                                    className="content">{formatDate(order.createdDate, 'DD/MM/YYYY HH:mm')}</span>
                                                </div>
                                            </div>
                                            <div className="payment-view-more">
                                                {
                                                    order.statusId !== Constants.ORDER_STATUS.UNKNOWN &&
                                                    <div
                                                        className={"paid status-" + order.statusId}>{order.statusText}</div>
                                                }
                                                {isOrderValid &&
                                                <div className="view-more">
                                                    <a href={`${langUrl}/receipt/${order.id}`} target="_blank"
                                                       rel="noopener noreferrer"><FormattedMessage
                                                        id="account.view.receipt"/>&nbsp;&nbsp;<i
                                                        className="fa fa-angle-right"/></a>
                                                </div>
                                                }
                                            </div>
                                        </div>
                                        {
                                            order.items.map(item => {
                                                let tickets = '';
                                                let voucherLink = '';

                                                // 2: PAID, 5: ORDER_CONFIRMED, 6: ORDER_PARTIAL_COMPLETED, 7: ORDER_COMPLETED
                                                const isOrderItemValid = item.statusId === Constants.ORDER_STATUS.CONFIRMED || item.statusId === Constants.ORDER_STATUS.COMPLETED || item.statusId === Constants.ORDER_STATUS.PARTIAL_COMPLETED;

                                                item.items.forEach(ticket => {
                                                    tickets += `, ${ticket.ticketTypeName} x ${ticket.quantity}`;
                                                    voucherLink = `${langUrl}/voucher/${ticket.voucherCode}?token=${ticket.voucherToken}`;
                                                });

                                                const activityUrl = `${langUrl}/experience/${item.activityId}-${item.activitySlug}`;
                                                const reviewUrl = `${langUrl}/my-bookings/${order.id}/${item.id}/${item.activityId}/review`;

                                                return (
                                                    <div
                                                        key={`${order.id}_${item.activityId}_${item.packageAvailabilityId}`}
                                                        className="greyborderbox">
                                                        <div className="photo">
                                                            <a href={activityUrl}>
                                                                <img
                                                                    src={`${Constants.CLOUDINARY_IMAGE_URL}/w_400/${item.thumbnailKey}.${
                                                                        item.thumbnailFormat
                                                                        }`}
                                                                    alt={item.activityName}
                                                                /></a>
                                                        </div>
                                                        <div className="name">
                                                            <a href={activityUrl}><h5>{item.activityName}</h5></a>
                                                            <p className="desc">
                                                                {tickets.substr(2)}
                                                            </p>
                                                            <p className="desc">
                                                                <FormattedMessage
                                                                    id="common.activity.date"/>: {formatDate(item.packageAvailabilityDate, 'DD/MM/YYYY')} {item.packageAvailabilityTime}
                                                            </p>
                                                            <br className="br-mobile-h"/>
                                                        </div>
                                                        <div className="hr visible-sm visible-xs"/>
                                                        <div className="edit-delete">
                                                            {isOrderItemValid &&
                                                            <React.Fragment>
                                                                <a href={voucherLink} target="_blank"
                                                                   rel="noopener noreferrer">
                                                                    <button
                                                                        className="btn btn-s orange btn-tablet-h marginBottom-10px">
                                                                        <FormattedMessage id="account.view.vouchers"/>
                                                                    </button>
                                                                </a>
                                                                {
                                                                    item.allowReview && (
                                                                        <a href={reviewUrl}>
                                                                            <button
                                                                                className="btn btn-s yellow btn-tablet-h marginBottom-10px">
                                                                                <FormattedMessage
                                                                                    id="review.activity.review"/>
                                                                            </button>
                                                                        </a>
                                                                    )
                                                                }
                                                            </React.Fragment>
                                                            }
                                                            {order.statusId === Constants.ORDER_STATUS.UNKNOWN && <div
                                                                className={"paid status-" + item.statusId}>{item.statusText}</div>}
                                                        </div>

                                                    </div>)
                                            })
                                        }
                                    </div>)
                            })
                        }

                        {bookings.data && bookings.totalPage > 1 &&
                        <Pagination
                            pageIndex={page.index}
                            pageSize={page.size}
                            totalPage={bookings.totalPage}
                            changePageIndex={this.onChangePageIndex}
                            changePageSize={this.changPageSize}
                        />
                        }
                    </div>
                </LoadingContainer>
            </React.Fragment>
        );
    }
}

export default injectIntl(MyBookings);
