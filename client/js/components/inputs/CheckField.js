import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class CheckField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        type: PropTypes.string,
        label: PropTypes.node,
        disabled: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        disabled: '',
        className: ''
    };

    render() {
        const {
            input, type, label, className,
            meta: { touched, error },
            disabled,
        } = this.props;

        return (
            <React.Fragment>
                <label className={`checkbox-inline m-l-10 ${className}`}>
                    <input type={type} name={label} value={input} {...input} disabled={disabled}/>{label}
                </label>
                {touched &&
                error && (
                    <div className="error nopadding-important">
                        <FormattedMessage id={error}/>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default CheckField;
