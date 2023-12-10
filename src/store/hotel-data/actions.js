import { FAVORITE, HOTEL, HOTEL_LIST, NEIGHBOURHOOD } from "./actions-types";

const loadHotelList = (hotels) => ({
  type: HOTEL_LIST,
  payload: hotels,
});

const loadHotel = (hotel) => ({
  type: HOTEL,
  payload: hotel,
});

const changeFavorite = (hotel) => ({
  type: FAVORITE,
  payload: hotel,
});

const loadNeighbourhood = (hotels) => ({
  type: NEIGHBOURHOOD,
  payload: hotels,
});

export {
  loadHotelList,
  loadHotel,
  changeFavorite,
  loadNeighbourhood,
};
