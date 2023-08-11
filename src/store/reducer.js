import cities from "../mock/mock-cities";
import loginName from "../mock/mock-login";
import ActionType from "./actions-types";

const initialState = {
  sort: 1,
  idActiveCity: 4,
  cities,
  loginName,
  step: 10,
};

const reducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
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
      return state;
    }
  }
};

export default reducer;
