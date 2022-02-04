import { createSelector } from '@reduxjs/toolkit';
import { AppState } from './reducers';

export const selectRestaurantsState = (state: AppState) => state.restaurants;

export const selectRestaurantsRecords = createSelector(
  selectRestaurantsState,
  (restaurantsData) => restaurantsData.records,
);

export const selectRestaurantsSort = createSelector(
  selectRestaurantsState,
  (restaurantsData) => restaurantsData.listSort,
);

export const selectRestaurantsFilters = createSelector(
  selectRestaurantsState,
  (restaurantsData) => restaurantsData.listFilters,
);

export const selectSingleRestaurantRecord = createSelector(
  selectRestaurantsState,
  (restaurantsData) => restaurantsData.singleRecord,
);

export const selectFoodsState = (state: AppState) => state.foods;

export const selectFoodsRecords = createSelector(
  selectFoodsState,
  (foodsData) => foodsData.records,
);

export const selectFoodsSort = createSelector(
  selectFoodsState,
  (foodsData) => foodsData.listSort,
);

export const selectFoodsFilters = createSelector(
  selectFoodsState,
  (foodsData) => foodsData.listFilters,
);

export const selectSingleFoodRecord = createSelector(
  selectFoodsState,
  (foodsData) => foodsData.singleRecord,
);
