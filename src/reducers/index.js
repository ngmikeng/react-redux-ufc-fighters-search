import { combineReducers } from 'redux';
import fighterReducer from './fighterReducer';

export default combineReducers({
  fighters: fighterReducer
});
