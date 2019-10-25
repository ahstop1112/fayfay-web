import React, {Component} from 'react';
import {injectIntl, FormattedMessage} from 'react-intl';
import PropTypes from "prop-types";

class SelectField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        label: PropTypes.node,
        heading: PropTypes.string,
        showHeading: PropTypes.bool,
        required: PropTypes.bool,
        selects: PropTypes.array.isRequired,
        intl: PropTypes.object.isRequired
    }

    render() {

        const {
            input,
            label,
            selects,
            meta: {touched, error, warning},
            showHeading = true, heading, required, intl
        } = this.props;

        const defaultText = intl.formatMessage({id: 'common.please.select'});

        const pleaseSelect = heading ? heading : defaultText;

        return (
            <div className={touched && error ? 'has-error form-group' : 'form-group'}>
                <div className="">
                    <label className="">{label}
                        {
                            required && (<span className="required">*</span>)
                        }
                    </label>
                    <select {...input} className="selectpicker form-control">
                        {
                            showHeading &&
                            (<option key="none" value=''> {pleaseSelect} </option>)
                        }
                        {
                            selects.map((item, i) => (
                                <option key={i} value={item.value}>{item.text}</option>
                            ))
                        }
                    </select>
                </div>
                {touched && error && <div className="error"><FormattedMessage id={error}/></div>}
            </div>
        )
    }
}

export default injectIntl(SelectField);
