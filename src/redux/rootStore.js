import rootReducer from './rootReducer';

import { Map } from 'immutable'
import { createStore } from 'redux';

export default createStore(rootReducer, new Map())
