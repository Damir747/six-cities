import { AuthorizationStatus } from "../const";
import cities from "../mock/mock-cities";
import ActionCreator from "./actions";
import { Room, City } from "./adapter";
import { getPropertyInside } from "./selectors";

const serverLinks = {
  HOTELS: `/hotels`,
  FAVORITE: `/favorite`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};

const fetchHotelList = () => (dispatch, _getState, api) => (
  api.get(serverLinks.HOTELS)
    .then(({ data }) => {
      console.log('rooms are ready');
      data = data.map((el) => Room.convertDataHotel(el));
      dispatch(ActionCreator.loadHotelList(data));
      return data;
    })
    .then((data) => {
      let cityList = cities;
      data.map((el) => {
        cityList = Object.assign(cityList, City.convertDataToCity(el.city));
      });
      dispatch(ActionCreator.loadCityList(cityList));
      console.log(cityList);
    })
);

const fetchHotel = (id) => (dispatch, getState, api) => {

  // const state = getState();
  // const room = getPropertyInside(state);

  // if (room) {
  //   console.log(room);
  //   return Promise.resolve(room); //? конвертировать надо?
  // }
  return api.get(`${serverLinks.HOTELS}/${id}`)
    .then(({ data }) => {
      dispatch(ActionCreator.loadHotel(Room.convertDataHotel(data)));
      return data;
    });
};

function login({ email, password }) {
  return function (dispatch, _getState, api) {
    return (
      api.post(serverLinks.LOGIN, { email, password })
        .then(({ data }) => {
          dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
          // AuthInfo
          dispatch(ActionCreator.userChange(data));
        })
        .catch((error) => {
          console.log('error!');
          dispatch(ActionCreator.appendNotification({
            message: error.message,
            type: 'error',
            id: 1
          }));
        })
    );
  };
}

const checkAuthorizationStatus = () => (dispatch, _getState, api) => (
  api.get(serverLinks.LOGIN)
    .then(() => {
      console.log('checkAuthorizationStatus / changeAuthorizationStatus', 'меняю? статус авторизации на AUTH');
      dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch((error) => {
      dispatch(ActionCreator.appendNotification({
        message: error.message,
        type: 'error',
        id: 2
      }));
    })
);

export { fetchHotelList, fetchHotel, login, checkAuthorizationStatus };
