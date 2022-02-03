import React, { useCallback } from 'react';
import { Card } from 'antd';
import RestaurantsIcon from '../../../../assets/icons/restaurant.svg';
import { Restaurant } from '../../../types';

import './restaurant-card-details.scss';
import AverageItemRating from '../../average-item-rating';
import UserItemRating from '../../user-item-rating';

type RestaurantCardProps = {
  data: Restaurant,
  onClick?: Function,
}

export default function RestaurantCardDetails({ data, onClick }: RestaurantCardProps) {
  const onCardClick = useCallback(() => {
    onClick && onClick(data.id);
  }, [onClick, data]);

  return (
    <Card
      className="restaurant-card"
      hoverable
      onClick={onCardClick}
      cover={(
        <figure className="restaurant-card_image-box">
          <img
            className="restaurant-card_image"
            src={data.imageUrl || RestaurantsIcon}
            alt={data.name}
          />
        </figure>
      )}
    >
      <h3 className="restaurant-card_title">
        {data.name}
      </h3>
      <div className="restaurant-card_rating">
        <AverageItemRating currentRating={4} hideLabels />
        <UserItemRating itemName={data.name} hideLabels />
      </div>
      <span className="restaurant-card_cuisine">
        {data.cuisine}
      </span>
    </Card>
  );
}
