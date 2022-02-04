import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, PageHeader } from 'antd';
import { fetchRestaurants, updateRestaurantUserRatingById } from '../redux/thunk';
import { selectRestaurantsFilters, selectRestaurantsRecords, selectRestaurantsSort } from '../redux/selectors';
import RestaurantCards from '../components/restaurant/restaurant-cards';
import FilterPanel from '../components/common/filter-panel';
import { changeRestaurantsFilter, changeRestaurantsSort } from '../redux/actions';
import { CUISINE_TYPES } from '../constants/constants';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  const restaurants = useSelector(selectRestaurantsRecords);
  const filters = useSelector(selectRestaurantsFilters);
  const sort = useSelector(selectRestaurantsSort);

  const restaurantFilterDefs = useMemo(() => [
    {
      key: 'cuisine_type',
      label: 'Cuisine',
      options: CUISINE_TYPES,
      initialValue: filters.cuisine_type,
    },
  ], []);

  useEffect(() => {
    dispatch(fetchRestaurants(filters, sort));
  }, [filters, sort]);

  const onSortChange = (newSort: string) => {
    dispatch(changeRestaurantsSort(newSort));
  };

  const onFiltersChange = (filterChanges: { [key: string] : string[] }) => {
    dispatch(changeRestaurantsFilter({
      ...filters,
      ...filterChanges,
    }));
  };

  const onUserRatingUpdate = useCallback((id, rating) => {
    dispatch(updateRestaurantUserRatingById(id, rating));
  }, []);

  return (
    <>
      <PageHeader
        title="Restaurants"
      />
      <Card>
        <FilterPanel
          filterDefs={restaurantFilterDefs}
          sort={sort}
          onFiltersChange={onFiltersChange}
          onSortChange={onSortChange}
        />
      </Card>
      <RestaurantCards
        restaurants={restaurants}
        onUserRatingUpdate={onUserRatingUpdate}
      />
    </>
  );
}
