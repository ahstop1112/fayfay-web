import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PackageOption from './PackageOption';

export default class ActivityPackage extends Component {
    static propTypes = {
        activity: PropTypes.object.isRequired,
        packageAvailabilityId: PropTypes.number.isRequired,
        activePackage: PropTypes.object.isRequired,
        availableDates: PropTypes.object.isRequired,
        packageOptionMap: PropTypes.object.isRequired,
        selectPackage: PropTypes.func.isRequired,
        updatePackageTicketPurchase: PropTypes.func.isRequired,
        selectPackageBookingDate: PropTypes.func.isRequired,
        selectPackageBookingTime: PropTypes.func.isRequired,
        hasError: PropTypes.bool.isRequired,
        totalBookings: PropTypes.number.isRequired,
        instantMessengers: PropTypes.array.isRequired,
        countries: PropTypes.array.isRequired,
        langId: PropTypes.number.isRequired
    };

    render() {
        const {
            activity,
            activePackage,
            availableDates,
            packageOptionMap,
            selectPackage,
            updatePackageTicketPurchase,
            selectPackageBookingDate,
            selectPackageBookingTime,
            packageAvailabilityId,
            hasError,
            totalBookings,
            countries,
            instantMessengers,
            langId
        } = this.props;

        return (
            <React.Fragment>
                {activity.packages.map((pkg, i) => {
                    return (
                        <PackageOption
                            key={i}
                            activityId={activity.id}
                            activityName={activity.title}
                            packageAvailabilityId={packageAvailabilityId}
                            packageData={pkg}
                            availableDates={availableDates}
                            packageOptionMap={packageOptionMap}
                            selectPackage={selectPackage}
                            updatePackageTicketPurchase={updatePackageTicketPurchase}
                            selectPackageBookingDate={selectPackageBookingDate}
                            selectPackageBookingTime={selectPackageBookingTime}
                            open={pkg.id === activePackage.id}
                            hasError={hasError}
                            totalBookings={totalBookings}
                            paymentFlow={activity.paymentFlow}
                            paymentFlowType={activity.paymentFlowType}
                            countries={countries}
                            instantMessengers={instantMessengers}
                            langId={langId}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}
