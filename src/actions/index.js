import { FETCH_FIGHTERS_DATA } from './types';
import fightersData from '../data/ufc-fighters.json';

// export const fetchFightersData = () => (dispatch) => {
//   console.log('fetch');
//   dispatch({
//     type: FETCH_FIGHTERS_DATA,
//     payload: fightersData
//   });
// }

export const fetchFightersData = () => {
  console.log('fetch');
  return {
    type: FETCH_FIGHTERS_DATA,
    payload: fightersData
  };
}
