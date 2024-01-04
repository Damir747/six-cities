import { changeAuthorizationStatus, redirectToRoute, userChange } from './actions';
import { CHANGE_AUTHORIZATION_STATUS, LOGIN_NAME, REDIRECT_TO_ROUTE } from './actions-types';
import { AuthorizationStatus } from '../../const';

describe(`Actions in hotels work correctly`, () => {
  it(`Action changeAuthorizationStatus AUTH works correctly`, () => {
    const statusAuth = AuthorizationStatus.AUTH;
    const expectedAction = {
      type: CHANGE_AUTHORIZATION_STATUS,
      payload: statusAuth,
    };
    expect(changeAuthorizationStatus(statusAuth)).toEqual(expectedAction);
  });
  it(`Action changeAuthorizationStatus NO_AUTH works correctly`, () => {
    const statusAuth = AuthorizationStatus.NO_AUTH;
    const expectedAction = {
      type: CHANGE_AUTHORIZATION_STATUS,
      payload: statusAuth,
    };
    expect(changeAuthorizationStatus(statusAuth)).toEqual(expectedAction);
  });

  it(`Action userChange works correctly`, () => {
    const user = { userName: 'Vasya', newField: '' };
    const expectedAction = {
      type: LOGIN_NAME,
      payload: user,
    };
    expect(userChange(user)).toEqual(expectedAction);
  });

  it(`Action redirectToRoute works correctly`, () => {
    const url = '/path-to-hell';
    const expectedAction = {
      type: REDIRECT_TO_ROUTE,
      payload: url,
    };
    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

});
