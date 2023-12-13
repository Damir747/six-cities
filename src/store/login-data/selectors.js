import { AuthorizationStatus } from '../../const';
import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.LOGIN].authorizationStatus ? state[NameSpace.LOGIN].authorizationStatus : AuthorizationStatus.NO_AUTH;
const getLoginName = (state) => state[NameSpace.LOGIN].loginName ? state[NameSpace.LOGIN].loginName.email : '';

export { getAuthorizationStatus, getLoginName };
