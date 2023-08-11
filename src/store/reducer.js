import cities from "../mock/mock-cities";
import loginName from "../mock/mock-login";
import menuUpArray from "../mock/mock-menu";
import offerCards from "../mock/mock-offer-cards";
import propertyInside from '../mock/mock-property-inside';
import stars from "../mock/mock-rating-stars";
import reviews from '../mock/mock-reviews';
import roomTypeToReadable from '../mock/mock-room-types';
import rooms from '../mock/mock-rooms';

import ActionType from "./actions-types";

const initialState = {
  sort: 1,
  idActiveCity: 4,
  cities,
  loginName,
  menuUpArray,
  offerCards,
  propertyInside,
  stars,
  reviews,
  roomTypeToReadable,
  rooms,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        idActiveCity: action.payload,
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
        ...state,
        loginName: state.loginName
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
