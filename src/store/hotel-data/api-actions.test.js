import MockAdapter from 'axios-mock-adapter';
import createAPI from "../../services/api";
import { FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, NEIGHBOURHOOD } from './actions-types';
import { CITY_LIST, CURRENT_CITY } from '../city-data/actions-types';
import { fetchFavorite, fetchHotel, fetchHotelList, fetchNeighbourhood } from './api-actions';
import { serverLinks } from '../server-links';
import { initialMockState } from '../../mock/mock-test';
import { FAVORITE_CHANGE } from '../favorite-data/actions-types';

const api = createAPI();

describe(`Async operation hotel works correctly`, () => {
  it(`Should make correct API fetchHotelList call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeHotels = initialMockState.HOTEL.rooms;
    const fakeReceivedHotels = initialMockState.HOTEL.serverRooms;
    const fakeCities = {
      Amsterdam: { lat: 52.37454, lng: 4.897976, zoom: 13 },
      Brussels: { lat: 50.846557, lng: 4.351697, zoom: 13 },
      Cologne: { lat: 50.938361, lng: 6.959974, zoom: 13 },
      Dusseldorf: { lat: 51.225402, lng: 6.776314, zoom: 13 },
      Hamburg: { lat: 53.550341, lng: 10.000654, zoom: 13 },
      Paris: { lat: 48.85661, lng: 2.351499, zoom: 13 },
    };
    const checkFetchHotelList = fetchHotelList();
    apiMock
      .onGet(serverLinks.HOTELS)
      .reply(200, fakeReceivedHotels);
    const fakeAction1 = {
      type: HOTEL_LIST,
      payload: fakeHotels,
    };
    const fakeAction2 = {
      type: CITY_LIST,
      payload: fakeCities,
    };
    return checkFetchHotelList(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
        expect(dispatch).toHaveBeenNthCalledWith(2, fakeAction2);
      });
  });
  it(`Should make correct API fetchHotel call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeHotel = initialMockState.HOTEL.rooms[0];
    const fakeReceivedHotel = initialMockState.HOTEL.serverRooms[0];
    const fakeCity = fakeHotel.city.name;
    const checkFetchLogin = fetchHotel(1);
    apiMock
      .onGet(`${serverLinks.HOTELS}/1`)
      .reply(200, fakeReceivedHotel);

    const fakeAction1 = {
      type: HOTEL,
      payload: fakeHotel,
    };
    const fakeAction2 = {
      type: CURRENT_CITY,
      payload: fakeCity,
    };

    return checkFetchLogin(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
        expect(dispatch).toHaveBeenNthCalledWith(2, fakeAction2);
      });
  });
  it(`Should make correct API fetchFavorite call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => initialMockState;

    const fakeHotel = initialMockState.HOTEL.rooms[0];
    const checkFavorite = fetchFavorite(1);
    apiMock
      .onPost(`${serverLinks.FAVORITE}/1/1`)
      .reply(200, fakeHotel);

    const fakeAction1 = {
      type: FAVORITE,
      payload: fakeHotel,
    };
    const fakeAction2 = {
      type: FAVORITE_NEIGHBOURHOOD,
      payload: fakeHotel,
    };
    const fakeAction3 = {
      type: FAVORITE_CHANGE,
      payload: fakeHotel,
    };

    return checkFavorite(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
        expect(dispatch).toHaveBeenNthCalledWith(2, fakeAction2);
        expect(dispatch).toHaveBeenNthCalledWith(3, fakeAction3);
      });
  });

  it(`Should make correct API fetchNeighbourhood call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeNeighbourhood = [initialMockState.HOTEL.rooms[0], initialMockState.HOTEL.rooms[0], initialMockState.HOTEL.rooms[0]];
    const fakeReceivedNeighbourhood = [initialMockState.HOTEL.serverRooms[0], initialMockState.HOTEL.serverRooms[0], initialMockState.HOTEL.serverRooms[0]];

    const checkFetchNeighbourhood = fetchNeighbourhood(1);
    apiMock
      .onGet(`${serverLinks.HOTELS}/1${serverLinks.NEIGHBOURHOOD}`)
      .reply(200, fakeReceivedNeighbourhood);

    const fakeAction1 = {
      type: NEIGHBOURHOOD,
      payload: fakeNeighbourhood,
    };

    return checkFetchNeighbourhood(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
      });
  });
});
