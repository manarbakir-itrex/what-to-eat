import React, { useCallback, useState } from 'react';
import { Modal, Rate, Space } from 'antd';
import { MAX_RATING } from '../../constants/constants';

type ChangeRatingModalProps = {
  itemName: string,
  currentRating: number | null,
  onRatingChange?: Function,
  onCancel?: Function,
  isShown: boolean,
}

export default function ChangeRatingModal({
  itemName,
  currentRating,
  onRatingChange,
  onCancel,
  isShown,
}: ChangeRatingModalProps) {
  const [selectedRating, setSelectedRating] = useState(currentRating || 0);

  const onOk = useCallback(() => {
    onRatingChange && onRatingChange(selectedRating);
  }, [selectedRating, onRatingChange]);

  const onCancelClick = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  return (
    <Modal
      className="change-rating-modal"
      visible={isShown}
      onOk={onOk}
      onCancel={onCancelClick}
    >
      <h2 className="change-rating-modal_title">
        <Space>
          Rate this:
          {itemName}
        </Space>
      </h2>
      <div className="change-rating-modal_rating">
        <Rate
          value={selectedRating}
          onChange={setSelectedRating}
          count={MAX_RATING}
        />
      </div>
    </Modal>
  );
}
