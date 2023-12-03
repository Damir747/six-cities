import { combineReducers } from 'redux';
import initReducer from './init-data/reducer';
import sortReducer from './sort-data/reducer';
import cityReducer from './city-data/reducer';
import commentReducer from './comment-data/reducer';
import hotelReducer from './hotel-data/reducer';
import loginReducer from './login-data/reducer';
import notificationReducer from './notification-data/reducer';

const NameSpace = {
  INIT: 'INIT',
  SORT: 'SORT',
  CITY: 'CITY',
  COMMENT: 'COMMENT',
  HOTEL: 'HOTEL',
  LOGIN: 'LOGIN',
  NOTIFICATION: 'NOTIFICATION',
};

export default combineReducers({
  [NameSpace.INIT]: initReducer,
  [NameSpace.SORT]: sortReducer,
  [NameSpace.CITY]: cityReducer,
  [NameSpace.COMMENT]: commentReducer,
  [NameSpace.HOTEL]: hotelReducer,
  [NameSpace.LOGIN]: loginReducer,
  [NameSpace.NOTIFICATION]: notificationReducer,
});

export { NameSpace };
