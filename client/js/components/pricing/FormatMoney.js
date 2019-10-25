import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrency } from '../../utils/helpers';
import { formatMoney } from '../../utils/helpers';

export default class FormatMoney extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        currency: PropTypes.string,
        className: PropTypes.string,
        maximumFractionDigits: PropTypes.number
    };

    static defaultProps = {
        currency: '',
        className: '',
        maximumFractionDigits: 2
    };

    state = {
        currency: '',
        locale: ''
    };

    componentDidMount() {
        if (!this.props.currency) {
            this.setState({
                currency: getCurrency()
            });
        }
    }

    render() {
        const { value, className, maximumFractionDigits, currency } = this.props;
        const currencyCode = currency ? currency : this.state.currency;
        return (
            <React.Fragment>
                {currencyCode && <span className={className} dangerouslySetInnerHTML={{__html: formatMoney(value, currencyCode, this.state.locale, maximumFractionDigits)}} />}
            </React.Fragment>
        );
    }
}
