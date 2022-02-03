import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsWrapper from '../../common/cards-wrapper';
import RestaurantCardDetails from '../restaurant-card-details';
import { Restaurant } from '../../../types';

export default function RestaurantCards({ restaurants }: {restaurants: Restaurant[]}) {
  const navigate = useNavigate();

  const onCardClick = useCallback((id) => {
    navigate(`/restaurants/${id}`);
  }, [navigate]);

  return (
    <CardsWrapper>
      {
        restaurants?.map((restaurant) => (
          <RestaurantCardDetails
            key={restaurant.id}
            data={restaurant}
            onClick={onCardClick}
          />
        ))
      }
    </CardsWrapper>
  );
}
