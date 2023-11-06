/* eslint-disable indent */
import ActionType from '../actions-types';

const initialState = {
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FAVORITES_LIST: {
      return {
        ...state
      };
    }
  }
  return state;
};

export default favoriteReducer;
