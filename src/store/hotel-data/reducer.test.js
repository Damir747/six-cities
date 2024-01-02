import { BOOKMARKS } from "../../const";
import { FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, HOTEL_INIT, NEIGHBOURHOOD, REVIEWS_LIST, HOTEL_LIST_INIT } from "./actions-types";
import hotelReducer from "./reducer";

describe(`Hotel reducers work correctly`, () => {
  it(`HOTEL_LIST_INIT reducer works correctly`, () => {
    const expectedState = {
      isHotelListLoading: true,
      isHotelListLoaded: false,
    };
    expect(hotelReducer({}, { type: HOTEL_LIST_INIT })).toEqual(expectedState);
  });
  it(`HOTEL_LIST reducer works correctly`, () => {
    const rooms = ['sdasdf', 1312452, {}];
    const expectedState = {
      rooms,
      isHotelListLoading: false,
      isHotelListLoaded: true,
    };
    expect(hotelReducer({}, {
      type: HOTEL_LIST,
      payload: rooms,
    })).toEqual(expectedState);
  });
  it(`HOTEL_INIT reducer works correctly`, () => {
    const expectedState = {
      isHotelLoading: true,
      isHotelLoaded: false,
      isCommentLoading: true,
      isCommentLoaded: false,
      isNeighbourhoodLoading: true,
      isNeighbourhoodLoaded: false,
    };
    expect(hotelReducer({}, { type: HOTEL_INIT })).toEqual(expectedState);
  });
  it(`HOTEL reducer works correctly`, () => {
    const hotel = [{}, 3984124, '2312vv3r5yx'];
    const expectedState = {
      hotel,
      isHotelLoading: false,
      isHotelLoaded: true,
    };
    expect(hotelReducer({}, {
      type: HOTEL,
      payload: hotel
    })).toEqual(expectedState);
  });
  it(`REVIEWS_LIST. Get reviews reducer works correctly`, () => {
    const reviews = [
      {
        anyField: true,
        anotherField: 3,
      },
      [],
      {},
      [42423]
    ];
    const expectedState = {
      reviews,
      isCommentLoading: false,
      isCommentLoaded: true,
    };
    expect(hotelReducer({}, {
      type: REVIEWS_LIST,
      payload: reviews,
    })).toEqual(expectedState);
  });
  it(`NEIGHBOURHOOD. Get neighbourhood reducer works correctly`, () => {
    const neighbourhood = ['dadas', 3213123, {}, [4]];
    const expectedState = {
      neighbourhood,
      isNeighbourhoodLoading: false,
      isNeighbourhoodLoaded: true,
    };
    expect(hotelReducer({}, {
      type: NEIGHBOURHOOD,
      payload: neighbourhood
    })).toEqual(expectedState);
  });

  it(`FAVORITE. Change favorite in 1 of 2 records reducer works correctly`, () => {
    const action = {
      type: FAVORITE,
      payload: {
        id: 5,
        is_favorite: false,
      }
    };
    const state = {
      rooms: [
        {
          anotherField: 'true',
          id: 3,
          anyField: 3,
          bookmark: BOOKMARKS.IN,
        },
        {
          anotherField: 'true',
          id: 5,
          anyField: 5,
          bookmark: BOOKMARKS.IN,
        }
      ],
    };
    const expectedState = {
      rooms: [{
        anotherField: 'true',
        id: 3,
        anyField: 3,
        bookmark: BOOKMARKS.IN
      },
      {
        anotherField: 'true',
        id: 5,
        anyField: 5,
        bookmark: BOOKMARKS.TO,
      }]
    };
    expect(hotelReducer(state, action)).toEqual(expectedState);
  });

  it(`FAVORITE_NEIGHBOURHOOD. Change favorite in 1 of 2 records reducer works correctly`, () => {
    const expectedState = {
      neighbourhood: [{
        anotherField: 'true',
        id: 3,
        anyField: 3,
        bookmark: BOOKMARKS.IN
      },
      {
        anotherField: 'true',
        id: 5,
        anyField: 5,
        bookmark: BOOKMARKS.TO,
      }]
    };
    expect(hotelReducer({
      neighbourhood: [
        {
          anotherField: 'true',
          id: 3,
          anyField: 3,
          bookmark: BOOKMARKS.IN,
        },
        {
          anotherField: 'true',
          id: 5,
          anyField: 5,
          bookmark: BOOKMARKS.IN,
        }
      ],
    }, {
      type: FAVORITE_NEIGHBOURHOOD,
      payload: {
        anotherField: 'true',
        id: 5,
        anyField: 5,
        is_favorite: false,
      }
    })).toEqual(expectedState);
  });
});
