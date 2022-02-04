import React, { useCallback, useMemo } from 'react';
import { Card, Space, Tag } from 'antd';
import FoodIcon from '../../../../assets/icons/food.png';
import { Food } from '../../../types';
import AverageItemRating from '../../average-item-rating';
import UserItemRating from '../../user-item-rating';

import './food-card-details.scss';

type FoodCardProps = {
  food: Food,
  onClick?: (id: string) => void,
  onUserRatingUpdate?: (rating: number) => void,
}

const MAX_TAGS = 3;

export default function FoodCardDetails({
  food,
  onClick,
  onUserRatingUpdate,
}: FoodCardProps) {
  const onCardClick = useCallback(() => {
    onClick && onClick(food.id);
  }, [onClick, food]);

  const tags = useMemo(() => {
    const tagsElements = [];

    if (food.tags) {
      const isMore = food.tags.length > MAX_TAGS;
      const tagsCount = isMore ? MAX_TAGS - 1 : food.tags.length;

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < tagsCount; i++) {
        tagsElements.push(
          <Tag key={`food-${food.id}-tag-${food.tags[i]}`}>
            {food.tags[i]}
          </Tag>,
        );
      }

      // push ellipsis tag
      if (isMore) {
        tagsElements.push(
          <Tag key={`food-${food.id}-ellipsis-tag`}>
            ...
          </Tag>,
        );
      }
    }

    return tagsElements;
  }, [food]);

  return (
    <Card
      className="food-card"
      hoverable
      onClick={onCardClick}
      cover={(
        <figure className="food-card_image-box">
          <img
            className="food-card_image"
            src={food.imageUrl || FoodIcon}
            alt={food.name}
          />
        </figure>
      )}
    >
      <h3 className="food-card_title">
        {food.name}
      </h3>
      <div className="food-card_rating">
        <AverageItemRating
          currentRating={food.rating}
          hideLabels
        />
        <UserItemRating
          itemName={food.name}
          userRating={food.userRating}
          onUserItemRatingUpdate={onUserRatingUpdate}
          hideLabels
        />
      </div>
      <Space className="food-card_type">
        Type:
        {food.type}
      </Space>
      {tags.length && (
        <div className="food-card_tags">
          {tags}
        </div>
      )}
    </Card>
  );
}
