/* eslint-disable indent */
import { APPEND_NOTIFICATION, REMOVE_NOTIFICATION } from './actions-types';

const initialState = {
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_NOTIFICATION: {
      return {
        ...state,
        notifications: [
          ...state.notifications,
          action.payload
        ]
      };
    }
    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.filter((el) => el.id !== action.payload)
      };
    }
  }
  return state;
};

export default notificationReducer;
