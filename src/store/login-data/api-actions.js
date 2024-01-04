import { AppRoute, AuthorizationStatus } from '../../const';
import { changeAuthorizationStatus, redirectToRoute, userChange } from './actions';
import { appendNotification } from '../notification-data/actions';
import { serverLinks } from '../server-links';
// ? надо показать пользователю, что произошла ошибка: потрясти экран. Это надо сделать во всех ошибках

const fetchLogin = ({ email, password }) => (dispatch, _getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 1
    }));
    return error;
  }

  return api.post(serverLinks.LOGIN, { email, password })
    .then(({ data }) => dispatch(userChange(data)))
    .then(() => dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((error) => onError(error));

};

const fetchLogout = () => (dispatch, _getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 11
    }));
    return error;
  }

  return api.get(serverLinks.LOGOUT)
    .then(({ data }) => dispatch(userChange(data)))
    .then(() => dispatch(changeAuthorizationStatus(AuthorizationStatus.NO_AUTH)))
    .catch((error) => onError(error));

};

const fetchGetLogin = () => (dispatch, _getState, api) =>
  api.get(serverLinks.LOGIN)
    .then(({ data }) => dispatch(userChange(data)))
    .then(() => dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch((error) => error);

export {
  fetchLogin,
  fetchLogout,
  fetchGetLogin,
};
