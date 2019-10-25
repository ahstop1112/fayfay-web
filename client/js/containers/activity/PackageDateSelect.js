import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';

class PackageDateSelect extends Component {
  static propTypes = {
    packageId: PropTypes.number.isRequired,
    availableDates: PropTypes.object.isRequired,
    selectPackageBookingDate: PropTypes.func.isRequired,
    bookingDate: PropTypes.string,
    className: PropTypes.string,
    showDefaultOption: PropTypes.bool,
    intl: PropTypes.object.isRequired
  };

  static defaultProps = {
    bookingDate: '',
    className: 'form-control',
    showDefaultOption: true
  };

  changeDate = e => {
    const { packageId, selectPackageBookingDate } = this.props;
    const selectedDate = e.target.value;
    selectPackageBookingDate(packageId, selectedDate);
  };

  render() {
    const { availableDates, bookingDate, className, showDefaultOption, intl } = this.props;

    return (
      <select className={className} onChange={this.changeDate} value={bookingDate}>
        {showDefaultOption && <option value="">{intl.formatMessage({ id: 'common.please.select' })}</option>}
        {Object.entries(availableDates).map(entry => {
          const [date, ...rest] = entry;
          return (
            <option key={date} value={date} disabled={moment(date).isBefore(moment(), 'day')}>
              {date}
            </option>
          );
        })}
      </select>
    );
  }
}

export default injectIntl(PackageDateSelect);
