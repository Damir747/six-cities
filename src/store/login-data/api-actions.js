import { AuthorizationStatus } from '../../const';
import { changeAuthorizationStatus, userChange } from './actions';
import { appendNotification } from '../notification-data/actions';
import { serverLinks } from '../server-links';

function fetchLogin({ email, password }) {
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

export {
  fetchLogin,
};
