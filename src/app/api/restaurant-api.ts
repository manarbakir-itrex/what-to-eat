import RESTAURANTS_MOCK from '../../mocks/restaurants';
import { restaurantDmToVm, restaurantVmToDm } from '../transformers';
import { RestaurantDm } from '../types';
import MockedApiAdapter from './mocked-api-adapter';

const api = new MockedApiAdapter<RestaurantDm>('restaurants', RESTAURANTS_MOCK);

const fetchList = (filters?: any, sort?: string) => api.getList(filters, sort)
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
