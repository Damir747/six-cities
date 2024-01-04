import { APPEND_NOTIFICATION, REMOVE_NOTIFICATION } from "./actions-types";

const appendNotification = (notification) => ({
  type: APPEND_NOTIFICATION,
  payload: notification,
});

const removeNotification = (id) => ({
  type: REMOVE_NOTIFICATION,
  payload: id,
});

export {
  appendNotification,
  removeNotification
};
