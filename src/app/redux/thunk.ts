import restaurantsApi from '../api/restaurant-api';
import {
  fetchingFoodsStart, fetchingFoodsSuccess,
  fetchingRestaurantsStart,
  fetchingRestaurantsSuccess, fetchingSingleFoodStart, fetchingSingleFoodSuccess,
  fetchingSingleRestaurantStart,
  fetchingSingleRestaurantSuccess,
} from './actions';
import toastService from '../services/toast-service';
import foodApi from '../api/food-api';

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

export const fetchFoods = () => async (dispatch: Function) => {
  try {
    dispatch(fetchingFoodsStart());
    const data = await foodApi.fetchList();

    dispatch(fetchingFoodsSuccess(data));
  } catch (e) {
    console.error(e);
    toastService.error(e);
  }
};

export const fetchFoodById = (id: string) => async (dispatch: Function) => {
  try {
    dispatch(fetchingSingleFoodStart());
    const data = await foodApi.fetchById(id);

    dispatch(fetchingSingleFoodSuccess(data));
  } catch (e) {
    console.error(e);
    toastService.error(e);
  }
};

export const updateFoodUserRatingById = (
  id: string,
  rating: number,
) => async () => {
  try {
    await foodApi.updateUserRatingById(id, rating);
    toastService.success('Rating updated');
  } catch (e) {
    console.error(e);
    toastService.error(e);
  }
};
