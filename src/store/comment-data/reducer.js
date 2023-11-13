import { COMMENT_POST, REVIEW_LIST } from "./actions-types";

/* eslint-disable indent */
const initialState = {
  comment: '',
  reviews: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_POST: {
      return {
        ...state,
        comment: action.payload,
      };
    }
    case REVIEW_LIST: {
      return {
        ...state,
        reviews: action.payload,
      };
    }
  }
  return state;
};

export default commentReducer;
