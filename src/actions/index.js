import { FETCH_FIGHTERS_DATA, CHANGE_SEARCH_INPUT } from './types';
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