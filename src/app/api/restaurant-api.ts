import RESTAURANTS_MOCK from '../../mocks/restaurants';
import { restaurantDmToVm } from '../transformers/restaurant-transformer';
import { Restaurant } from '../types';

const fetchList = () => new Promise<Restaurant[]>((res) => {
  res(RESTAURANTS_MOCK.map((restaurant) => restaurantDmToVm(restaurant)));
});

const fetchById = (id: string) => new Promise<Restaurant>((res, rej) => {
  const foundRestaurant = RESTAURANTS_MOCK.find((restaurant) => (restaurant.id === id));

  foundRestaurant
    ? res(restaurantDmToVm(foundRestaurant))
    : rej(new Error('not found'));
});

const restaurantsApi = {
  fetchList,
  fetchById,
};

export default restaurantsApi;
