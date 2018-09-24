import { FETCH_FIGHTERS_DATA } from '../actions/types';

const initialState = {
  listFighters: []
};

const fighterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FIGHTERS_DATA:
      return {
        ...state,
        listFighters: action.payload
      };
    default:
      return state;
  }
}

export default fighterReducer;
