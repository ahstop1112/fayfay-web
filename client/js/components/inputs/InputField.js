import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';
import {injectIntl, FormattedMessage} from 'react-intl';

class InputField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        placeholder: PropTypes.string,
        type: PropTypes.string,
        meta: PropTypes.object.isRequired,
        label: PropTypes.node,
        className: PropTypes.string,
        divClassName: PropTypes.string,
        rows: PropTypes.number,
        maxLength: PropTypes.number,
        allowNegative: PropTypes.bool,
        thousandSeparator: PropTypes.bool,
        numberFormat: PropTypes.string,
        required: PropTypes.bool,
        requiredPosition: PropTypes.string,
        disabled: PropTypes.bool,
        verifiedStatus: PropTypes.bool,
        autocomplete: PropTypes.string,
        isUsername: PropTypes.bool
    };

    static defaultProps = {
        requiredPosition: 'right',
        divClassName: '',
        className: 'input-field input-s',
        placeholder: '',
        type: 'text',
        label: '',
        rows: 5,
        maxLength: null,
        allowNegative: false,
        thousandSeparator: false,
        numberFormat: null,
        required: false,
        disabled: false,
        autocomplete: '',
        isUsername: false
    };

    state = {
        hidePlaceholder: false
    };

    onFocusInputIDNumber = e => {
        this.setState({hidePlaceholder: true});
    };

    onBlurInputIDNumber = e => {
        this.setState({hidePlaceholder: false});
    };

    onNumberChange = values => {
        const {value} = values;
        this.props.input.onChange(value);
    };

    showError = (err) => {
        let key = '';
        if (err.indexOf('must.be.at.least') > -1) {
            key = 'common.must.be.at.least';
        }
        else if (err.indexOf('must.be.less.than') > -1) {
            key = 'common.must.be.less.than';
        }
        else if (err.indexOf('must.be.or.less') > -1) {
            key = 'common.must.be.or.less';
        }
        else if (err.indexOf('must.be.or.more') > -1) {
            key = 'common.must.be.or.more';
        }

        if (key) {
            return <FormattedMessage id={key} values={{'num': err.split(key)[1]}}/>;
        }
        else {
            return <FormattedMessage id={err} />;
        }
    };

    onKeyUp = () => {
        const {isUsername, input} = this.props;
        if (isUsername) {
            const val = input.value.replace(/[^\w_]/ig,'');
            this.props.input.onChange(val);
        }
    };

    onPaste = e => {
        if (this.props.maxLength) {
            e.clipboardData.getData('text/plain').slice(0, this.props.maxLength);
        }
    };

    render() {
        const {
            input,
            type,
            meta,
            label,
            placeholder,
            divClassName,
            className,
            rows,
            maxLength,
            allowNegative,
            thousandSeparator,
            numberFormat,
            required,
            requiredPosition,
            disabled,
            verifiedStatus,
            autocomplete
        } = this.props;

        return (
            <React.Fragment>
                <div className={meta.touched && meta.error ? `has-error form-group ${divClassName}` : `form-group ${divClassName}`}>
                    <div name={input.name}>
                        <label className="input-label">
                            { required && requiredPosition === 'left' && (<span className="required">* </span>)}
                            {label}
                            { required && requiredPosition === 'right' && (<span className="required"> *</span>)}
                        </label>

                        {type === 'textarea' && (
                            <textarea
                                {...input}
                                name={input.name}
                                placeholder={placeholder}
                                className={classNames(className, {'input-error': meta.touched && meta.error})}
                                rows={rows}
                                autoComplete={autocomplete}
                                disabled={disabled}
                                maxLength={maxLength}
                                onPaste={this.onPaste}
                            />
                        )}
                        {type === 'number' && (
                            <NumberFormat
                                thousandSeparator={thousandSeparator ? true : ''}
                                format={numberFormat}
                                allowNegative={allowNegative}
                                value={input.value}
                                maxLength={maxLength}
                                onValueChange={this.onNumberChange}
                                placeholder={this.state.hidePlaceholder ? '' : placeholder}
                                onBlur={this.onBlurInputIDNumber}
                                onFocus={this.onFocusInputIDNumber}
                                disabled={disabled}
                                className={classNames(className, {'input-error': meta.touched && meta.error})}
                            />
                        )}
                        {type !== 'number' &&
                        type !== 'textarea' && (
                            <input
                                {...input}
                                placeholder={placeholder}
                                type={type}
                                onBlur={this.onBlurInputIDNumber}
                                onFocus={this.onFocusInputIDNumber}
                                onKeyUp={this.onKeyUp}
                                maxLength={maxLength}
                                className={classNames(className, {'input-error': meta.touched && meta.error})}
                                disabled={disabled}
                            />
                        )}

                        {
                            typeof (verifiedStatus) !== 'undefined' && verifiedStatus === false && (
                                <span className="not-verified"><i className="icon close"></i><FormattedMessage id="account.unverified"/></span>
                            )
                        }
                        {
                            typeof (verifiedStatus) !== 'undefined' && verifiedStatus === true && (
                                <span className="pass-verified"><FormattedMessage id="account.verified"/></span>
                            )
                        }
                        {meta.touched && meta.error && <div className="error">{this.showError(meta.error)}</div>}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default injectIntl(InputField)
