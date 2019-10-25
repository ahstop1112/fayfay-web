import React from 'react'
import {createStoreWithState} from "../redux/store";
import {hydrate} from 'react-dom'
import RegisterFormContainer from './RegisterFormContainer'
import IntlWrapper from "../../../IntlWrapper";

window.React = React;

const preloadedState = window.__PRELOADED_STATE__;
const data = window.__DATA__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
delete window.__DATA__;

// Create Redux store with initial state
const store = createStoreWithState(preloadedState);

hydrate(
    <IntlWrapper store={store} locale={data.lang} messages={data.translations}>
        <RegisterFormContainer data={data}/>
    </IntlWrapper>,
    document.getElementById("registerFormContainer")
);