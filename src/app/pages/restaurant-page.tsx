import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSingleRestaurantRecord } from '../redux/selectors';
import { fetchRestaurantById, updateRestaurantUserRatingById } from '../redux/thunk';
import RestaurantDetails from '../components/restaurant/restaurant-details';
import { updateSingleRestaurant } from '../redux/actions';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector(selectSingleRestaurantRecord);

  useEffect(() => {
    if (id) {
      dispatch(fetchRestaurantById(id));
    }
  }, [id]);

  const onUserRatingUpdate = useCallback(async (userRating: number) => {
    if (id && restaurant) {
      await dispatch(updateRestaurantUserRatingById(id, userRating));
      dispatch(updateSingleRestaurant({
        ...restaurant,
        userRating,
      }));
    }
  }, [id, restaurant]);

  return (
    <div>
      {
        restaurant ? (
          <RestaurantDetails
            restaurant={restaurant}
            onUserRatingUpdate={onUserRatingUpdate}
          />
        ) : (<div />)
      }
    </div>
  );
}
