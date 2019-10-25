import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import { required, minLenChk } from "../../utils/validators";
import InputField from "../../components/inputs/InputField";
import AdvancedDropDown from "../../components/inputs/AdvancedDropDown";
import { Field } from 'redux-form';
import CheckBoxField from "../../components/inputs/CheckboxInputField";

class PropertyExtraInfo extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        fields: PropTypes.object.isRequired,
    };

    minLength = minLenChk(2);

    render() {
        const { fields, intl } = this.props;

        return (
            <React.Fragment>
                {fields.map((field, index) => {
                    const propertyInfo = fields.get(index);

                    return (index === 0 && <div key={`property-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.preferredTourLanguage"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.preferredTourLanguage`}
                                        component={AdvancedDropDown}
                                        validate={required}
                                        searchable={false}
                                        options={[
                                            {
                                                label: <FormattedMessage
                                                    id='label.inquiry.property.preferredTourLanguage.english'/>,
                                                value: 'label.inquiry.property.preferredTourLanguage.english'
                                            },
                                            {
                                                label: <FormattedMessage
                                                    id='label.inquiry.property.preferredTourLanguage.mandarin'/>,
                                                value: 'label.inquiry.property.preferredTourLanguage.mandarin'
                                            },
                                            {
                                                label: <FormattedMessage
                                                    id='label.inquiry.property.preferredTourLanguage.cantonese'/>,
                                                value: 'label.inquiry.property.preferredTourLanguage.cantonese'
                                            }]
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.budget"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.budget`}
                                        component={AdvancedDropDown}
                                        validate={required}
                                        searchable={false}
                                        options={[{
                                            label: intl.formatMessage({ id: 'label.inquiry.property.budget.below1M' }),
                                            value: 'label.inquiry.property.budget.below1M'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.budget.from1to2M' }),
                                            value: 'label.inquiry.property.budget.from1to2M'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.budget.from2to3M' }),
                                            value: 'label.inquiry.property.budget.from2to3M'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.budget.from3to4M' }),
                                            value: 'label.inquiry.property.budget.from3to4M'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.budget.from4to5M' }),
                                            value: 'label.inquiry.property.budget.from4to5M'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.budget.above5M' }),
                                            value: 'label.inquiry.property.budget.above5M'
                                        }]}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.unitTypes"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.unitTypes`}
                                        component={AdvancedDropDown}
                                        validate={required}
                                        searchable={false}
                                        options={[{
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.studio' }),
                                            value: 'label.inquiry.property.unitTypes.studio'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.oneBedroom' }),
                                            value: 'label.inquiry.property.unitTypes.oneBedroom'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.twoBedroom' }),
                                            value: 'label.inquiry.property.unitTypes.twoBedroom'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.threeBedroom' }),
                                            value: 'label.inquiry.property.unitTypes.threeBedroom'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.villas' }),
                                            value: 'label.inquiry.property.unitTypes.villas'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.allOfAbove' }),
                                            value: 'label.inquiry.property.unitTypes.allOfAbove'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitTypes.others' }),
                                            value: 'label.inquiry.property.unitTypes.others'
                                        }]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.unitSize"/> <span
                                        className="required">*</span>
                                    </label>
                                    <Field
                                        name={`${field}.unitSize`}
                                        component={AdvancedDropDown}
                                        validate={required}
                                        searchable={false}
                                        options={[{
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.below600' }),
                                            value: 'label.inquiry.property.unitSize.below600'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.from600to1000' }),
                                            value: 'label.inquiry.property.unitSize.from600to1000'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.from1000to2000' }),
                                            value: 'label.inquiry.property.unitSize.from1000to2000'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.from2000to3000' }),
                                            value: 'label.inquiry.property.unitSize.from2000to3000'
                                        }, {
                                            label: intl.formatMessage({ id: 'label.inquiry.property.unitSize.above3000' }),
                                            value: 'label.inquiry.property.unitSize.above3000'
                                        }]}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.preferredPropertyDistrict"/>{' '}
                                        <span className="required">*</span>
                                    </label>
                                    <Field name={`${field}.preferredPropertyDistrict`} type="text"
                                           component={InputField}
                                           maxLength={100}
                                           validate={[required, this.minLength]}
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
                                        />
                                        <Field className="radio-search-label" name={`${field}.check`} type="checkbox"
                                               component={CheckBoxField}
                                               validate={propertyInfo.note ? [] : required}
                                               label={<FormattedMessage id="payment.no.pickup.details"/>}
                                               errorMessage={<FormattedMessage id={"payment.bookingNoteEmpty"}/>}
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

export default injectIntl(PropertyExtraInfo);
