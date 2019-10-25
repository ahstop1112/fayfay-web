import React from 'react';
import { hydrate } from 'react-dom';
import EmailSubscribeContainer from './EmailSubscribeContainer';
import IntlWrapper from '../../../../IntlWrapper';
import { createStoreWithState } from '../../redux/store';

window.React = React;

const preloadedState = window.__PRELOADED_STATE__;
const data = window.__DATA__;

// Create Redux store with initial state
const store = createStoreWithState(preloadedState);
if(document.getElementById('email-subscribe-container')) {
    hydrate(
        <IntlWrapper store={store} locale={data.lang} messages={data.translations}>
            <EmailSubscribeContainer data={data}/>
        </IntlWrapper>,
        document.getElementById('email-subscribe-container')
    );
}
