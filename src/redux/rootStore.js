import { Map } from 'immutable';
import { createStore, compose } from 'redux';

import rootReducer from './rootReducer';
import middlewares from './rootMiddleware';

export default createStore(rootReducer, new Map(), middlewares)
