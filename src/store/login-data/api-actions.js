import { AuthorizationStatus } from '../../const';
import { changeAuthorizationStatus, userChange } from './actions';
import { appendNotification } from '../notification-data/actions';
import { serverLinks } from '../server-links';

function login({ email, password }) {
  return function (dispatch, _getState, api) {
    return (
      api.post(serverLinks.LOGIN, { email, password })
        .then(({ data }) => {
          dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
          // AuthInfo
          dispatch(userChange(data));
        })
        .catch((error) => {
          console.log('error!', error);
          dispatch(appendNotification({
            message: error.message,
            type: 'error',
            id: 1
          }));
        })
    );
  };
}

const checkAuthorizationStatus = () => (dispatch, _getState, api) => (
  api.get(serverLinks.LOGIN)
    .then(() => {
      console.log('checkAuthorizationStatus / changeAuthorizationStatus', 'меняю? статус авторизации на AUTH');
      dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch((error) => {
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 2
      }));
    })
);

export {
  login,
  checkAuthorizationStatus
};
