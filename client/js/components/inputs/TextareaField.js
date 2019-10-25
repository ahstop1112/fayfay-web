import React,{Component} from 'react';
import PropTypes from "prop-types";

class TextareaField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        label: PropTypes.node,
        cols: PropTypes.number,
        rows: PropTypes.number
    }

    render(){
        const {
            input, label, cols, rows,
            meta: {touched, error, warning}
        } = this.props;

        return (
            <div className={touched && error ? 'has-error form-group' : 'form-group'}>
                <label>{label}</label>
                <textarea placeholder={label} cols={cols} rows={rows} className="input-field input-lg resize-none"  {...input} ></textarea>
                {touched &&
                ((error && <div className="with-error">{error}</div>) ||
                    (warning && <div className="with-error">{warning}</div>))
                }
            </div>
        )
    }
}
