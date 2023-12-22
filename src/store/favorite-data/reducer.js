import { FAVORITE_CHANGE, FAVORITE_LIST } from "./actions-types";

/* eslint-disable indent */
const initialState = {
  favorites: [],
  isFavoriteListLoaded: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_LIST: {
      return {
        ...state,
        favorites: action.payload,
        isFavoriteListLoaded: true,
      };
    }
    case FAVORITE_CHANGE: {
      if (action.payload.is_favorite) {
        return {
          ...state,
          favorites: [
            ...state.favorites,
            action.payload,
          ]
        };
      }
      if (!state.favorites) {
        return state;
      }
      const findId = state.favorites.findIndex((el) => el.id === action.payload.id);
      if (findId === -1) {
        return state;
      }
      return {
        ...state,
        favorites: [
          ...state.favorites.slice(0, findId),
          ...state.favorites.slice(findId + 1)],
      };

    }
  }
  return state;
};

export default favoriteReducer;
