import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DatePickerCustomInput extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        value: PropTypes.string,
        iconClassName: PropTypes.string,
        fontAwesome: PropTypes.string,
        placeholderText: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    render() {
        const { fontAwesome, iconClassName, onClick, value, placeholderText = "", disabled } = this.props;
        return (
            <div className="icon-input">
                <input
                    placeholder={placeholderText}
                    type="text"
                    onClick={onClick}
                    value={value}
                    className={"form-control"}
                    readOnly
                    disabled={disabled}
                />
                <i className={`far ${fontAwesome} ${iconClassName}`} onClick={onClick}/>
            </div>
        )
    }
}

export default DatePickerCustomInput;
