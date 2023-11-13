import ActionType from '../actions-types';

const changeAuthorizationStatus = (status) => ({
  type: ActionType.CHANGE_AUTHORIZATION_STATUS,
  payload: status,
});

const userChange = (user) => ({
  type: ActionType.LOGIN_NAME,
  payload: user,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export {
  changeAuthorizationStatus,
  userChange,
  redirectToRoute
};
