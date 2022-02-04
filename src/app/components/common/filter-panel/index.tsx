import React, { useCallback, useMemo } from 'react';
import { Form, Select } from 'antd';
import { SORT_FIELDS } from '../../../constants/constants';

import './filter-panel.scss';

export type FilterPanelFilterDef = {
  key: string,
  label: string,
  initialValue?: string[],
  options: string[],
}

type FilterPanelProps = {
  filterDefs: FilterPanelFilterDef[],
  sort: string,
  onFiltersChange?: (filterChanges: { [key: string]: string[] }) => void,
  onSortChange?: (sort: string) => void,
}

export default function FilterPanel({
  filterDefs,
  sort,
  onFiltersChange,
  onSortChange,
}: FilterPanelProps) {
  const onSortFieldChange = useCallback((newSortValue) => {
    onSortChange && onSortChange(newSortValue);
  }, [onSortChange]);

  const onFilterFieldChange = useCallback((key, newValue) => {
    onFiltersChange && onFiltersChange({ [key]: newValue });
  }, [onFiltersChange]);

  const initialFilterValues = useMemo(() => filterDefs.reduce((memo: any, filterDef) => ({
    ...memo,
    [filterDef.key]: filterDef.initialValue,
  }), {}), [filterDefs]);

  const filterFields = useMemo(() => filterDefs.map((filterDef) => (
    <Form.Item
      key={`filter-panel-${filterDef.key}`}
      label={filterDef.label}
      name={filterDef.key}
    >
      <Select
        mode="multiple"
        allowClear
        placeholder="Select"
        onChange={(newValue) => onFilterFieldChange(filterDef.key, newValue)}
      >
        {
          filterDef.options.map((option) => (
            <Select.Option
              key={`${filterDef.key}-filter-${option}`}
              value={option}
            >
              {option}
            </Select.Option>
          ))
        }
      </Select>
    </Form.Item>
  )), [filterDefs, onFilterFieldChange]);

  return (
    <Form
      name="filterPanel"
      className="filter-panel"
      layout="inline"
      initialValues={{
        ...initialFilterValues,
        sort,
      }}
      autoComplete="off"
    >
      {filterFields}
      <Form.Item
        label="Sort"
        name="sort"
      >
        <Select
          placeholder="Sort by"
          value={sort}
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
