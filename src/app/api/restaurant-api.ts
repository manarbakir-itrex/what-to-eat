import RESTAURANTS_MOCK from '../../mocks/restaurants';
import { restaurantDmToVm, restaurantVmToDm } from '../transformers/restaurant-transformer';
import { RestaurantDm } from '../types';
import MockedApiAdapter from './mocked-api-adapter';

const api = new MockedApiAdapter<RestaurantDm>('restaurants', RESTAURANTS_MOCK);

const fetchList = () => api.getList()
  .then((restaurantsDm) => restaurantsDm.map(restaurantDmToVm));

const fetchById = (id: string) => api.get(id)
  .then((restaurant) => restaurantDmToVm(restaurant));

const updateUserRatingById = (id: string, userRating: number) => api.post(
  id,
  restaurantVmToDm({ userRating }),
);

const restaurantsApi = {
  fetchList,
  fetchById,
  updateUserRatingById,
};

export default restaurantsApi;
