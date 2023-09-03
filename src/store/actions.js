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

  favoritesChange: (city) => {
    return {
      type: ActionType.FAVORITES_LIST,
      payload: city,
    };
  },

  loginChange: (loginName) => {
    return {
      type: ActionType.LOGIN_NAME,
      payload: loginName,
    };
  },

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};

export default ActionCreator;
