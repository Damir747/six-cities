import { FAVORITES_LIST, HOTEL, HOTEL_LIST } from "./actions-types";

const loadHotelList = (hotels) => ({
  type: HOTEL_LIST,
  payload: hotels,
});

const loadHotel = (hotel) => ({
  type: HOTEL,
  payload: hotel,
});

const favoritesChange = (hotel) => ({
  type: FAVORITES_LIST,
  payload: hotel,
});

export {
  loadHotelList,
  loadHotel,
  favoritesChange,
};
