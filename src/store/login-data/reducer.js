/* eslint-disable indent */
import { AuthorizationStatus } from '../../const';
import { AUTH_INIT, CHANGE_AUTHORIZATION_STATUS, LOGIN_NAME } from './actions-types';

const initialState = {
  loginName: '',
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_INIT: {
      return {
        ...state,
        loginName: initialState.loginName,
        authorizationStatus: initialState.authorizationStatus,
      };
    }

    case CHANGE_AUTHORIZATION_STATUS: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }

    case LOGIN_NAME: {
      return {
        ...state,
        loginName: action.payload,
      };
    }
  }
  return state;
};

export default loginReducer;
