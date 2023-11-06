/* eslint-disable indent */
import ActionType from '../actions-types';

const initialState = {
  hotel: null,
  rooms: [],
  isDataLoaded: false,
  isHotelLoaded: false,
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.HOTEL_LIST: {
      return {
        ...state,
        rooms: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.HOTEL: {
      return {
        ...state,
        hotel: action.payload,
        isHotelLoaded: true,
      };
    }
  }
  return state;
};

export default hotelReducer;
