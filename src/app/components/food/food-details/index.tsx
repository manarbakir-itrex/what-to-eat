import React from 'react';
import { Tag } from 'antd';
import FoodIcon from '../../../../assets/icons/food.png';
import { Food } from '../../../types';
import AverageItemRating from '../../average-item-rating';
import UserItemRating from '../../user-item-rating';

import './food-details.scss';

type FoodDetailsProps = {
  food: Food,
  onUserRatingUpdate: (rating: number) => void,
}

export default function FoodDetails({
  food,
  onUserRatingUpdate,
}: FoodDetailsProps) {
  return (
    <div className="food-details">
      <div className="food-details_header">
        <h2 className="food-details_name">{food?.name}</h2>

        <div className="food-details_rating">
          <AverageItemRating currentRating={food.rating} />
          <UserItemRating
            itemName={food.name}
            userRating={food.userRating}
            onUserItemRatingUpdate={onUserRatingUpdate}
          />
        </div>
      </div>

      <div className="food-details_description-wrapper">
        <figure className="food-details_image-wrapper">
          <img
            className="food-details_image"
            src={food?.imageUrl || FoodIcon}
            alt={food?.name}
          />
        </figure>

        <p className="food-details_type">
          {food?.type}
        </p>

        {food?.description && (
          <p className="food-details_description">
            {food?.description}
          </p>
        )}

        {food?.tags?.length && (
          <p className="food-details_tags">
            {food.tags.map((tag) => (
              <Tag key={`food-${food.id}-tag-${tag}`}>
                {tag}
              </Tag>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
