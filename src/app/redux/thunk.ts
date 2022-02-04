import restaurantsApi from '../api/restaurant-api';
import {
  fetchingRestaurantsStart,
  fetchingRestaurantsSuccess,
  fetchingSingleRestaurantStart,
  fetchingSingleRestaurantSuccess,
} from './actions';
import toastService from '../services/toast-service';

export const fetchRestaurants = () => async (dispatch: Function) => {
  try {
    dispatch(fetchingRestaurantsStart());
    const data = await restaurantsApi.fetchList();

    dispatch(fetchingRestaurantsSuccess(data));
  } catch (e) {
    console.error(e);
    toastService.error(e);
  }
};

export const fetchRestaurantById = (id: string) => async (dispatch: Function) => {
  try {
    dispatch(fetchingSingleRestaurantStart());
    const data = await restaurantsApi.fetchById(id);

    dispatch(fetchingSingleRestaurantSuccess(data));
  } catch (e) {
    console.error(e);
    toastService.error(e);
  }
};

export const updateRestaurantUserRatingById = (
  id: string,
  rating: number,
) => async () => {
  try {
    await restaurantsApi.updateUserRatingById(id, rating);
    toastService.success('Rating updated');
  } catch (e) {
    console.error(e);
    toastService.error(e);
  }
};
