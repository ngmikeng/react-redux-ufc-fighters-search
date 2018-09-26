import { combineReducers } from 'redux';
import fighterReducer from './fighterReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  fighters: fighterReducer,
  search: searchReducer
});
