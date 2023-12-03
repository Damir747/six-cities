import { FAVORITE, HOTEL, HOTEL_LIST } from "./actions-types";

const loadHotelList = (hotels) => ({
  type: HOTEL_LIST,
  payload: hotels,
});

const loadHotel = (hotel) => ({
  type: HOTEL,
  payload: hotel,
});

const favoritesChange = (hotel) => ({
  type: FAVORITE,
  payload: hotel,
});

export {
  loadHotelList,
  loadHotel,
  favoritesChange,
};
