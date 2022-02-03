import RESTAURANTS_MOCK from '../../mocks/restaurants';
import { restaurantDmToVm } from '../transformers/restaurant-transformer';
import { Restaurant } from '../types';

const fetchList = () => new Promise<Restaurant[]>((res) => {
  res(RESTAURANTS_MOCK.map((restaurant) => restaurantDmToVm(restaurant)));
});

const restaurantsApi = {
  fetchList,
};

export default restaurantsApi;
