import cities from '../../mock/mock-cities';
import { Room, City } from '../adapter';
import { loadCityList } from '../city-data/actions';
import { loadHotel, loadHotelList } from './actions';
import { appendNotification } from '../notification-data/actions';
import { serverLinks } from '../server-links';

import { changeFavorite } from './actions';
import { getFavorite, getReverseFavorite } from './selectors';

const fetchHotelList = () => (dispatch, _getState, api) => {
  return (
    api.get(serverLinks.HOTELS)
      .then(({ data }) => {
        console.log('rooms are ready');
        data = data.map((el) => Room.convertDataHotel(el));
        dispatch(loadHotelList(data));
        return data;
      })
      .then((data) => {
        let cityList = Object.assign({}, cities);
        data.map((el) => {
          cityList = Object.assign(cityList, City.convertDataToCity(el.city));
        });
        dispatch(loadCityList(cityList));
      })
  )
};

const fetchHotel = (id) => (dispatch, _getState, api) => {
  // const state = getState();
  // const room = getPropertyInside(state);

  // if (room) {
  //   console.log(room);
  //   return Promise.resolve(room); // ? конвертировать надо?
  // }

  return api.get(`${serverLinks.HOTELS}/${id}`)
    .then(({ data }) => {
      data = Room.convertDataHotel(data);
      dispatch(loadHotel(data));
      return data;
    })
    .catch((error) => {
      console.log('error!');
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 0
      }));
    });
};

const fetchFavorite = (idHotel) => (dispatch, getState, api) => {
  const status = getReverseFavorite(getState(), idHotel);
  return api.post(`${serverLinks.FAVORITE}/${idHotel}/${status}`)
    .then(({ data }) => {
      dispatch(changeFavorite(data));
      return data;
    })
    .catch((error) => {
      console.log('error!', error);
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 6,
      }));
    });
};

export {
  fetchHotelList,
  fetchHotel,
  fetchFavorite
};
