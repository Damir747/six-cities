import { APPEND_NOTIFICATION, REMOVE_NOTIFICATION } from './actions-types';
import notificationReducer from "./reducer";

describe(`Login reducers work correctly`, () => {
  it(`APPEND_NOTIFICATION reducer works correctly`, () => {
    const startState = {
      notifications: [
        { id: 1, notification: 'сообщение 1' },
        { id: 2, notification: 'сообщение 2' }
      ],
    };
    const expectedState = {
      notifications: [
        { id: 1, notification: 'сообщение 1' },
        { id: 2, notification: 'сообщение 2' },
        { id: 6, notification: 'сообщение 6' }
      ],
    };
    expect(notificationReducer(startState, { type: APPEND_NOTIFICATION, payload: { id: 6, notification: 'сообщение 6' } })).toEqual(expectedState);
  });
  it(`REMOVE_NOTIFICATION reducer works correctly`, () => {
    const notificationId = 6;
    const startState = {
      notifications: [
        { id: 1, notification: 'сообщение 1' },
        { id: 2, notification: 'сообщение 2' },
        { id: 6, notification: 'сообщение 6' },
        { id: 7, notification: 'сообщение 7' }
      ],
    };
    const expectedState = {
      notifications: [
        { id: 1, notification: 'сообщение 1' },
        { id: 2, notification: 'сообщение 2' },
        { id: 7, notification: 'сообщение 7' }
      ],
    };
    expect(notificationReducer(startState, { type: REMOVE_NOTIFICATION, payload: notificationId })).toEqual(expectedState);
  });

});
