import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsWrapper from '../../common/cards-wrapper';
import RestaurantCardDetails from '../restaurant-card-details';
import { Restaurant } from '../../../types';

type RestaurantCardsProps = {
  restaurants: Restaurant[],
  onUserRatingUpdate?: (id: string, rating: string) => void,
};

export default function RestaurantCards({
  restaurants,
  onUserRatingUpdate,
}: RestaurantCardsProps) {
  const navigate = useNavigate();

  const onCardClick = useCallback((id) => {
    navigate(`/restaurants/${id}`);
  }, [navigate]);

  const onUserRestaurantRatingUpdate = useCallback((id, rating) => {
    onUserRatingUpdate && onUserRatingUpdate(id, rating);
  }, []);

  return (
    <CardsWrapper>
      {
        restaurants?.map((restaurant) => (
          <RestaurantCardDetails
            key={restaurant.id}
            restaurant={restaurant}
            onClick={onCardClick}
            onUserRatingUpdate={(rating) => onUserRestaurantRatingUpdate(restaurant.id, rating)}
          />
        ))
      }
    </CardsWrapper>
  );
}
