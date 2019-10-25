import 'babel-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import th from 'react-intl/locale-data/th';
import vi from 'react-intl/locale-data/vi';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...th, ...vi, ...zh]);
addLocaleData([
    { locale: 'en-us', parentLocale: 'en' },
    { locale: 'vi-vn', parentLocale: 'vi' },
    { locale: 'th-th', parentLocale: 'th' },
    { locale: 'zh-cn', parentLocale: 'zh' },
    { locale: 'zh-hk', parentLocale: 'zh-Hant-HK' }
]);

function Fragment(props) {
    return props.children || <span {...props} /> || null;
}

export default class IntlWrapper extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        locale: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        messages: PropTypes.object.isRequired
    }

    render() {
        const { locale, store, children, messages } = this.props;

        return (
            <Provider store={store}>
                <IntlProvider locale={locale} messages={messages} textComponent={Fragment}>
                    {children}
                </IntlProvider>
            </Provider>
        );
    }
}
