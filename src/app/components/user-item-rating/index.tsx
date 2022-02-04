import React, { useCallback, useState } from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import ChangeRatingModal from '../change-rating-modal';

import './user-item-rating.scss';

type UserItemRatingProps = {
  itemName: string,
  userRating?: number | null,
  hideLabels?: boolean,
  onUserItemRatingUpdate?: (rating: number) => void
}

export default function UserItemRating({
  itemName,
  userRating = 0,
  hideLabels,
  onUserItemRatingUpdate,
}: UserItemRatingProps) {
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);

  const onRatingChange = useCallback((rating: number) => {
    setIsRatingModalVisible(false);
    onUserItemRatingUpdate && onUserItemRatingUpdate(rating);
  }, [onUserItemRatingUpdate]);

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
          userRating
            ? (
              <Space className="item-rating_content">
                <StarFilled />
                <span>
                  {userRating}
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
        currentRating={userRating}
        onRatingChange={onRatingChange}
        onCancel={() => setIsRatingModalVisible(false)}
      />
    </div>
  );
}
