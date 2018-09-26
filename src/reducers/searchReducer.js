import { CHANGE_SEARCH_INPUT, CHANGE_SEARCH_FILTER } from '../actions/types';
import { FILTER_TYPES } from '../actions/types';

const initialState = {
  inputText: '',
  filterBy: FILTER_TYPES[0].type
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        inputText: action.payload
      };
    case CHANGE_SEARCH_FILTER:
      return {
        ...state,
        filterBy: action.payload
      };
    default:
      return state;
  }
}

export default searchReducer;