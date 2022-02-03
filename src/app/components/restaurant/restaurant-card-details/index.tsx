import React, { useCallback } from 'react';
import { Card } from 'antd';
import RestaurantsIcon from '../../../../assets/icons/restaurant.svg';
import { Restaurant } from '../../../types';

import './restaurant-card-details.scss';

type RestaurantCardProps = {
  data: Restaurant,
  onClick?: Function,
}

export default function RestaurantCardDetails({ data, onClick }: RestaurantCardProps) {
  const onCardClick = useCallback(() => {
    onClick && onClick(data.id);
  }, [onClick, data]);

  return (
    <Card className="restaurant-card" hoverable onClick={onCardClick}>
      <figure className="restaurant-card_image-box">
        <img
          className="restaurant-card_image"
          src={data.imageUrl || RestaurantsIcon}
          alt={data.name}
        />
      </figure>
      {data.name}
    </Card>
  );
}
