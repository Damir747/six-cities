import { IN_BOOKMARKS, TO_BOOKMARKS } from "../../const";
import { FAVORITE_LIST } from "./actions-types";

/* eslint-disable indent */
const initialState = {
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_LIST: {
      // state.rooms[action.payload.id].bookmark = action.payload.is_favorite ? IN_BOOKMARKS : TO_BOOKMARKS;
      return {
        ...state,

      };
    }
  }
  return state;
};

export default favoriteReducer;
