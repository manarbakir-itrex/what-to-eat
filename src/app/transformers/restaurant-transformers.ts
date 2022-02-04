/* eslint-disable camelcase */
import { Restaurant, RestaurantDm } from '../types';

export const restaurantDmToVm = ({
  id,
  name,
  description,
  img,
  address,
  cuisine_type,
  rating,
  user_rating,
}: RestaurantDm): Restaurant => ({
  id,
  name,
  description,
  rating,
  address,
  imageUrl: img,
  cuisine: cuisine_type,
  userRating: user_rating,
});

export const restaurantVmToDm = ({
  userRating,
}: Partial<Restaurant>): Partial<RestaurantDm> => ({
  user_rating: userRating,
});
