import { FAVORITES_LIST } from "./actions-types";

/* eslint-disable indent */
const initialState = {
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITES_LIST: {
      return {
        ...state,
        ...action.payload
      };
    }
  }
  return state;
};

export default favoriteReducer;
