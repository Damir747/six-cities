import { CHANGE_AUTHORIZATION_STATUS, LOGIN_NAME, REDIRECT_TO_ROUTE } from "./actions-types";

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
  changeAuthorizationStatus,
  userChange,
  redirectToRoute
};
