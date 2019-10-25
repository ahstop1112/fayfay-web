import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { required, minLenChk } from "../../utils/validators";
import InputField from "../../components/inputs/InputField";
import { Field } from 'redux-form';

class FaySimDelivery extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        fields: PropTypes.object.isRequired,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    minLength = minLenChk(2);

    render() {
        const { fields, intl, disabled } = this.props;

        return (
            <React.Fragment>
                {fields.map((field, index) => {
                    return (index ===0 && <div key={`sim-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.shippingAddress"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.deliveryAddress`}
                                        type="text"
                                        component={InputField}
                                        validate={[required, this.minLength]}
                                        maxLength={200}
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.note"/>
                                    </label>
                                    <div className="visa-date-of-arrival-picker">
                                        <Field
                                            name={`${field}.note`}
                                            type="textarea"
                                            row={3}
                                            component={InputField}
                                            maxLength={1500}
                                            autocomplete="new-password"
                                            placeholder={intl.formatMessage({ id: 'payment.specialRequest' })}
                                            disabled={disabled}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(FaySimDelivery);
