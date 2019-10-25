import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

class RadioField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired,
        meta: PropTypes.object.isRequired,
        change: PropTypes.func.isRequired,
        label: PropTypes.node,
        radios: PropTypes.array.isRequired,
        disabled: PropTypes.string,
        className: PropTypes.string,
    };

    static defaultProps = {
        disabled:'',
        className:''
    };

    radioClick = e => {
        const {
            meta: { dispatch },
            change,
            input: { name }
        } = this.props;
        dispatch(change, name, e.target.value);
    };

    render() {
        const {
            input,
            type,
            label,
            meta: { touched, error },
            disabled,
            className
        } = this.props;

        return (
            <div>
                <label className={className}>{label}</label>
                {this.props.radios.map((item, i) => (
                    <label key={i} className="radio-inline m-l-10">
                        <input
                            {...input}
                            type={type}
                            value={item.value}
                            checked={item.checked}
                            onClick={this.radioClick}
                            disabled={disabled}
                        />
                        {item.label}
                    </label>
                ))}
                {touched &&
                error && (
                    <div className="error">
                        <FormattedMessage id={error} />
                    </div>
                )}
            </div>
        );
    }
}

export default RadioField;
