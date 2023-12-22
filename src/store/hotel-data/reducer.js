import { BOOKMARKS } from "../../const";
import { FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, INIT, NEIGHBOURHOOD, REVIEWS_LIST } from "./actions-types";

/* eslint-disable indent */
const initialState = {
  hotel: null,
  rooms: [],
  isDataLoaded: false,
  reviews: [],
  isHotelLoaded: false,
  isCommentLoaded: false,
  isNeighbourhoodLoaded: false,
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
    case INIT: {
      return {
        ...state,
        isCommentLoaded: false,
        isNeighbourhoodLoaded: false,
      };
    }
    case HOTEL: {
      return {
        ...state,
        hotel: action.payload,
        isHotelLoaded: true,
      };
    }
    case REVIEWS_LIST: {
      return {
        ...state,
        reviews: action.payload,
        isCommentLoaded: true,
      };
    }
    case NEIGHBOURHOOD: {
      return {
        ...state,
        neighbourhood: action.payload,
        isNeighbourhoodLoaded: true,
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
            bookmark: action.payload.is_favorite ? BOOKMARKS.IN : BOOKMARKS.TO
          },
          ...state.rooms.slice(findId + 1),
        ]
      };
    }
    case FAVORITE_NEIGHBOURHOOD: {
      if (!state.neighbourhood) {
        return state;
      }
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
            bookmark: action.payload.is_favorite ? BOOKMARKS.IN : BOOKMARKS.TO
          },
          ...state.neighbourhood.slice(findId + 1),
        ]
      };
    }
  }
  return state;
};

export default hotelReducer;
