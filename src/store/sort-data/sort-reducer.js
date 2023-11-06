/* eslint-disable indent */
import ActionType from '../actions-types';

const initialState = {
	sort: 0,
};

const sortReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.CHANGE_SORT: {
			return {
				...state,
				sort: action.payload,
			};
		}
	}
	return state;
};

export default sortReducer;
