import {
  FETCH_FIGHTERS_DATA,
  CHANGE_SEARCH_INPUT,
  CHANGE_SEARCH_FILTER,
  VIEW_FIGHTER_DETAIL,
  CLOSE_FIGHTER_DETAIL,
  LOAD_MORE_FIGHTERS
} from './types';
import fightersData from '../data/ufc-fighters.json';

// export const fetchFightersData = () => (dispatch) => {
//   console.log('fetch');
//   dispatch({
//     type: FETCH_FIGHTERS_DATA,
//     payload: fightersData
//   });
// }

export const fetchFightersData = () => {
  console.log('fetch data');
  return {
    type: FETCH_FIGHTERS_DATA,
    payload: fightersData
  };
}

export const changeSearchInput = (text) => {
  console.log('change text');
  return {
    type: CHANGE_SEARCH_INPUT,
    payload: text
  };
}

export const changeSearchFilter = (type) => {
  console.log('change filter');
  return {
    type: CHANGE_SEARCH_FILTER,
    payload: type
  };
}

export const viewFighterDetail = (fighter) => {
  console.log('view detail');
  return {
    type: VIEW_FIGHTER_DETAIL,
    payload: fighter
  };
}

export const closeFighterDetail = () => {
  console.log('close detail');
  return {
    type: CLOSE_FIGHTER_DETAIL,
    payload: null
  };
}

export const loadMoreFighters = (cursor, limit) => {
  console.log('load more');
  return {
    type: LOAD_MORE_FIGHTERS,
    payload: {
      cursor, limit
    }
  };
}
