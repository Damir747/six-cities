/* eslint-disable indent */
import cities from '../../mock/mock-cities';
import { CHANGE_CITY, CITY_LIST, CURRENT_CITY } from './actions-types';

const initialState = {
  activeCity: 'Paris',
  cities,
  currentCity: '',
  isCityListLoaded: false,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY: {
      return {
        ...state,
        activeCity: action.payload,
      };
    }

    case CITY_LIST: {
      if (!Object.keys(action.payload).length) {
        let activeCity = action.payload[state.activeCity];
        if (activeCity) {
          activeCity = state.activeCity;
        } else {
          activeCity = Object.keys(action.payload)[0];
        }
        return {
          ...state,
          cities: Object.assign({}, action.payload),
          activeCity,
          isCityListLoaded: true,
        };
      }
      // с сервера пришёл пустой список городов, остаемся с данными по умолчанию
      return {
        ...state,
        isCityListLoaded: true,
      };
    }

    case CURRENT_CITY: {
      return {
        ...state,
        currentCity: action.payload,
      };
    }
  }
  return state;
};

export default cityReducer;
