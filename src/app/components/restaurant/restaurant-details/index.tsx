import React from 'react';
import RestaurantsIcon from '../../../../assets/icons/restaurant.svg';
import { Restaurant } from '../../../types';

import './restaunrant-details.scss';
import ItemRating from '../../item-rating';
import UserItemRating from '../../user-item-rating';

type RestaurantDetailsProps = {
  restaurant: Restaurant;
}

export default function RestaurantDetails({ restaurant }: RestaurantDetailsProps) {
  return (
    <div className="restaurant-details">
      <div className="restaurant-details_header">
        <h2 className="restaurant-details_name">{restaurant?.name}</h2>
        <ItemRating currentRating={4} />
        <UserItemRating
          itemName={restaurant.name}
        />
      </div>

      <div className="restaurant-details_description-wrapper">
        <img
          className="restaurant-details_image"
          src={restaurant?.imageUrl || RestaurantsIcon}
          alt={restaurant?.name}
        />
        <p className="restaurant-details_description">
          {restaurant?.description}
        </p>
        <p className="restaurant-details_description">
          {restaurant?.cuisine}
        </p>
      </div>
    </div>
  );
}
