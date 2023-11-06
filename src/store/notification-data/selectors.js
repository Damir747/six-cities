import { NameSpace } from '../root-reducer';

const getNotifications = (state) => state[NameSpace.NOTIFICATION].notifications;

export { getNotifications };
