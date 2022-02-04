import { createAction } from '@reduxjs/toolkit';
import { Food, Restaurant } from '../types';

export const fetchingRestaurantsStart = createAction('FETCHING_RESTAURANTS_START');
export const fetchingRestaurantsSuccess = createAction<Restaurant[]>('FETCHING_RESTAURANTS_SUCCESS');
export const fetchingSingleRestaurantStart = createAction('FETCHING_SINGLE_RESTAURANT_START');
export const fetchingSingleRestaurantSuccess = createAction<Restaurant | null>('FETCHING_SINGLE_RESTAURANT_SUCCESS');

export const fetchingFoodsStart = createAction('FETCHING_FOODS_START');
export const fetchingFoodsSuccess = createAction<Food[]>('FETCHING_FOODS_SUCCESS');
export const fetchingSingleFoodStart = createAction('FETCHING_SINGLE_FOOD_START');
export const fetchingSingleFoodSuccess = createAction<Food | null>('FETCHING_SINGLE_FOOD_SUCCESS');
