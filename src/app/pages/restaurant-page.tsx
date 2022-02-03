import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSingleRestaurantRecord } from '../redux/selectors';
import { fetchRestaurantById } from '../redux/thunk';
import RestaurantDetails from '../components/restaurant/restaurant-details';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(selectSingleRestaurantRecord);

  useEffect(() => {
    if (id) {
      dispatch(fetchRestaurantById(id));
    }
  }, [id]);

  return (
    <div>
      {
        restaurant ? (<RestaurantDetails restaurant={restaurant} />) : (<div />)
      }
    </div>
  );
}
