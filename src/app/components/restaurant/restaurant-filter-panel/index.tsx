import React, { useCallback, useState } from 'react';
import { Form, Select } from 'antd';
import { CUISINE_TYPES, SORT_FIELDS } from '../../../constants/constants';

import './restaurant-filter-panel.scss';

type RestaurantFilterPanelProps = {
  filters: { [key: string]: string[] },
  sort: string,
  onFiltersChange?: (filterChanges: { [key: string]: string[] }) => void,
  onSortChange?: (sort: string) => void,
}

export default function RestaurantFilterPanel({
  filters = {},
  sort,
  onFiltersChange,
  onSortChange,
}: RestaurantFilterPanelProps) {
  const [cuisineFilter, setCuisineFilter] = useState(filters.cuisine_type || []);

  const onSortFieldChange = useCallback((newSortValue) => {
    onSortChange && onSortChange(newSortValue);
  }, [onSortChange]);

  const onCuisineFilterChange = useCallback((newValue) => {
    setCuisineFilter(newValue);
    onFiltersChange && onFiltersChange({ cuisine_type: newValue });
  }, [onFiltersChange]);

  return (
    <Form
      name="restaurantFilter"
      className="restaurant-filter"
      layout="inline"
      initialValues={{
        sort,
        cuisineFilter,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Cuisine"
        name="cuisineFilter"
      >
        <Select
          mode="multiple"
          allowClear
          placeholder="Select"
          value={cuisineFilter}
          onChange={onCuisineFilterChange}
        >
          {
            CUISINE_TYPES.map((cuisine) => (
              <Select.Option
                key={`cuisine-filter-${cuisine}`}
                value={cuisine}
              >
                {cuisine}
              </Select.Option>
            ))
          }
        </Select>
      </Form.Item>
      <Form.Item
        label="Sort"
        name="sort"
      >
        <Select
          placeholder="Sort by"
          value={sort}
          // defaultValue={SORT_FIELDS[0].field}
          onChange={onSortFieldChange}
        >
          {
            SORT_FIELDS.map((sortOption) => (
              <Select.Option
                key={`sort-${sortOption.field}`}
                value={sortOption.field}
              >
                {sortOption.displayName}
              </Select.Option>
            ))
          }
        </Select>
      </Form.Item>
    </Form>
  );
}
