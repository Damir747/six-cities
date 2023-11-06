import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.LOGIN].authorizationStatus;
const getLoginName = (state) => state[NameSpace.LOGIN].loginName ? state[NameSpace.LOGIN].loginName.email : null;

export { getAuthorizationStatus, getLoginName };
