import { COMMENT_POST } from "./actions-types";

/* eslint-disable indent */
const initialState = {
  comment: '',
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_POST: {
      // console.log(action);
      // console.log(state);
      return {
        ...state,
        comment: action.payload,
      };
    }
  }
  return state;
};

export default commentReducer;
