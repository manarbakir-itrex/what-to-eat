import React from 'react';
import CardsWrapper from '../../common/cards-wrapper';
import RestaurantCardDetails from '../restaurant-card-details';
import { Restaurant } from '../../../types';

export default function RestaurantCards({ restaurants }: {restaurants: Restaurant[]}) {
  return (
    <CardsWrapper>
      {
        restaurants?.map((restaurant) => (
          <RestaurantCardDetails
            key={restaurant.id}
            data={restaurant}
          />
        ))
      }
    </CardsWrapper>
  );
}
