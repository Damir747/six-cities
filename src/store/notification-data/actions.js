import { APPEND_NOTIFICATION, REMOVE_NOTIFICATION } from "./actions-types";

const appendNotification = (notifiation) => ({
  type: APPEND_NOTIFICATION,
  payload: notifiation,
});

const removeNotification = (id) => ({
  type: REMOVE_NOTIFICATION,
  meta: id,
});

export {
  appendNotification,
  removeNotification
};
