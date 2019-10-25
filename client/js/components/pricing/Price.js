import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import FormatMoney from './FormatMoney';

export default class Price extends Component {
  static propTypes = {
    className: PropTypes.string,
    price: PropTypes.number.isRequired,
    specialPrice: PropTypes.number,
    maximumFractionDigits: PropTypes.number
  };

  static defaultProps = {
    className: 'price',
    specialPrice: 0,
    maximumFractionDigits: 2
  };

  render() {
    const { price, specialPrice, className, maximumFractionDigits } = this.props;

    return (
      <div className={className}>
        {specialPrice > 0 && (
          <div>
            <FormatMoney value={specialPrice} maximumFractionDigits={maximumFractionDigits} />
            <del>
              <FormatMoney value={price} maximumFractionDigits={maximumFractionDigits} />
            </del>
          </div>
        )}
        {!specialPrice && (
            <div>
                {price > 0 && <FormatMoney value={price} maximumFractionDigits={maximumFractionDigits} />}
                {!price && <FormattedMessage id="activity.freeVoucher" />}
            </div>
        )}
      </div>
    );
  }
}
