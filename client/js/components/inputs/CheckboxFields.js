import React, { Component } from 'react';
import PropTypes from "prop-types";
import InputField from "../../components/inputs/InputField";
import CheckField from "../../components/inputs/CheckField";
import { Field } from 'redux-form';

export default class CheckboxFields extends Component {
    static propTypes = {
        fields: PropTypes.object.isRequired,
        label: PropTypes.string.isRequired,
        classLabel: PropTypes.string,
        classLeft: PropTypes.string,
        classRight: PropTypes.string
    };

    static defaultProps = {
        classLabel: '', classLeft: '', classRight: ''
    };

    render() {
        const { fields, label, classLabel, classLeft, classRight } = this.props;

        return (
            <div className="form-group">
                <label className={classLabel}>{label}</label>
                {
                    fields.map((field, index) => {
                        const item = fields.get(index);

                        if (item.more) {
                            return (
                                <div key={index} className="horizontal-flex-content">
                                    <Field name={`${field}.checked`} type="checkbox" component={CheckField}
                                           label={item.label} className={classLeft}/>
                                    <Field name={`${field}.more.value`} type="text"
                                           component={InputField}
                                           divClassName={classRight} label=""/>
                                </div>
                            )
                        }
                        else {
                            return (
                                <Field key={index} name={`${field}.checked`} type="checkbox" component={CheckField}
                                       label={item.label}/>
                            )
                        }

                    })
                }
            </div>
        )
    }
}
