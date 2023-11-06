/* eslint-disable indent */
import ActionType from '../actions-types';

const initialState = {
  comment: '',
  reviews: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COMMENT_POST: {
      return {
        ...state,
        comment: action.payload,
      };
    }
    case ActionType.REVIEW_LIST: {
      return {
        ...state,
        reviews: action.payload,
      };
    }
  }
  return state;
};

export default commentReducer;
