import { IN_BOOKMARKS, TO_BOOKMARKS } from "../../const";
import { FAVORITES_LIST, HOTEL, HOTEL_LIST } from "./actions-types";

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
    case FAVORITES_LIST: {
      console.log(state.rooms);
      console.log(action.payload);
      console.log(`Было: ${state.rooms[action.payload.id].bookmark}. Стало: ${action.payload.is_favorite}`);
      console.log(action.meta);
      state.rooms[action.payload.id].bookmark = action.payload.is_favorite ? IN_BOOKMARKS : TO_BOOKMARKS;
      return {
        ...state,

      };
    }
  }
  return state;
};

export default hotelReducer;
