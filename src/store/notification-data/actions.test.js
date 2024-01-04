import { appendNotification, removeNotification } from './actions';
import { APPEND_NOTIFICATION, REMOVE_NOTIFICATION } from './actions-types';

describe(`Actions in hotels work correctly`, () => {
  it(`Action appendNotification AUTH works correctly`, () => {
    const notification = { id: 1, notification: 'notification' };
    const expectedAction = {
      type: APPEND_NOTIFICATION,
      payload: notification,
    };
    expect(appendNotification(notification)).toEqual(expectedAction);
  });
  it(`Action removeNotification NO_AUTH works correctly`, () => {
    const id = 4;
    const expectedAction = {
      type: REMOVE_NOTIFICATION,
      payload: id,
    };
    expect(removeNotification(id)).toEqual(expectedAction);
  });

});
