import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { MAX_RATING } from '../../constants/constants';

type ItemRatingProps = {
  currentRating: number
}

export default function ItemRating({ currentRating }: ItemRatingProps) {
  return (
    <div className="item-rating">
      <span className="item-rating_label">Average rating</span>
      <div>
        <StarFilled />
        <span>
          {currentRating}
          /
          {MAX_RATING}
        </span>
      </div>
    </div>
  );
}
