/* eslint-disable indent */
import cities from '../../mock/mock-cities';
import { CHANGE_CITY, CITY_LIST, CURRENT_CITY } from './actions-types';

const initialState = {
  activeCity: 'Paris',
  cities,
  currentCity: 'Paris',
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
      return {
        ...state,
        cities: action.payload,
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
