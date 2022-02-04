import { notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';

const DEFAULT_PLACEMENT = 'bottomRight';

const success = (
  message: string,
  placement: NotificationPlacement = DEFAULT_PLACEMENT,
) => notification.success({
  message,
  placement,
});

const error = (
  message: string,
  placement: NotificationPlacement = DEFAULT_PLACEMENT,
) => notification.error({
  message,
  placement,
});

const toastService = {
  success,
  error,
};

export default toastService;
