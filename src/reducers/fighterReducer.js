import { FETCH_FIGHTERS_DATA, VIEW_FIGHTER_DETAIL, CLOSE_FIGHTER_DETAIL, LOAD_MORE_FIGHTERS } from '../actions/types';

const initialState = {
  listFighters: [],
  fighterDetail: {},
  showDetail: false,
  cursor: 0,
  limit: 10
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
    case LOAD_MORE_FIGHTERS:
      return {
        ...state,
        cursor: action.payload.cursor,
        limit: action.payload.limit
      };
    default:
      return state;
  }
}

export default fighterReducer;
