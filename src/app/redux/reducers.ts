import { createReducer } from '@reduxjs/toolkit';
import { Food, Restaurant } from '../types';
import {
  changeFoodsFilter,
  changeFoodsSort,
  changeRestaurantsFilter,
  changeRestaurantsSort,
  fetchingFoodsStart,
  fetchingFoodsSuccess,
  fetchingRestaurantsStart,
  fetchingRestaurantsSuccess,
  fetchingSingleFoodStart,
  fetchingSingleFoodSuccess,
  fetchingSingleRestaurantStart,
  fetchingSingleRestaurantSuccess,
  updateSingleFood,
  updateSingleRestaurant,
} from './actions';
import { SORT_FIELDS } from '../constants/constants';

export type AppState = {
  restaurants: {
    listFilters: { [key: string]: string[] },
    listSort: string,
    records: Restaurant[],
    recordsAreLoading: boolean,
    singleRecord: Restaurant | null,
    singleRecordIsLoading: boolean,
  },
  foods: {
    listFilters: { [key: string]: string[] },
    listSort: string,
    records: Food[],
    recordsAreLoading: boolean,
    singleRecord: Food | null,
    singleRecordIsLoading: boolean,
  }
}

const INITIAL_STATE: AppState = {
  restaurants: {
    listFilters: {},
    listSort: SORT_FIELDS[0].field,
    records: [],
    recordsAreLoading: false,
    singleRecord: null,
    singleRecordIsLoading: false,
  },
  foods: {
    listFilters: {},
    listSort: SORT_FIELDS[0].field,
    records: [],
    recordsAreLoading: false,
    singleRecord: null,
    singleRecordIsLoading: false,
  },
};

export const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    // Restaurants part
    .addCase(fetchingRestaurantsStart, (state) => ({
      ...state,
      restaurants: {
        ...state.restaurants,
        recordsAreLoading: true,
      },
    }))
    .addCase(fetchingRestaurantsSuccess, (state, { payload }) => ({
      ...state,
      restaurants: {
        ...state.restaurants,
        records: payload,
        recordsAreLoading: false,
      },
    }))
    .addCase(fetchingSingleRestaurantStart, (state) => ({
      ...state,
      restaurants: {
        ...state.restaurants,
        singleRecordIsLoading: true,
      },
    }))
    .addCase(fetchingSingleRestaurantSuccess, (state, { payload }) => ({
      ...state,
      restaurants: {
        ...state.restaurants,
        singleRecord: payload,
        singleRecordIsLoading: false,
      },
    }))
    .addCase(updateSingleRestaurant, (state, { payload }) => ({
      ...state,
      restaurants: {
        ...state.restaurants,
        singleRecord: payload,
      },
    }))
    .addCase(changeRestaurantsFilter, (state, { payload }) => ({
      ...state,
      restaurants: {
        ...state.restaurants,
        listFilters: payload,
      },
    }))
    .addCase(changeRestaurantsSort, (state, { payload }) => ({
      ...state,
      restaurants: {
        ...state.restaurants,
        listSort: payload,
      },
    }))

    // Foods part
    .addCase(fetchingFoodsStart, (state) => ({
      ...state,
      foods: {
        ...state.foods,
        recordsAreLoading: true,
      },
    }))
    .addCase(fetchingFoodsSuccess, (state, { payload }) => ({
      ...state,
      foods: {
        ...state.foods,
        records: payload,
        recordsAreLoading: false,
      },
    }))
    .addCase(fetchingSingleFoodStart, (state) => ({
      ...state,
      foods: {
        ...state.foods,
        singleRecordIsLoading: true,
      },
    }))
    .addCase(fetchingSingleFoodSuccess, (state, { payload }) => ({
      ...state,
      foods: {
        ...state.foods,
        singleRecord: payload,
        singleRecordIsLoading: false,
      },
    }))
    .addCase(updateSingleFood, (state, { payload }) => ({
      ...state,
      foods: {
        ...state.foods,
        singleRecord: payload,
      },
    }))
    .addCase(changeFoodsFilter, (state, { payload }) => ({
      ...state,
      foods: {
        ...state.foods,
        listFilters: payload,
      },
    }))
    .addCase(changeFoodsSort, (state, { payload }) => ({
      ...state,
      foods: {
        ...state.foods,
        listSort: payload,
      },
    }));
});
