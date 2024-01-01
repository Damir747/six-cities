import { AUTH_INIT, CHANGE_AUTHORIZATION_STATUS, LOGIN_NAME, REDIRECT_TO_ROUTE } from "./actions-types";

const authorizationStatusInit = () => ({
  type: AUTH_INIT
});

const changeAuthorizationStatus = (status) => ({
  type: CHANGE_AUTHORIZATION_STATUS,
  payload: status,
});

const userChange = (user) => ({
  type: LOGIN_NAME,
  payload: user,
});

const redirectToRoute = (url) => ({
  type: REDIRECT_TO_ROUTE,
  payload: url,
});

export {
  authorizationStatusInit,
  changeAuthorizationStatus,
  userChange,
  redirectToRoute
};
