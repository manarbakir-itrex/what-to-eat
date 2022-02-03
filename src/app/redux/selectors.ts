import { createSelector } from '@reduxjs/toolkit';
import { AppState } from './reducers';

export const selectRestaurantsState = (state: AppState) => state.restaurants;

export const selectRestaurantsRecords = createSelector(
  selectRestaurantsState,
  (restaurantsData) => restaurantsData.records,
);

export const selectSingleRestaurantRecord = createSelector(
  selectRestaurantsState,
  (restaurantsData) => restaurantsData.singleRecord,
);
