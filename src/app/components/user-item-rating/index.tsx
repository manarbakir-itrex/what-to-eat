import React, { useState } from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import ChangeRatingModal from '../change-rating-modal';

import './user-item-rating.scss';

type UserItemRatingProps = {
  itemName: string,
  userRating?: number | null,
  hideLabels?: boolean,
}

export default function UserItemRating({
  itemName,
  userRating = 0,
  hideLabels,
}: UserItemRatingProps) {
  const [currentUserRating, setCurrentUserRating] = useState(userRating);
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);

  const onRatingChange = (rating: number) => {
    setCurrentUserRating(rating);
    setIsRatingModalVisible(false);
  };

  const onClick = (e: any) => {
    e.stopPropagation();
    setIsRatingModalVisible(true);
  };

  return (
    <div className="user-item-rating" onClick={(e) => e.stopPropagation()}>
      <Button
        type="text"
        className="user-item-rating_content"
        onClick={onClick}
      >
        {!hideLabels && (<span className="item-rating_label">Your rating</span>)}
        {
          currentUserRating
            ? (
              <Space className="item-rating_content">
                <StarFilled />
                <span>
                  {currentUserRating}
                </span>
              </Space>
            )
            : (
              <Space className="item-rating_content">
                <StarOutlined />
                {!hideLabels && (<span>Rate</span>)}
              </Space>
            )
          }
      </Button>
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
