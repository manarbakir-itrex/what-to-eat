import React, { useCallback } from 'react';
import { Card, Space } from 'antd';
import RestaurantsIcon from '../../../../assets/icons/restaurant.svg';
import { Restaurant } from '../../../types';
import AverageItemRating from '../../average-item-rating';
import UserItemRating from '../../user-item-rating';

import './restaurant-card-details.scss';

type RestaurantCardProps = {
  restaurant: Restaurant,
  onClick?: (id: string) => void,
  onUserRatingUpdate?: (rating: number) => void,
}

export default function RestaurantCardDetails({
  restaurant,
  onClick,
  onUserRatingUpdate,
}: RestaurantCardProps) {
  const onCardClick = useCallback(() => {
    onClick && onClick(restaurant.id);
  }, [onClick, restaurant]);

  return (
    <Card
      className="restaurant-card"
      hoverable
      onClick={onCardClick}
      cover={(
        <figure className="restaurant-card_image-box">
          <img
            className="restaurant-card_image"
            src={restaurant.imageUrl || RestaurantsIcon}
            alt={restaurant.name}
          />
        </figure>
      )}
    >
      <h3 className="restaurant-card_title">
        {restaurant.name}
      </h3>
      <div className="restaurant-card_rating">
        <AverageItemRating
          currentRating={restaurant.rating}
          hideLabels
        />
        <UserItemRating
          itemName={restaurant.name}
          userRating={restaurant.userRating}
          onUserItemRatingUpdate={onUserRatingUpdate}
          hideLabels
        />
      </div>
      <Space className="restaurant-card_cuisine">
        Cuisine:
        {restaurant.cuisine}
      </Space>
    </Card>
  );
}
