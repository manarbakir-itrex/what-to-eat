import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { Space } from 'antd';
import { MAX_RATING } from '../../constants/constants';

import './average-item-rating.scss';

type ItemRatingProps = {
  currentRating: number,
  hideLabels?: boolean
}

export default function AverageItemRating({
  currentRating,
  hideLabels,
}: ItemRatingProps) {
  return (
    <div className="average-item-rating">
      {!hideLabels && (<span className="average-item-rating_label">Average rating</span>)}
      <Space>
        <StarFilled />
        <span>
          {currentRating}
          /
          {MAX_RATING}
        </span>
      </Space>
    </div>
  );
}
