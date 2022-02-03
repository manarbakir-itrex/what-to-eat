import { createReducer } from '@reduxjs/toolkit';
import { Restaurant } from '../types';
import {
  fetchingRestaurantsStart,
  fetchingRestaurantsSuccess,
  fetchingSingleRestaurantStart,
  fetchingSingleRestaurantSuccess,
} from './actions';

export type AppState = {
  restaurants: {
    records: Restaurant[],
    recordsAreLoading: boolean,
    singleRecord: Restaurant | null,
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
    }));
});
