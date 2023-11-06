import { NameSpace } from '../root-reducer';

const getActiveCity = (state) => state[NameSpace.CITY].activeCity;
const getCities = (state) => state[NameSpace.CITY].cities;
const getActiveCityCoordinates = (state) => getCities(state)[getActiveCity(state)];

export { getCities, getActiveCity, getActiveCityCoordinates };
