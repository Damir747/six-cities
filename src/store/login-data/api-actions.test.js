import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api';
import { serverLinks } from '../server-links';
import { CHANGE_AUTHORIZATION_STATUS, LOGIN_NAME, REDIRECT_TO_ROUTE } from './actions-types';
import { fetchLogin, fetchLogout } from './api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';

const api = createAPI();

describe(`Async operation login works correctly`, () => {
  // ? fetchGetLogin ещё
  it(`Should make correct API login call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {
      email: 'damir_shakirov@list.ru',
      password: '1234567'
    };
    const checkFetchLogin = fetchLogin(fakeUser);
    apiMock
      .onPost(serverLinks.LOGIN)
      .reply(200, fakeUser);
    const fakeAction1 = {
      type: LOGIN_NAME,
      payload: fakeUser
    };
    const fakeAction2 = {
      type: CHANGE_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH
    };
    const fakeAction3 = {
      type: REDIRECT_TO_ROUTE,
      payload: AppRoute.ROOT
    };

    return checkFetchLogin(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
        expect(dispatch).toHaveBeenNthCalledWith(2, fakeAction2);
        expect(dispatch).toHaveBeenNthCalledWith(3, fakeAction3);
      });

  });

  it(`Should make correct API logout call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkFetchLoginout = fetchLogout();
    apiMock
      .onGet(serverLinks.LOGOUT)
      .reply(200);
    const fakeAction1 = {
      type: LOGIN_NAME,
    };
    const fakeAction2 = {
      type: CHANGE_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH
    };

    return checkFetchLoginout(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
        expect(dispatch).toHaveBeenNthCalledWith(2, fakeAction2);
      });

  });

});
