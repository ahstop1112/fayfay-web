import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import DatePicker from "react-datepicker";
import DatePickerCustomInput from "./DatePickerCustomInput";

class DateInputField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        className: PropTypes.string,
        intl: PropTypes.object.isRequired,
        maxDate: PropTypes.object,
        minDate: PropTypes.object,
        dateFormat: PropTypes.string,
        disabled: PropTypes.bool,
        placeHolder: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        className: '',
        maxDate: null,
        minDate: null,
        dateFormat: 'DD/MM/YYYY',
        placeHolder: ''
    };

    handleChangeDate = (e) => {
        this.props.input.onChange(e);
    };

    render() {
        const {
            input,
            meta: { touched, error },
            placeHolder,
            intl,
            maxDate,
            minDate,
            dateFormat,
            disabled
        } = this.props;

        return (
            <div name={input.name}>
                <DatePicker
                    customInput={
                        <DatePickerCustomInput name={input.name} fontAwesome="fa-calendar-alt"
                                               iconClassName="fayfay-calendar-icon"
                                               disabled={disabled}
                                               placeholderText={placeHolder || intl.formatMessage({ id: 'package.selectDate' })}/>
                    }
                    readOnly
                    dateFormat={dateFormat}
                    selected={input.value || null}
                    onChange={this.handleChangeDate}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    maxDate={maxDate}
                    minDate={minDate}
                    disabled={disabled}
                    locale={intl.locale}
                    popperModifiers={{
                        flip: {
                            enabled: false
                        },
                        preventOverflow: {
                            enabled: true,
                            escapeWithReference: false
                        }
                    }}
                />
                {touched &&
                error && (
                    <div className="error nopadding-important">
                        <FormattedMessage id={error}/>
                    </div>
                )}
            </div>
        )
    }
}

export default injectIntl(DateInputField);
