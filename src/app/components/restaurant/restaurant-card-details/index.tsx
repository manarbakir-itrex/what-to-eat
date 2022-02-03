import React from 'react';
import { Card } from 'antd';
import RestaurantsIcon from '../../../../assets/icons/restaurant.svg';
import { Restaurant } from '../../../types';

import './restaurant-card-details.scss';

type RestaurantCardProps = {
  data: Restaurant,
}

export default function RestaurantCardDetails({ data }: RestaurantCardProps) {
  return (
    <Card className="restaurant-card" hoverable>
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
