import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api';
import { initialMockState } from '../../mock/mock-test';
import { serverLinks } from '../server-links';
import { FAVORITE_LIST } from './actions-types';
import { fetchFavoriteList } from './api-actions';

const api = createAPI();

describe(`Async Favorite operation works correctly`, () => {
  it(`Should make correct API fetchFavoriteList call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReceivedFavoriteList = initialMockState.FAVORITES.serverRooms;
    const fakeFavoriteList = initialMockState.FAVORITES.favorites;
    const checkFetchFavoriteList = fetchFavoriteList();
    apiMock
      .onGet(serverLinks.FAVORITE)
      .reply(200, fakeReceivedFavoriteList);
    const fakeAction1 = {
      type: FAVORITE_LIST,
      payload: fakeFavoriteList
    };

    return checkFetchFavoriteList(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
      });

  });

});
