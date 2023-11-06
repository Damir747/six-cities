import { combineReducers } from 'redux';
import notificationReducer from './notification-reducer/notification-reducer';
import loginReducer from './login-reducer/login-reducer';
import favoriteReducer from './favorite-reducer/favorite-reducer';
import hotelReducer from './hotel-reducer/hotel-reducer';
import commentReducer from './comment-reducer/comment-reducer';
import cityReducer from './city-reducer/city-reducer';
import sortReducer from './sort-reducer/sort-reducer';
import initReducer from './init-reducer/init-reducer';

const SPACE_NAME = {
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
  [SPACE_NAME.INIT]: initReducer,
  [SPACE_NAME.SORT]: sortReducer,
  [SPACE_NAME.CITY]: cityReducer,
  [SPACE_NAME.COMMENT]: commentReducer,
  [SPACE_NAME.HOTEL]: hotelReducer,
  [SPACE_NAME.FAVORITE]: favoriteReducer,
  [SPACE_NAME.LOGIN]: loginReducer,
  [SPACE_NAME.NOTIFICATION]: notificationReducer,
});
