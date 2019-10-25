import React from 'react'
import {hydrate} from 'react-dom'
import F1FormContainer from './F1FormContainer'
import IntlWrapper from "../../../IntlWrapper";
import store from "../redux/store";

window.React = React;

const data = window.__DATA__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
delete window.__DATA__;

// Create Redux store with initial state
hydrate(
    <IntlWrapper store={store} locale={data.lang} messages={data.translations}>
        <F1FormContainer data={data}/>
    </IntlWrapper>,
    document.getElementById("campaign-f1-form-container")
);
