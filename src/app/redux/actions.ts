import { createAction } from '@reduxjs/toolkit';
import { Restaurant } from '../types';

export const fetchingRestaurantsStart = createAction('FETCHING_RESTAURANTS_START');
export const fetchingRestaurantsSuccess = createAction<Restaurant[]>('FETCHING_RESTAURANTS_SUCCESS');
export const fetchingSingleRestaurantStart = createAction('FETCHING_SINGLE_RESTAURANT_START');
export const fetchingSingleRestaurantSuccess = createAction<Restaurant | null>('FETCHING_SINGLE_RESTAURANT_SUCCESS');
