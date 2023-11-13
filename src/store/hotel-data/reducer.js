import { HOTEL, HOTEL_LIST } from "./actions-types";

/* eslint-disable indent */
const initialState = {
  hotel: null,
  rooms: [],
  isDataLoaded: false,
  isHotelLoaded: false,
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTEL_LIST: {
      return {
        ...state,
        rooms: action.payload,
        isDataLoaded: true,
      };
    }
    case HOTEL: {
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
