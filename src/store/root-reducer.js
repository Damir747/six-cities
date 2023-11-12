import { combineReducers } from 'redux';
import initReducer from './init-data/init-reducer';
import sortReducer from './sort-data/sort-reducer';
import cityReducer from './city-data/city-reducer';
import commentReducer from './comment-data/comment-reducer';
import hotelReducer from './hotel-data/hotel-reducer';
import favoriteReducer from './favorite-data/favorite-reducer';
import loginReducer from './login-data/login-reducer';
import notificationReducer from './notification-data/notification-reducer';

const NameSpace = {
  INIT: 'INIT',
  SORT: 'SORT',
  CITY: 'CITY',
  COMMENT: 'COMMENT',
  HOTEL: 'HOTEL',
  FAVORITE: 'FAVORITE',
  LOGIN: 'LOGIN',
  NOTIFICATION: 'NOTIFICATION',
};

export default combineReducers({
  [NameSpace.INIT]: initReducer,
  [NameSpace.SORT]: sortReducer,
  [NameSpace.CITY]: cityReducer,
  [NameSpace.COMMENT]: commentReducer,
  [NameSpace.HOTEL]: hotelReducer,
  [NameSpace.FAVORITE]: favoriteReducer,
  [NameSpace.LOGIN]: loginReducer,
  [NameSpace.NOTIFICATION]: notificationReducer,
});

export { NameSpace };
