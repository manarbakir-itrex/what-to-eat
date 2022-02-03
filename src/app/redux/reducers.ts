import { createReducer } from '@reduxjs/toolkit';
import { Restaurant } from '../types';
import {
  fetchingRestaurantsStart,
  fetchingRestaurantsSuccess,
} from './actions';

export type AppState = {
  restaurants: {
    records: Restaurant[],
    recordsAreLoading: boolean,
  }
}

const INITIAL_STATE: AppState = {
  restaurants: {
    records: [],
    recordsAreLoading: false,
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
    }));
});
