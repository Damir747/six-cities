/* eslint-disable indent */
import cities from "../mock/mock-cities";
import loginName from "../mock/mock-login";
import menuUpArray from "../mock/mock-menu";
import offerCards from "../mock/mock-offer-cards";
import propertyInside from '../mock/mock-property-inside';
import stars from "../mock/mock-rating-stars";
import reviews from '../mock/mock-reviews';
import roomTypeToReadable from '../mock/mock-room-types';
import rooms from '../mock/mock-rooms';
import { AuthorizationStatus } from '../const';

import ActionType from "./actions-types";

const initialState = {
  sort: 0,
  activeCity: 'Amsterdam',
  cities,
  loginName,
  menuUpArray,
  offerCards,
  propertyInside,
  stars,
  reviews,
  roomTypeToReadable,
  rooms,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
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
        activeCity: action.payload,
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
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
