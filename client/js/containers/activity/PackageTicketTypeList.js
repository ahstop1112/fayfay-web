import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PackageTicketType from './PackageTicketType';
import { injectIntl } from 'react-intl';

class PackageTicketTypeList extends Component {
    static propTypes = {
        packageTicketPurchaseInfo: PropTypes.object.isRequired,
        updatePackageTicketPurchase: PropTypes.func.isRequired,
        maximumTicketCount: PropTypes.number,
        intl: PropTypes.object.isRequired,
        className: PropTypes.string
    };

    static defaultProps = {
        className: null,
        maximumTicketCount: 0
    };

    checkZeroStatus = (quantity, ticketTypeName) => {
        const pkgAdult = this.props.intl.formatMessage({ id: 'package.adult' });
        const pkgChild = this.props.intl.formatMessage({ id: 'package.children' });
        const {
            packageTicketPurchaseInfo: { ticketTypeData }
        } = this.props;

        let zeroStatus = false,
            count = 0;
        if (ticketTypeName === pkgAdult) {
            for (let i = 0; i < ticketTypeData.length; i++) {
                if (ticketTypeData[i].name === pkgChild) {
                    count = ticketTypeData[i].quantity;
                    break;
                }
            }
        } else if (ticketTypeName === pkgChild) {
            for (let i = 0; i < ticketTypeData.length; i++) {
                if (ticketTypeData[i].name === pkgAdult) {
                    count = ticketTypeData[i].quantity;
                    break;
                }
            }
        }

        if (ticketTypeName === pkgAdult || ticketTypeName === pkgChild) {
            if (quantity - 1 === 0 && count === 0) {
                zeroStatus = true;
            }
        }
        return zeroStatus;
    };

    render() {
        const { packageTicketPurchaseInfo, updatePackageTicketPurchase, className, maximumTicketCount } = this.props;
        const ticketTypeData = packageTicketPurchaseInfo.ticketTypeData || [];

        const ticketsToPurchase = Object.entries(packageTicketPurchaseInfo.ticketsToPurchase || {});
        const totalQuantity = ticketsToPurchase.reduce((sum, item) => {
            const [ticketTypeId, ticketPurchaseInfo] = item;

            if (ticketPurchaseInfo.quantity) {
                return sum + Number(ticketPurchaseInfo.quantity);
            } else {
                return sum;
            }
        }, 0);

        const quotaLeft =
            Number(
                !!maximumTicketCount && maximumTicketCount < packageTicketPurchaseInfo.quota
                    ? maximumTicketCount
                    : packageTicketPurchaseInfo.quota
            ) - totalQuantity;
        return (
            <React.Fragment>
                {ticketTypeData.map(ticketType => {
                    return (
                        <PackageTicketType
                            key={ticketType.id}
                            packageId={packageTicketPurchaseInfo.packageId}
                            bookingDate={packageTicketPurchaseInfo.bookingDate}
                            bookingTime={packageTicketPurchaseInfo.bookingTime}
                            ticketTypeId={ticketType.id}
                            name={ticketType.name}
                            price={ticketType.price}
                            specialPrice={ticketType.specialPrice}
                            quota={quotaLeft}
                            quantity={ticketType.quantity}
                            minimumTicketCount={ticketType.minimumTicketCount}
                            maximumTicketCount={ticketType.maximumTicketCount}
                            updatePackageTicketPurchase={updatePackageTicketPurchase}
                            checkZeroStatus={this.checkZeroStatus}
                            className={className}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(PackageTicketTypeList);
