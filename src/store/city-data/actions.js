import { CHANGE_CITY, CITY_LIST } from './actions-types';

const loadCityList = (cities) => ({
  type: CITY_LIST,
  payload: cities,
});

const selectCity = (activeCity) => ({
  type: CHANGE_CITY,
  payload: activeCity,
});


export {
  loadCityList,
  selectCity
};
