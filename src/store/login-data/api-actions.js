import { AppRoute, AuthorizationStatus } from '../../const';
import { changeAuthorizationStatus, redirectToRoute, userChange } from './actions';
import { appendNotification } from '../notification-data/actions';
import { serverLinks } from '../server-links';

function fetchLogin({ email, password }) {
  return function (dispatch, _getState, api) {
    return async () => {

      function onSuccess(success) {
        console.log('success', success);
        dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
        dispatch(userChange(success));
        return success;
      }

      function onError(error) {
        console.log('error!', error);
        dispatch(appendNotification({
          message: error.message,
          type: 'error',
          id: 1
        }));
        return error;
      }

      try {
        const success = await api.post(serverLinks.LOGIN, { email, password });
        return onSuccess(success);
      } catch (error) {
        return onError(error);
      }
    };
  };
}

export {
  fetchLogin,
};
