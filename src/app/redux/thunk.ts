import restaurantsApi from '../api/restaurant-api';
import {
  fetchingRestaurantsStart,
  fetchingRestaurantsSuccess,
} from './actions';

export const fetchRestaurants = () => async (dispatch: Function) => {
  try {
    dispatch(fetchingRestaurantsStart());
    const data = await restaurantsApi.fetchList();

    dispatch(fetchingRestaurantsSuccess(data));
  } catch (e) {
    console.error(e);
    // TODO add toast logic
  }
};

export default fetchRestaurants;
