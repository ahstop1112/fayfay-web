import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';

export default class AdvancedDropDown extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        componentName: PropTypes.string,
        className: PropTypes.string,
        options: PropTypes.array.isRequired,
        onCountryChanged: PropTypes.func,
        placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        searchable: PropTypes.bool,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        className: 'form-group',
        placeholder: <FormattedMessage id="common.please.select"/>,
        componentName: 'react-select',
        searchable: true,
        disabled: false
    };

    handleChange = selectedOption => {
        if (selectedOption) {
            this.props.input.onChange(selectedOption.value.toString());
        }
        else {
            this.props.input.onChange('');
        }

        if (this.props.onCountryChanged) {
            this.props.onCountryChanged(selectedOption);
        }
    };

    render() {
        const { meta, className, placeholder, searchable, disabled, input } = this.props;
        return (
            <div className={className} name={input.name}>
                <Select
                    name={this.props.componentName}
                    instanceId={this.props.componentName}
                    value={input.value}
                    onChange={this.handleChange}
                    options={this.props.options}
                    placeholder={placeholder}
                    searchable={searchable}
                    disabled={disabled}
                />
                {meta.submitFailed && meta.error && <div className="error"><FormattedMessage id={meta.error}/></div>}
            </div>
        );
    }
}
