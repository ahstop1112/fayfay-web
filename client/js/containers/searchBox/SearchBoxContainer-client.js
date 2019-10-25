import React from 'react';
import { hydrate } from 'react-dom';
import SearchBoxContainer from './SearchBoxContainer';
import IntlWrapper from '../../../../IntlWrapper';
import { createStoreWithState } from '../../redux/store';

window.React = React;

const preloadedState = window.__PRELOADED_STATE__;
const data = window.__DATA__;
const searchBoxData = window.__SEARCH_BOX_DATA__;

// Allow the passed state to be garbage-collected
//delete window.__PRELOADED_STATE__;
//delete window.__DATA__;

// Create Redux store with initial state
const store = createStoreWithState(preloadedState);
if (document.getElementById('search-box-container')) {
    hydrate(
        <IntlWrapper store={store} locale={data.lang} messages={data.translations}>
            <SearchBoxContainer data={data} searchBoxData={searchBoxData}/>
        </IntlWrapper>,
        document.getElementById('search-box-container')
    );
}
