import cities from '../../mock/mock-cities';
import { Room, City } from '../adapter';
import { loadCityList, selectCurrentCity } from '../city-data/actions';
import { changeFavoriteNeighbourhood, loadHotel, loadHotelList, loadNeighbourhood } from './actions';
import { appendNotification } from '../notification-data/actions';
import { serverLinks } from '../server-links';

import { changeFavorite } from './actions';
import { getReverseFavorite } from './selectors';
import { changeFavoriteList } from '../favorite-data/actions';

// ? надо продумать ситуацию при отключении интернета. в ошибке соединения ставить dispatch(loadHotelList([])); - удаляет список отелей
// ? надо занулять init только изначально. для других полей, возможно, и оставить зануление при ошибке загрузки

const fetchHotelList = () => (dispatch, _getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 4
    }));
    return error;
  }

  return api.get(serverLinks.HOTELS)
    .then(({ data }) => {
      data = data.map((el) => Room.convertDataHotel(el));
      dispatch(loadHotelList(data));

      let cityList = Object.assign({}, cities);
      data.map((el) => {
        cityList = Object.assign(cityList, City.convertDataToCity(el.city));
      });
      return dispatch(loadCityList(cityList));
    })
    .catch((error) => onError(error));

};

const fetchHotel = (id) => (dispatch, _getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 0
    }));
    dispatch(loadHotel({}));
    return error;
  }

  return api.get(`${serverLinks.HOTELS}/${id}`)
    .then(({ data }) => {
      data = Room.convertDataHotel(data);
      dispatch(loadHotel(data));
      return dispatch(selectCurrentCity(data.cityName));
    })
    .catch((error) => onError(error));
};

const fetchFavorite = (idHotel) => (dispatch, getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 6,
    }));
    return error;
  }

  const status = getReverseFavorite(getState(), idHotel);
  return api.post(`${serverLinks.FAVORITE}/${idHotel}/${status}`)
    .then(({ data }) => {
      dispatch(changeFavorite(data));
      return { data };
    })
    .then(({ data }) => {
      dispatch(changeFavoriteNeighbourhood(data));
      return { data };
    })
    .then(({ data }) => dispatch(changeFavoriteList(data)))
    .catch((error) => onError(error));

};

const fetchNeighbourhood = (id) => (dispatch, _getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 8,
    }));
    dispatch(loadNeighbourhood([]));
    return error;
  }

  return api.get(`${serverLinks.HOTELS}/${id}${serverLinks.NEIGHBOURHOOD}`)
    .then(({ data }) => {
      data = data.map((el) => Room.convertDataHotel(el));
      return dispatch(loadNeighbourhood(data));
    })
    .catch((error) => onError(error));

};

export {
  fetchHotelList,
  fetchHotel,
  fetchFavorite,
  fetchNeighbourhood,
};
