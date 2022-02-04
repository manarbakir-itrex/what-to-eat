import FOODS_MOCK from '../../mocks/food';
import { foodDmToVm, foodVmToDm } from '../transformers';
import { FoodDm } from '../types';
import MockedApiAdapter from './mocked-api-adapter';

const api = new MockedApiAdapter<FoodDm>('foods', FOODS_MOCK);

const fetchList = () => api.getList()
  .then((foodDm) => foodDm.map(foodDmToVm));

const fetchById = (id: string) => api.get(id)
  .then((food) => foodDmToVm(food));

const updateUserRatingById = (id: string, userRating: number) => api.post(
  id,
  foodVmToDm({ userRating }),
);

const restaurantsApi = {
  fetchList,
  fetchById,
  updateUserRatingById,
};

export default restaurantsApi;
