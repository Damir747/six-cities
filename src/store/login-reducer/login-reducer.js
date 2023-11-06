/* eslint-disable indent */
import { AuthorizationStatus } from '../../const';
import ActionType from '../actions-types';

const initialState = {
	loginName: '',
	authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.CHANGE_AUTHORIZATION_STATUS: {
			return {
				...state,
				authorizationStatus: action.payload,
			};
		}
		case ActionType.LOGIN_NAME: {
			return {
				...state,
				loginName: action.payload,
			};
		}
	}
	return state;
};

export default loginReducer;
