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

  loginChange: (loginName) => {
    return {
      type: ActionType.LOGIN_NAME,
      payload: loginName,
    };
  },

};

export default ActionCreator;
