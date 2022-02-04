import { createReducer } from '@reduxjs/toolkit';
import { Food, Restaurant } from '../types';
import {
  fetchingFoodsStart,
  fetchingFoodsSuccess,
  fetchingRestaurantsStart,
  fetchingRestaurantsSuccess,
  fetchingSingleFoodStart,
  fetchingSingleFoodSuccess,
  fetchingSingleRestaurantStart,
  fetchingSingleRestaurantSuccess,
} from './actions';

export type AppState = {
  restaurants: {
    records: Restaurant[],
    recordsAreLoading: boolean,
    singleRecord: Restaurant | null,
    singleRecordIsLoading: boolean,
  },
  foods: {
    records: Food[],
    recordsAreLoading: boolean,
    singleRecord: Food | null,
    singleRecordIsLoading: boolean,
  }
}

const INITIAL_STATE: AppState = {
  restaurants: {
    records: [],
    recordsAreLoading: false,
    singleRecord: null,
    singleRecordIsLoading: false,
  },
  foods: {
    records: [],
    recordsAreLoading: false,
    singleRecord: null,
    singleRecordIsLoading: false,
  },
};

export const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder
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
    }));
});
