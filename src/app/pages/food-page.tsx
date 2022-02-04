import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSingleFoodRecord } from '../redux/selectors';
import {
  fetchFoodById,
  updateFoodUserRatingById,
} from '../redux/thunk';
import FoodDetails from '../components/food/food-details';

export default function FoodPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const food = useSelector(selectSingleFoodRecord);

  useEffect(() => {
    if (id) {
      dispatch(fetchFoodById(id));
    }
  }, [id]);

  const onUserRatingUpdate = useCallback((rating: number) => {
    if (id) {
      dispatch(updateFoodUserRatingById(id, rating));
    }
  }, [id]);

  return (
    <div>
      {
        food ? (
          <FoodDetails
            food={food}
            onUserRatingUpdate={onUserRatingUpdate}
          />
        ) : (<div />)
      }
    </div>
  );
}
