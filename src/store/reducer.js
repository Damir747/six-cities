import cities from "../mock/mock-cities";
import ActionType from "./actions-types";

const initialState = {
  sort: 1,
  idActiveCity: 4,
  cities,
  loginName: '1Oliver.conner@gmail.com1',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        idActiveCity: action.payload,
      };
    }
    case ActionType.CHANGE_SORT: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    case ActionType.CITY_LIST: {
      return {
        ...state,
        cities: action.payload,
      };
    }
    case ActionType.FAVORITES_LIST: {
      return {
        ...state
      };
    }
    case ActionType.LOGIN_NAME: {
      return {
        loginName: state.loginName
      };
    }
    default: {
      return 0;
    }
  }
};

