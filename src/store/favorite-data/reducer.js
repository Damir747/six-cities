import { FAVORITE_LIST } from "./actions-types";

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
  }
  return state;
};

export default favoriteReducer;
