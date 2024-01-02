import { changeFavorite, changeFavoriteNeighbourhood, initHotel, initHotelList, loadComments, loadHotel, loadHotelList, loadNeighbourhood } from "./actions";
import { REVIEWS_LIST, FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, NEIGHBOURHOOD, HOTEL_INIT, HOTEL_LIST_INIT } from "./actions-types";

describe(`Actions in hotels work correctly`, () => {
  it(`Action initHotelList works correctly`, () => {
    const expectedAction = {
      type: HOTEL_LIST_INIT,
    };
    expect(initHotelList()).toEqual(expectedAction);
  });

  it(`Action loadHotelList empty [] works correctly`, () => {
    const hotels = [];
    const expectedAction = {
      type: HOTEL_LIST,
      payload: hotels,
    };
    expect(loadHotelList(hotels)).toEqual(expectedAction);
  });

  it(`Action loadHotelList non-empty ['adasd', 32312, {}] works correctly`, () => {
    const hotels = ['adasd', 32312, {}];
    const expectedAction = {
      type: HOTEL_LIST,
      payload: hotels,
    };
    expect(loadHotelList(hotels)).toEqual(expectedAction);
  });

  it(`Action initHotel works correctly`, () => {
    const expectedAction = {
      type: HOTEL_INIT,
    };
    expect(initHotel()).toEqual(expectedAction);
  });

  it(`Action loadHotel empty [] works correctly`, () => {
    const hotel = [];
    const expectedAction = {
      type: HOTEL,
      payload: hotel,
    };
    expect(loadHotel(hotel)).toEqual(expectedAction);
  });

  it(`Action loadHotel non-empty [789696, 'fsdfsd', {}] works correctly`, () => {
    const hotel = [789696, 'fsdfsd', {}];
    const expectedAction = {
      type: HOTEL,
      payload: hotel,
    };
    expect(loadHotel(hotel)).toEqual(expectedAction);
  });

  it(`Action loadComments empty [] works correctly`, () => {
    const hotel = [];
    const expectedAction = {
      type: REVIEWS_LIST,
      payload: hotel,
    };
    expect(loadComments(hotel)).toEqual(expectedAction);
  });

  it(`Action loadComments non-empty [] works correctly`, () => {
    const hotel = ['2'];
    const expectedAction = {
      type: REVIEWS_LIST,
      payload: hotel,
    };
    expect(loadComments(hotel)).toEqual(expectedAction);
  });

  it(`Action changeFavorite works correctly`, () => {
    const hotel = ['2'];
    const expectedAction = {
      type: FAVORITE,
      payload: ['2'],
    };
    expect(changeFavorite(hotel)).toEqual(expectedAction);
  });

  it(`Action loadNeighbourhood works correctly`, () => {
    const hotel = ['3'];
    const expectedAction = {
      type: NEIGHBOURHOOD,
      payload: hotel,
    };
    expect(loadNeighbourhood(hotel)).toEqual(expectedAction);
  });

  it(`Action changeFavoriteNeighbourhood works correctly`, () => {
    const hotel = ['4'];
    const expectedAction = {
      type: FAVORITE_NEIGHBOURHOOD,
      payload: hotel,
    };
    expect(changeFavoriteNeighbourhood(hotel)).toEqual(expectedAction);
  });

});
