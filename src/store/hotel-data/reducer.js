import { IN_BOOKMARKS, TO_BOOKMARKS } from "../../const";
import { FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, NEIGHBOURHOOD } from "./actions-types";

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
    case NEIGHBOURHOOD: {
      return {
        ...state,
        neighbourhood: action.payload,
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
    case FAVORITE_NEIGHBOURHOOD: {
      const findId = state.neighbourhood.findIndex((el) => el.id === action.payload.id);
      if (findId === -1) {
        return state;
      }
      return {
        ...state,
        neighbourhood: [
          ...state.neighbourhood.slice(0, findId),
          {
            ...state.neighbourhood[findId],
            bookmark: action.payload.is_favorite ? IN_BOOKMARKS : TO_BOOKMARKS
          },
          ...state.neighbourhood.slice(findId + 1),
        ]
      };
    }
  }
  return state;
};

export default hotelReducer;
