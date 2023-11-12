import ActionType from './actions-types';
// ? action также разбить по папкам
// ? redux tool kit
// ? connect заменить на useSelector
// ? mapStateToProps => useSelector
// ? mapDispatchToProps => useDispatch

const commentPost = (comment) => ({
  type: ActionType.COMMENT_POST,
  payload: comment,
});

const loadHotelList = (hotels) => ({
  type: ActionType.HOTEL_LIST,
  payload: hotels,
});

const loadCityList = (cities) => ({
  type: ActionType.CITY_LIST,
  payload: cities,
});

const loadHotel = (hotel) => ({
  type: ActionType.HOTEL,
  payload: hotel,
});

const loadReviewList = (reviews) => ({
  type: ActionType.REVIEW_LIST,
  payload: reviews,
});

const favoritesChange = (city) => ({
  type: ActionType.FAVORITES_LIST,
  payload: city,
});

const changeAuthorizationStatus = (status) => ({
  type: ActionType.CHANGE_AUTHORIZATION_STATUS,
  payload: status,
});

const selectCity = (activeCity) => ({
  type: ActionType.CHANGE_CITY,
  payload: activeCity,
});

const selectSort = (sort) => ({
  type: ActionType.CHANGE_SORT,
  payload: sort,
});

const userChange = (user) => ({
  type: ActionType.LOGIN_NAME,
  payload: user,
});

const appendNotification = (notifiation) => ({
  type: ActionType.APPEND_NOTIFICATION,
  payload: notifiation,
});

const removeNotification = (id) => ({
  type: ActionType.REMOVE_NOTIFICATION,
  meta: id,
});

export {
  commentPost, loadHotelList, loadCityList, loadHotel, loadReviewList, favoritesChange,
  changeAuthorizationStatus, selectCity, selectSort, userChange, appendNotification, removeNotification
};
