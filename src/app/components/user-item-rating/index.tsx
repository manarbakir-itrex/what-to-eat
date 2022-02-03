import React, { useState } from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import ChangeRatingModal from '../change-rating-modal';

type UserItemRatingProps = {
  itemName: string,
  userRating?: number | null
}

export default function UserItemRating({
  itemName,
  userRating = 0,
}: UserItemRatingProps) {
  const [currentUserRating, setCurrentUserRating] = useState(userRating);
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);

  const onRatingChange = (rating: number) => {
    setCurrentUserRating(rating);
    setIsRatingModalVisible(false);
  };

  return (
    <div className="item-rating">
      <span className="item-rating_label">Your rating</span>
      <div onClick={() => setIsRatingModalVisible(true)} role="button">
        {
          currentUserRating
            ? (
              <div className="item-rating_content">
                <StarFilled />
                <span>
                  {currentUserRating}
                </span>
              </div>

            )
            : (
              <div className="item-rating_content">
                <StarOutlined />
                <span>Rate now</span>
              </div>
            )
          }
      </div>
      <ChangeRatingModal
        itemName={itemName}
        isShown={isRatingModalVisible}
        currentRating={currentUserRating}
        onRatingChange={onRatingChange}
        onCancel={() => setIsRatingModalVisible(false)}
      />
    </div>
  );
}
