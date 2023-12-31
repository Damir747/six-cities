import { AuthorizationStatus } from '../../const';
import { changeAuthorizationStatus, userChange } from './actions';
import { appendNotification } from '../notification-data/actions';
import { serverLinks } from '../server-links';

function fetchLogin({ email, password }, onAfterLoginRedirect) {
  return async function (dispatch, _getState, api) {

    function onSuccess(success) {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(userChange(success.data));
      onAfterLoginRedirect();
      return success.data;
    }

    function onError(error) {
      console.log('error!', error);
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 1
      }));
      // ? надо показать пользователю, что произошла ошибка: потрясти экран. Это надо сделать во всех ошибках
      return error;
    }

    try {
      const success = await api.post(serverLinks.LOGIN, { email, password });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }

  };
}

const fetchLogout = () => async (dispatch, _getState, api) => {

  function onSuccess(success) {
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
    dispatch(userChange({ loginName: '' }));
    return success.data;
  }

  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 11
    }));
    return error;
  }

  try {
    const success = await api.get(serverLinks.LOGOUT);
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }

};

const getLogin = () => async (dispatch, _getState, api) => {

  function onSuccess(success) {
    dispatch(userChange(success.data));
    dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
    return success.status;
  }

  function onError(error) {
    return error;
  }

  try {
    const success = await api.get(serverLinks.LOGIN);
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }

};

export {
  fetchLogin,
  fetchLogout,
  getLogin,
};
