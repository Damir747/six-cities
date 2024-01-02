import { FAVORITE_CHANGE, FAVORITE_LIST, FAVORITE_LIST_INIT } from "./actions-types";
import favoriteReducer from "./reducer";

describe(`Favorite reducers work correctly`, () => {
  it(`FAVORITE_LIST_INIT reducer works correctly`, () => {
    const state = {
      isFavoriteListLoading: true,
      isFavoriteListLoaded: false,
    };
    expect(favoriteReducer({}, { type: FAVORITE_LIST_INIT })).toEqual(state);
  });
  it(`FAVORITE_LIST reducer works correctly`, () => {
    const state = {
      favorites: ['1'],
      isFavoriteListLoading: false,
      isFavoriteListLoaded: true,
    };
    expect(favoriteReducer({}, { type: FAVORITE_LIST, payload: ['1'] })).toEqual(state);
  });
  it(`FAVORITE_CHANGE. Add to empty Favorites [] reducer works correctly`, () => {
    const state = {
      favorites: [
        {
          is_favorite: true,
          anyField: 3,
        }
      ]
    };
    expect(favoriteReducer({ favorites: [] }, {
      type: FAVORITE_CHANGE,
      payload: {
        is_favorite: true,
        anyField: 3,
      }
    })).toEqual(state);
  });
  it(`FAVORITE_CHANGE. Remove from Favorites reducer works correctly`, () => {
    const state = {
      favorites: []
    };
    expect(favoriteReducer({
      favorites: [{
        is_favorite: true,
        anyField: 3
      }],
    }, {
      type: FAVORITE_CHANGE,
      payload: {
        is_favorite: false,
        anyOtherfield: 7,
      }
    })).toEqual(state);
  });

  it(`FAVORITE_CHANGE. Remove from Favorites 1 of 2 records reducer works correctly`, () => {
    const state = {
      favorites: [{
        is_favorite: true,
        id: 3,
        anyField: 3
      }]
    };
    expect(favoriteReducer({
      favorites: [
        {
          is_favorite: true,
          id: 3,
          anyField: 3
        },
        {
          is_favorite: true,
          id: 5,
          anyField: 5
        }
      ],
    }, {
      type: FAVORITE_CHANGE,
      payload: {
        is_favorite: false,
        id: 5,
        anyField: 5
      }
    })).toEqual(state);
  });
});
