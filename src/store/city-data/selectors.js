import { NameSpace } from '../root-reducer';

const getIsCityListIsLoaded = (state) => state[NameSpace.CITY].isCityListLoaded;
const getCities = (state) => state[NameSpace.CITY].cities;
const getActiveCity = (state) => state[NameSpace.CITY].activeCity;
const getActiveCityCoordinates = (state) => getCities(state)[getActiveCity(state)];
const getCurrentCity = (state) => state[NameSpace.CITY].currentCity;
const getCurrentCityCoordinates = (state) => getCities(state)[getCurrentCity(state)];

export { getIsCityListIsLoaded, getCities, getActiveCity, getActiveCityCoordinates, getCurrentCity, getCurrentCityCoordinates };
