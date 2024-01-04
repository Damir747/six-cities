import { changeFavoriteList, initFavoriteList, loadFavoriteList } from "./actions";
import { FAVORITE_CHANGE, FAVORITE_LIST, FAVORITE_LIST_INIT } from "./actions-types";

describe(`Actions in Favorites work correctly`, () => {
  it(`Action initFavoriteList works correctly`, () => {
    const expectedAction = {
      type: FAVORITE_LIST_INIT,
    };
    expect(initFavoriteList()).toEqual(expectedAction);
  });

  it(`Action loadFavoriteList works correctly`, () => {
    const favoriteHotels = [];
    const expectedAction = {
      type: FAVORITE_LIST,
      payload: favoriteHotels,
    };
    expect(loadFavoriteList(favoriteHotels)).toEqual(expectedAction);
  });

  it(`Action loadFavoriteList works correctly`, () => {
    const favoriteHotels = ['1'];
    const expectedAction = {
      type: FAVORITE_LIST,
      payload: ['1'],
    };
    expect(loadFavoriteList(favoriteHotels)).toEqual(expectedAction);
  });

  it(`Action changeFavoriteList works correctly`, () => {
    const hotel = [];
    const expectedAction = {
      type: FAVORITE_CHANGE,
      payload: [],
    };
    expect(changeFavoriteList(hotel)).toEqual(expectedAction);
  });

  it(`Action changeFavoriteList works correctly`, () => {
    const hotel = ['2'];
    const expectedAction = {
      type: FAVORITE_CHANGE,
      payload: ['2'],
    };
    expect(changeFavoriteList(hotel)).toEqual(expectedAction);
  });
});
