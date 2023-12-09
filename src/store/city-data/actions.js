import { CHANGE_CITY, CITY_LIST, CURRENT_CITY } from './actions-types';

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
  loadCityList,
  selectActiveCity,
  selectCurrentCity,
};
