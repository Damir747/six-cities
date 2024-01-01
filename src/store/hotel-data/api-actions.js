import cities from '../../mock/mock-cities';
import { Room, City } from '../adapter';
import { initCitylList, loadCityList, selectCurrentCity } from '../city-data/actions';
import { changeFavoriteNeighbourhood, initHotelList, loadHotel, loadHotelList, loadNeighbourhood } from './actions';
import { appendNotification } from '../notification-data/actions';
import { serverLinks } from '../server-links';

import { changeFavorite } from './actions';
import { getReverseFavorite } from './selectors';
import { changeFavoriteList } from '../favorite-data/actions';

const fetchHotelList = () => async (dispatch, _getState, api) => {

  function onSuccess({ data }) {
    data = data.map((el) => Room.convertDataHotel(el));
    dispatch(loadHotelList(data));

    let cityList = Object.assign({}, cities);
    data.map((el) => {
      cityList = Object.assign(cityList, City.convertDataToCity(el.city));
    });
    dispatch(loadCityList(cityList));
    return cityList;
  }

  function onError(error) {
    console.log('error!');
    dispatch(loadHotelList([]));
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 4
    }));
    return error;
  }

  try {
    const success = await api.get(serverLinks.HOTELS);
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }

};

const fetchHotel = (id) => async (dispatch, _getState, api) => {

  function onSuccess({ data }) {
    data = Room.convertDataHotel(data);
    dispatch(loadHotel(data));
    dispatch(selectCurrentCity(data.cityName));
    return data;
  }

  function onError(error) {
    console.log('error!');
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 0
    }));
    dispatch(loadHotel([]));
    return error;
  }

  try {
    const success = await api.get(`${serverLinks.HOTELS}/${id}`);
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }

};

const fetchFavorite = (idHotel) => async (dispatch, getState, api) => {

  function onSuccess({ data }) {
    dispatch(changeFavorite(data));
    dispatch(changeFavoriteNeighbourhood(data));
    dispatch(changeFavoriteList(data));
    return data;
  }

  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 6,
    }));
    return error;
  }

  try {
    const status = getReverseFavorite(getState(), idHotel);
    const success = await api.post(`${serverLinks.FAVORITE}/${idHotel}/${status}`);
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }

};

const fetchNeighbourhood = (id) => async (dispatch, _getState, api) => {

  function onSuccess({ data }) {
    data = data.map((el) => Room.convertDataHotel(el));
    dispatch(loadNeighbourhood(data));
    return data;
  }

  function onError(error) {
    console.log('error!', error.message);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 8,
    }));
    dispatch(loadNeighbourhood([]));
    return error;
  }

  try {
    const success = await api.get(`${serverLinks.HOTELS}/${id}${serverLinks.NEIGHBOURHOOD}`);
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }

};

export {
  fetchHotelList,
  fetchHotel,
  fetchFavorite,
  fetchNeighbourhood,
};
