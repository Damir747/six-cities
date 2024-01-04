import { AuthorizationStatus } from '../../const';
import { CHANGE_AUTHORIZATION_STATUS, LOGIN_NAME } from './actions-types';
import loginReducer from "./reducer";

describe(`Login reducers work correctly`, () => {
  it(`CHANGE_AUTHORIZATION_STATUS reducer AUTH works correctly`, () => {
    const status = AuthorizationStatus.AUTH;
    const expectedState = {
      authorizationStatus: status,
    };
    expect(loginReducer({}, { type: CHANGE_AUTHORIZATION_STATUS, payload: status })).toEqual(expectedState);
  });
  it(`CHANGE_AUTHORIZATION_STATUS reducer NO_AUTH works correctly`, () => {
    const status = AuthorizationStatus.NO_AUTH;
    const expectedState = {
      authorizationStatus: status,
    };
    expect(loginReducer({}, { type: CHANGE_AUTHORIZATION_STATUS, payload: status })).toEqual(expectedState);
  });
  it(`LOGIN_NAME reducer works correctly`, () => {
    const loginName = ['sdasdf', 1312452, {}];
    const expectedState = {
      loginName,
    };
    expect(loginReducer({}, {
      type: LOGIN_NAME,
      payload: loginName,
    })).toEqual(expectedState);
  });

});
