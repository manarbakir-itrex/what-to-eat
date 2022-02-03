import React from 'react';
import RestaurantsIcon from '../../../../assets/icons/restaurant.svg';
import { Restaurant } from '../../../types';

import './restaunrant-details.scss';
import AverageItemRating from '../../average-item-rating';
import UserItemRating from '../../user-item-rating';

type RestaurantDetailsProps = {
  restaurant: Restaurant;
}

export default function RestaurantDetails({ restaurant }: RestaurantDetailsProps) {
  return (
    <div className="restaurant-details">
      <div className="restaurant-details_header">
        <h2 className="restaurant-details_name">{restaurant?.name}</h2>

        <div className="restaurant-details_rating">
          <AverageItemRating currentRating={4} />
          <UserItemRating itemName={restaurant.name} />
        </div>
      </div>

      <div className="restaurant-details_description-wrapper">
        <figure className="restaurant-details_image-wrapper">
          <img
            className="restaurant-details_image"
            src={restaurant?.imageUrl || RestaurantsIcon}
            alt={restaurant?.name}
          />
        </figure>

        <p className="restaurant-details_cuisine">
          {restaurant?.cuisine}
        </p>

        <p className="restaurant-details_description">
          {restaurant?.description}
        </p>

        <p className="restaurant-details_address">
          {restaurant?.address}
        </p>
      </div>
    </div>
  );
}
