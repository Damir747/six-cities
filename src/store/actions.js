import ActionType from "./actions-types";

const ActionCreator = {

  commentPost: (comment) => {
    return {
      type: ActionType.COMMENT_POST,
      payload: comment,
    };
  },

  loadHotelList: (hotels) => {
    return {
      type: ActionType.HOTEL_LIST,
      payload: hotels,
    };
  },

  loadCityList: (cities) => {
    return {
      type: ActionType.CITY_LIST,
      payload: cities,
    };
  },

  loadHotel: (hotel) => {
    return {
      type: ActionType.HOTEL,
      payload: hotel,
    };
  },

  loadReviewList: (reviews) => {
    return {
      type: ActionType.REVIEW_LIST,
      payload: reviews,
    };
  },

  favoritesChange: (city) => {
    return {
      type: ActionType.FAVORITES_LIST,
      payload: city,
    };
  },

  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),

  selectCity: (activeCity) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: activeCity,
    };
  },

  selectSort: (sort) => {
    return {
      type: ActionType.CHANGE_SORT,
      payload: sort,
    };
  },

  userChange: (user) => ({
    type: ActionType.LOGIN_NAME,
    payload: user,
  }),

  appendNotification: (notifiation) => ({
    type: ActionType.APPEND_NOTIFICATION,
    payload: notifiation,
  }),

  removeNotification: (id) => ({
    type: ActionType.REMOVE_NOTIFICATION,
    meta: id,
  })
};

export default ActionCreator;
