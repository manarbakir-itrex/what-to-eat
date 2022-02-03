/* eslint-disable camelcase */
import { Restaurant } from '../types';

type RestaurantDm = {
  id: string,
  name: string,
  description?: string,
  address: string,
  cuisine_type: string,
  operating_hours: any,
  img?: string | null,
}

export const restaurantDmToVm = ({
  id,
  name,
  description,
  img,
  address,
  cuisine_type,
}: RestaurantDm): Restaurant => ({
  id,
  name,
  description,
  address,
  imageUrl: img,
  cuisine: cuisine_type,
});
