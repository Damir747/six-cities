import { CHANGE_SORT } from "./actions-types";

/* eslint-disable indent */
const initialState = {
  sort: 0,
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT: {
      return {
        ...state,
        sort: action.payload,
      };
    }
  }
  return state;
};

export default sortReducer;
