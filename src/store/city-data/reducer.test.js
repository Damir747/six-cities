import { CHANGE_CITY, CITY_LIST_INIT, CITY_LIST, CURRENT_CITY } from "./actions-types";
import cityReducer from "./reducer";

describe(`City Reducers work correctly`, () => {
  it(`Reducer CHANGE_CITY works correctly`, () => {
    const state = { activeCity: 'Paris' };
    expect(cityReducer({}, { type: CHANGE_CITY, payload: 'Paris' })).toEqual(state);
  });
  it(`Reducer CITY_LIST_INIT works correctly`, () => {
    const expectedState = {
      isCityListLoaded: false,
      isCityListLoading: true,
    };
    expect(cityReducer({}, { type: CITY_LIST_INIT, payload: {} })).toEqual(expectedState);
  });
  it(`Reducer CITY_LIST empty list works correctly`, () => {
    const emptyList = {};
    const expectedState = {
      isCityListLoaded: true,
      isCityListLoading: false,
    };
    expect(cityReducer({}, { type: CITY_LIST, payload: emptyList })).toEqual(expectedState);
  });
  it(`Reducer CITY_LIST non-empty list works correctly`, () => {
    const cityList = { 1: 'Paris', 12: 'Moscow', 2: 'Cologne', 3: 'Brussels' };
    const expectedState = {
      activeCity: Object.keys(cityList)[0],
      cities: cityList,
      isCityListLoaded: true,
      isCityListLoading: false,
    };
    expect(cityReducer({}, { type: CITY_LIST, payload: cityList })).toEqual(expectedState);
  });
  it(`Reducer CURRENT_CITY works correctly`, () => {
    const expectedState = { currentCity: 'Moscow' };
    expect(cityReducer({}, { type: CURRENT_CITY, payload: 'Moscow' })).toEqual(expectedState);
  });

});
