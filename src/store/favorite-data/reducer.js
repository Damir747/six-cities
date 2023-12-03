import { IN_BOOKMARKS, TO_BOOKMARKS } from "../../const";
import { FAVORITE_LIST } from "./actions-types";

/* eslint-disable indent */
const initialState = {
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_LIST: {
      return {
        ...state,
        favorites: action.payload
      };
    }
  }
  return state;
};

export default favoriteReducer;
