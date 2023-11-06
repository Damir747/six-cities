/* eslint-disable indent */
import cities from '../../mock/mock-cities';
import ActionType from '../actions-types';

const initialState = {
  activeCity: 'Paris',
  cities,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
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
  }
  return state;
};

export default cityReducer;
