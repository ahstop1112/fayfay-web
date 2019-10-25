import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChangePassword from './ChangePassword';
import LanguageAndCurrency from './LanguageAndCurrency';

export default class MySettings extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        details: PropTypes.object.isRequired,
        languages: PropTypes.array.isRequired,
        currencies: PropTypes.array.isRequired,
        postFormData: PropTypes.func.isRequired
    };

    render() {
        const { details, languages, currencies, ajaxStatus, postFormData } = this.props;

        return (
            <div className="greyborderbox">
                <ChangePassword details={details} postFormData={postFormData} ajaxStatus={ajaxStatus}/>
                <LanguageAndCurrency details={details} languages={languages} currencies={currencies}
                                     postFormData={postFormData} ajaxStatus={ajaxStatus}/>
            </div>
        )
    }
}
