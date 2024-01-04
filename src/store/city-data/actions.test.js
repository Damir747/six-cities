import { HOTEL_LIST_INIT } from "../hotel-data/actions-types";
import { initCitylList, loadCityList, selectActiveCity, selectCurrentCity } from "./actions";
import { CHANGE_CITY, CITY_LIST, CURRENT_CITY } from "./actions-types";


describe(`Actions in city-data work correctly`, () => {
  it(`Action initCitylList works correctly`, () => {
    const expectedAction = {
      type: HOTEL_LIST_INIT,
    };
    expect(initCitylList()).toEqual(expectedAction);
  });

  it(`Action loadCityList works correctly`, () => {
    const cityList = ['Paris', 'Moscow', 'London'];
    const expectedAction = {
      type: CITY_LIST,
      payload: cityList,
    };
    expect(loadCityList(cityList)).toEqual(expectedAction);
  });

  it(`Action selectActiveCity works correctly`, () => {
    const activeCity = ['Paris'];
    const expectedAction = {
      type: CHANGE_CITY,
      payload: activeCity,
    };
    expect(selectActiveCity(activeCity)).toEqual(expectedAction);
  });

  it(`Action selectCurrentCity works correctly`, () => {
    const currentCity = 'Paris';
    const expectedAction = {
      type: CURRENT_CITY,
      payload: currentCity,
    };
    expect(selectCurrentCity(currentCity)).toEqual(expectedAction);
  });

});
