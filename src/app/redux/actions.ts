import { createAction } from '@reduxjs/toolkit';
import { Food, Restaurant } from '../types';

export const fetchingRestaurantsStart = createAction('FETCHING_RESTAURANTS_START');
export const fetchingRestaurantsSuccess = createAction<Restaurant[]>('FETCHING_RESTAURANTS_SUCCESS');
export const fetchingSingleRestaurantStart = createAction('FETCHING_SINGLE_RESTAURANT_START');
export const fetchingSingleRestaurantSuccess = createAction<Restaurant | null>('FETCHING_SINGLE_RESTAURANT_SUCCESS');
export const updateSingleRestaurant = createAction<Restaurant | null>('UPDATE_SINGLE_RESTAURANT');
export const changeRestaurantsFilter = createAction<{[key: string]: string[]}>('CHANGE_RESTAURANTS_FILTER');
export const changeRestaurantsSort = createAction<string>('CHANGE_RESTAURANTS_SORT');

export const fetchingFoodsStart = createAction('FETCHING_FOODS_START');
export const fetchingFoodsSuccess = createAction<Food[]>('FETCHING_FOODS_SUCCESS');
export const fetchingSingleFoodStart = createAction('FETCHING_SINGLE_FOOD_START');
export const fetchingSingleFoodSuccess = createAction<Food | null>('FETCHING_SINGLE_FOOD_SUCCESS');
export const updateSingleFood = createAction<Food>('UPDATE_SINGLE_FOOD');
export const changeFoodsFilter = createAction<{[key: string]: string[]}>('CHANGE_FOODS_FILTER');
export const changeFoodsSort = createAction<string>('CHANGE_FOODS_SORT');
