import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api';
import { serverLinks } from '../server-links';
import { LOGIN_NAME } from './actions-types';
import { fetchLogin } from './api-actions';

const api = createAPI();

describe(`Async operation works correctly`, () => {
  it(`Should make correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {
      email: 'damir_shakirov@list.ru',
      password: '1234567'
    };
    const checkFetchLogin = fetchLogin;
    apiMock
      .onGet(serverLinks.LOGIN)
      .reply(200, [{}]);
    const payload = {};

    try {
      return checkFetchLogin(dispatch, () => { }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: LOGIN_NAME,
            payload
          });
        })
    } catch {
      return;
    }

  });
});
