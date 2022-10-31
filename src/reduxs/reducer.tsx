import { combineReducers } from 'redux';
import common from './common/reducer';

const reducers = combineReducers({
  common,
});

// TODO ("if any condition, you can set in here")
/*
const rootReducers = (state, action) => {
  if (action.type === authActionTypes.LOGOUT) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducers(state, action);
};
*/
export default reducers;
