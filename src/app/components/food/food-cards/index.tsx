import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsWrapper from '../../common/cards-wrapper';
import { Food } from '../../../types';
import FoodCardDetails from '../food-card-details';

type FoodCardsProps = {
  foods: Food[],
  onUserRatingUpdate?: (id: string, rating: string) => void,
};

export default function FoodCards({
  foods,
  onUserRatingUpdate,
}: FoodCardsProps) {
  const navigate = useNavigate();

  const onCardClick = useCallback((id) => {
    navigate(`/foods/${id}`);
  }, [navigate]);

  const onUserRestaurantRatingUpdate = useCallback((id, rating) => {
    onUserRatingUpdate && onUserRatingUpdate(id, rating);
  }, []);

  return (
    <CardsWrapper>
      {
        foods?.map((food) => (
          <FoodCardDetails
            key={food.id}
            food={food}
            onClick={onCardClick}
            onUserRatingUpdate={(rating) => onUserRestaurantRatingUpdate(food.id, rating)}
          />
        ))
      }
    </CardsWrapper>
  );
}
