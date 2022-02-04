/* eslint-disable camelcase */
import { Food, FoodDm } from '../types';

export const foodDmToVm = ({
  id,
  name,
  description,
  img,
  type,
  rating,
  tags,
  user_rating,
}: FoodDm): Food => ({
  id,
  name,
  description,
  rating,
  tags,
  imageUrl: img,
  type,
  userRating: user_rating,
});

export const foodVmToDm = ({
  userRating,
}: Partial<Food>): Partial<FoodDm> => ({
  user_rating: userRating,
});
