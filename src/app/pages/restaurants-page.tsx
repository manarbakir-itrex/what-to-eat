import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader } from 'antd';
import { fetchRestaurants, updateRestaurantUserRatingById } from '../redux/thunk';
import { selectRestaurantsRecords } from '../redux/selectors';
import RestaurantCards from '../components/restaurant/restaurant-cards';

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantsRecords);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  const onUserRatingUpdate = useCallback((id, rating) => {
    dispatch(updateRestaurantUserRatingById(id, rating));
  }, []);

  return (
    <div>
      <PageHeader
        title="Restaurants"
      />
      <RestaurantCards
        restaurants={restaurants}
        onUserRatingUpdate={onUserRatingUpdate}
      />
    </div>
  );
}
