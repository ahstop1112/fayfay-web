import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static propTypes = {
        className: PropTypes.string,
        submitting: PropTypes.bool,
        type: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        children: PropTypes.node.isRequired,
        onMouseOver: PropTypes.func,
        onMouseOut: PropTypes.func,
        style: PropTypes.object,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        submitting: false,
        disabled: false,
        className: 'btn btn-s',
        onClick: () => {
        }
    };

    render() {
        const { type, className, submitting, onClick, children, style, disabled } = this.props;
        return (
            <button type={type} style={style} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}
                    className={className} disabled={disabled || submitting} onClick={onClick}>
                {submitting && <i className="fa fa-circle-o-notch fa-spin"/>} {children}
            </button>
        );
    }
}
