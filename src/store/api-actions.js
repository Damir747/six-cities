import ActionCreator from "./actions";
import Room from "./adapter";

const serverLinks = {
  HOTELS: `/hotels`,
  FAVORITE: `/favorite`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};

const fetchHotelList = () => (dispatch, _getState, api) => (
  api.get(serverLinks.HOTELS)
    .then(({ data }) => {
      data = data.map((el) =>
        Room.convertDataHotel(el)
      );
      dispatch(ActionCreator.loadHotelList(data));
    })
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(serverLinks.LOGIN, { email, password })
    .then(({ data }) => {
      dispatch(ActionCreator.checkAuthorizationStatus(true));
      dispatch(ActionCreator.loginChange(data));
    })
    .catch((error) => {
      dispatch(ActionCreator.appendNotification({
        message: error.message,
        type: 'error',
        id: 1
      }));
    })
);

const checkAuthorizationStatus = () => (dispatch, _getState, api) => (
  api.get(serverLinks.LOGIN)
    .then(() => {
      dispatch(ActionCreator.checkAuthorizationStatus(true));
    })
    .catch((error) => {
      dispatch(ActionCreator.appendNotification({
        message: error.message,
        type: 'error',
        id: 2
      }));
    })
);
export { fetchHotelList, login, checkAuthorizationStatus };
