import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class CheckboxInputField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        label: PropTypes.node,
        disabled: PropTypes.string,
        className: PropTypes.string,
        errorMessage: PropTypes.node
    };

    static defaultProps = {
        disabled: '',
        className: '',
        label: null,
        errorMessage: null
    };

    onCheckChanged =(e)=> {
        this.props.input.onChange(e.target.checked);
    }

    render() {
        const {
            input, label, className,
            meta: { touched, error },
            disabled,
            errorMessage
        } = this.props;

        return (
            <React.Fragment>
                <label className={`${className}`}>
                    <input type='checkbox' value={input.value} disabled={disabled} onChange={this.onCheckChanged}/>
                    <span className="checkmark" />
                    <span className="txt-label">{label}</span>
                </label>
                {touched &&
                error && (
                    <div className="error nopadding-important">
                        {errorMessage ? errorMessage : <FormattedMessage id={error}/>}
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default CheckboxInputField;
