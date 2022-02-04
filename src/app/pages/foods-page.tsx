import React, { useCallback, useEffect, useMemo } from 'react';
import { Card, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import FoodCards from '../components/food/food-cards';
import { selectFoodsFilters, selectFoodsRecords, selectFoodsSort } from '../redux/selectors';
import { fetchFoods, updateFoodUserRatingById } from '../redux/thunk';
import FilterPanel from '../components/common/filter-panel';
import { changeFoodsFilter, changeFoodsSort } from '../redux/actions';
import { FOOD_TAG_TYPES, FOOD_TYPES } from '../constants/constants';
import { usePageTitle } from '../hooks/hooks';

export default function FoodsPage() {
  const dispatch = useDispatch();

  const foods = useSelector(selectFoodsRecords);
  const filters = useSelector(selectFoodsFilters);
  const sort = useSelector(selectFoodsSort);

  const foodFilterDefs = useMemo(() => [
    {
      key: 'type',
      label: 'Type',
      options: FOOD_TYPES,
      initialValue: filters.type,
    },
    {
      key: 'tags',
      label: 'Tags',
      options: FOOD_TAG_TYPES,
      initialValue: filters.tags,
    },
  ], []);

  usePageTitle('Foods');

  useEffect(() => {
    dispatch(fetchFoods(filters, sort));
  }, [filters, sort]);

  const onSortChange = (newSort: string) => {
    dispatch(changeFoodsSort(newSort));
  };

  const onFiltersChange = (filterChanges: { [key: string] : string[] }) => {
    dispatch(changeFoodsFilter({
      ...filters,
      ...filterChanges,
    }));
  };

  const onUserRatingUpdate = useCallback((id, rating) => {
    dispatch(updateFoodUserRatingById(id, rating));
  }, []);

  return (
    <>
      <PageHeader
        title="Foods"
      />
      <Card>
        <FilterPanel
          filterDefs={foodFilterDefs}
          sort={sort}
          onFiltersChange={onFiltersChange}
          onSortChange={onSortChange}
        />
      </Card>
      <FoodCards
        foods={foods}
        onUserRatingUpdate={onUserRatingUpdate}
      />
    </>
  );
}
