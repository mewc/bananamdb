import React from 'react';
import {createStore, combineReducers } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import * as reducers from '../reducers/reducers';

export const store = createStore(
  combineReducers({
    state: reducers
  }),
  devToolsEnhancer()
);
