import React, { useCallback, useEffect } from 'react';
import { PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import FoodCards from '../components/food/food-cards';
import { selectFoodsRecords } from '../redux/selectors';
import { fetchFoods, updateFoodUserRatingById } from '../redux/thunk';

export default function FoodsPage() {
  const dispatch = useDispatch();
  const foods = useSelector(selectFoodsRecords);

  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  const onUserRatingUpdate = useCallback((id, rating) => {
    dispatch(updateFoodUserRatingById(id, rating));
  }, []);

  return (
    <>
      <PageHeader
        title="Foods"
      />
      <FoodCards
        foods={foods}
        onUserRatingUpdate={onUserRatingUpdate}
      />
    </>
  );
}
