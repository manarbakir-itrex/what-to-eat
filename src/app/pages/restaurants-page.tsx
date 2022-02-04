import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, PageHeader } from 'antd';
import { fetchRestaurants, updateRestaurantUserRatingById } from '../redux/thunk';
import { selectRestaurantsFilters, selectRestaurantsRecords, selectRestaurantsSort } from '../redux/selectors';
import RestaurantCards from '../components/restaurant/restaurant-cards';
import RestaurantFilterPanel from '../components/restaurant/restaurant-filter-panel';
import { changeRestaurantsFilter, changeRestaurantsSort } from '../redux/actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantsRecords);
  const filters = useSelector(selectRestaurantsFilters);
  const sort = useSelector(selectRestaurantsSort);

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
        <RestaurantFilterPanel
          filters={filters}
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
