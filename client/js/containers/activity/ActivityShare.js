import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from "prop-types";

class ActivityShare extends Component {

    static propTypes = {
        activityTitle: PropTypes.string
    };

    copyLink = () => {
        const textArea = document.createElement('textArea');

        // Place in top-left corner of screen regardless of scroll position.
        textArea.style.position = 'fixed';
        textArea.style.top = '200px';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';

        textArea.value = window.location.href;

        document.body.appendChild(textArea);

        let range,
            selection;

        if (navigator.userAgent.match(/ipad|iphone/i)) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }

        document.execCommand('copy');
        document.body.removeChild(textArea);
    };

    fbShare = () => {
        const shareLink = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
        window.open(shareLink);
    };

    googleShare = () => {
        const shareLink = "https://plus.google.com/share?url=" + window.location.href;
        window.open(shareLink);
    };

    wsShare = () => {
        const shareLink = "whatsapp://send?text=" + encodeURIComponent("fayfay.com: " + window.location.href);
        window.open(shareLink);
    };

    emailShare = () => {
        const shareLink = "mailto:?subject=" + encodeURIComponent("fayfay.com: " + this.props.activityTitle) + "&body=" + encodeURIComponent("fayfay.com: " + this.props.activityTitle + "\n" + window.location.href);
        window.open(shareLink);
    };

    render() {

        return (
            <div className="share-icons">
                <a onClick={this.fbShare}><i className="fab fa-facebook"/></a>
                <a onClick={this.googleShare}><i className="fab fa-google-plus-square"/></a>
                <a onClick={this.wsShare}><i className="fab fa-whatsapp-square"/></a>
                <a onClick={this.copyLink}><i className="fas fa-link"/></a>
                <a onClick={this.emailShare}><i className="fas fa-envelope-square"/></a>
            </div>
        );
    }
}

export default injectIntl(ActivityShare);
