import { FETCH_FIGHTERS_DATA, VIEW_FIGHTER_DETAIL, CLOSE_FIGHTER_DETAIL } from '../actions/types';

const initialState = {
  listFighters: [],
  fighterDetail: {},
  showDetail: false
};

const fighterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FIGHTERS_DATA:
      return {
        ...state,
        listFighters: action.payload
      };
    case VIEW_FIGHTER_DETAIL:
      return {
        ...state,
        fighterDetail: action.payload,
        showDetail: true
      };
    case CLOSE_FIGHTER_DETAIL:
      return {
        ...state,
        fighterDetail: {},
        showDetail: false
      };
    default:
      return state;
  }
}

export default fighterReducer;
