import { BOOKMARKS } from "../../const";
import { FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, HOTEL_INIT, NEIGHBOURHOOD, REVIEWS_LIST, HOTEL_LIST_INIT } from "./actions-types";

/* eslint-disable indent */
const initialState = {
  hotel: null,
  rooms: [],
  isHotelListLoading: false,
  isHotelListLoaded: false,
  reviews: [],
  isHotelLoading: true,
  isHotelLoaded: false,
  isCommentLoading: true,
  isCommentLoaded: false,
  isNeighbourhoodLoading: true,
  isNeighbourhoodLoaded: false,
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTEL_LIST_INIT: {
      return {
        ...state,
        isHotelListLoading: true,
        isHotelListLoaded: false,
      };
    }
    case HOTEL_LIST: {
      return {
        ...state,
        rooms: action.payload,
        isHotelListLoading: false,
        isHotelListLoaded: true,
      };
    }
    case HOTEL_INIT: {
      return {
        ...state,
        isHotelLoading: true,
        isHotelLoaded: false,
        isCommentLoading: true,
        isCommentLoaded: false,
        isNeighbourhoodLoading: true,
        isNeighbourhoodLoaded: false,
      };
    }
    case HOTEL: {
      return {
        ...state,
        hotel: action.payload,
        isHotelLoading: false,
        isHotelLoaded: true,
      };
    }
    case REVIEWS_LIST: {
      return {
        ...state,
        reviews: action.payload,
        isCommentLoading: false,
        isCommentLoaded: true,
      };
    }
    case NEIGHBOURHOOD: {
      return {
        ...state,
        neighbourhood: action.payload,
        isNeighbourhoodLoading: false,
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
