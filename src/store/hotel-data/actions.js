import { FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, NEIGHBOURHOOD } from "./actions-types";

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

const changeFavoriteNeighbourhood = (hotel) => ({
  type: FAVORITE_NEIGHBOURHOOD,
  payload: hotel,
});

export {
  loadHotelList,
  loadHotel,
  changeFavorite,
  loadNeighbourhood,
  changeFavoriteNeighbourhood,
};
