import treeReducer from 'reducers/treeReducer';

import { combineReducers } from 'redux-immutable'

export default combineReducers({
  tree: treeReducer
})
