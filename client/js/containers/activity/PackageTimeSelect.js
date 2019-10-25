import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import moment from 'moment';
import Constants from 'fayfayConstants';
import Select from 'react-select';

class PackageTimeSelect extends Component {
    static propTypes = {
        packageId: PropTypes.number.isRequired,
        timeList: PropTypes.array.isRequired,
        selectPackageBookingTime: PropTypes.func.isRequired,
        bookingTime: PropTypes.string,
        showDefaultOption: PropTypes.bool,
        packageAvailabilityId: PropTypes.number.isRequired,
        className: PropTypes.string,
        intl: PropTypes.object.isRequired
    };

    static defaultProps = {
        bookingTime: '',
        showDefaultOption: true,
        className: 'form-control',
    };

    state = { selectedOption: null }

    constructor(props) {
        super(props);

        const item = this.props.timeList.find(item => Number(item.id) === this.props.packageAvailabilityId);
        this.state = {
            selectedOption: item ? {
                value: this.props.packageAvailabilityId,
                label: moment(item.time, 'HH:mm:ss').format('HH:mm')
            } : null
        }
    }

    changeTime = selectedOption => {
        const { packageId, selectPackageBookingTime } = this.props;

        if (selectedOption) {
            this.setState({ selectedOption });
            const packageAvailabilityId = Number(selectedOption.value);
            selectPackageBookingTime(packageId, packageAvailabilityId);
        }
    };

    render() {
        const { timeList } = this.props;

        const options = timeList.filter(item => item.time !== Constants.ALL_DAY_BOOKING_TIME).map(item => {
            const time = moment(item.time, 'HH:mm:ss').format('HH:mm');
            return {
                value: item.id,
                label: time
            }
        });

        return (
            <Select
                value={this.state.selectedOption}
                onChange={this.changeTime}
                options={options}
                placeholder={<FormattedMessage id="common.please.select"/>}
                searchable={false}
                clearable={false}
            />
        )
            ;
    }
}

export default injectIntl(PackageTimeSelect);
