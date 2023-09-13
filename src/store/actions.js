import ActionType from "./actions-types";

const ActionCreator = {
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
