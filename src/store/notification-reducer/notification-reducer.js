/* eslint-disable indent */
import ActionType from '../actions-types';

const initialState = {
	notifications: [],
};

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.APPEND_NOTIFICATION: {
			return {
				...state,
				notifications: [
					...state.notifications,
					action.payload
				]
			};
		}
		case ActionType.REMOVE_NOTIFICATION: {
			return {
				...state,
				notifications: state.notifications.filter((el) => el.id !== action.meta)
			};
		}
	}
	return state;
};

export default notificationReducer;
