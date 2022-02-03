/* eslint-disable camelcase */
import { Restaurant } from '../types';

type RestaurantDm = {
  id: string,
  name: string,
  address: string,
  cuisine_type: string,
  operating_hours: any,
  img?: string | null,
}

export const restaurantDmToVm = ({
  id,
  name,
  img,
  address,
  cuisine_type,
}: RestaurantDm): Restaurant => ({
  id,
  name,
  address,
  imageUrl: img,
  cuisine: cuisine_type,
});
