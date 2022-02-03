import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../redux/thunk';
import { selectRestaurantsRecords } from '../redux/selectors';
import RestaurantCards from '../components/restaurant/restaurant-cards';

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantsRecords);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  return (
    <div>
      Restaurants list
      <RestaurantCards restaurants={restaurants} />
    </div>
  );
}
