import { FAVORITE, HOTEL, HOTEL_LIST } from "./actions-types";

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
  type: HOTEL,
  payload: hotels,
});

export {
  loadHotelList,
  loadHotel,
  changeFavorite,
  loadNeighbourhood,
};
