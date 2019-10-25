import React from 'react';
import PropTypes from 'prop-types';
import Constants from 'fayfayConstants';

class PaypalButton extends React.Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    componentDidMount() {
        const existingScript = document.getElementById('paypalCheckoutJs');

        if (!existingScript) {
            const $this = this;
            document.addEventListener("DOMContentLoaded", function (event) {
                const script = document.createElement('script');
                script.src = 'https://www.paypalobjects.com/api/checkout.min.js';
                script.id = 'paypalCheckoutJs';
                document.body.appendChild(script);

                script.onload = () => {
                    $this.renderPaypalButton();
                };
            });
        } else {
            this.renderPaypalButton();
        }
    }

    renderPaypalButton() {
        paypal.Button.render({
            env: Constants.PAYPAL_ENV || 'sandbox', // Or 'sandbox' or 'production',
            style: this.props.style,
            payment: this.props.payment,
            onAuthorize: this.props.onAuthorize,
            onCancel: this.props.onCancel,
            onError: this.props.onError
        }, this.buttonRef.current);
    }

    render() {
        return <div ref={this.buttonRef}></div>;
    }
}

PaypalButton.propTypes = {
    locale: PropTypes.string.isRequired,
    style: PropTypes.object,
    payment: PropTypes.func.isRequired,
    onAuthorize: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onError: PropTypes.func
};

PaypalButton.defaultProps = {
    style: {
        label: 'checkout',
        size: 'responsive',    // small | medium | large | responsive
        shape: 'pill',     // pill | rect
        color: 'gold'     // gold | blue | silver | black
    }
};

export default PaypalButton;
