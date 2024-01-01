import { HOTEL_LIST_INIT } from '../hotel-data/actions-types';
import { CHANGE_CITY, CITY_LIST, CURRENT_CITY } from './actions-types';

const initCitylList = () => ({
  type: HOTEL_LIST_INIT,
});

const loadCityList = (cities) => ({
  type: CITY_LIST,
  payload: cities,
});

const selectActiveCity = (activeCity) => ({
  type: CHANGE_CITY,
  payload: activeCity,
});

const selectCurrentCity = (city) => ({
  type: CURRENT_CITY,
  payload: city,
});

export {
  initCitylList,
  loadCityList,
  selectActiveCity,
  selectCurrentCity,
};
