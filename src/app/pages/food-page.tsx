import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSingleFoodRecord } from '../redux/selectors';
import {
  fetchFoodById,
  updateFoodUserRatingById,
} from '../redux/thunk';
import FoodDetails from '../components/food/food-details';
import { updateSingleFood } from '../redux/actions';
import { usePageTitle } from '../hooks/hooks';

export default function FoodPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const food = useSelector(selectSingleFoodRecord);

  usePageTitle(food?.name);

  useEffect(() => {
    if (id) {
      dispatch(fetchFoodById(id));
    }
  }, [id]);

  const onUserRatingUpdate = useCallback(async (userRating: number) => {
    if (id && food) {
      await dispatch(updateFoodUserRatingById(id, userRating));
      dispatch(updateSingleFood({
        ...food,
        userRating,
      }));
    }
  }, [id, food]);

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
