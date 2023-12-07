import { IN_BOOKMARKS, TO_BOOKMARKS } from "../../const";
import { FAVORITE, HOTEL, HOTEL_LIST } from "./actions-types";
import { getBookmark, getRoom } from "./selectors";

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
    case FAVORITE: {
      const findId = state.rooms.findIndex((el) => el.id === action.payload.id);
      return {
        ...state,
        rooms: [
          ...state.rooms.slice(0, findId),
          {
            ...state.rooms[findId],
            bookmark: action.payload.is_favorite ? IN_BOOKMARKS : TO_BOOKMARKS
          },
          ...state.rooms.slice(findId + 1),
        ]
      };
    }
  }
  return state;
};

export default hotelReducer;
