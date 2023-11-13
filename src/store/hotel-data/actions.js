import { HOTEL, HOTEL_LIST } from "./actions-types";

const loadHotelList = (hotels) => ({
  type: HOTEL_LIST,
  payload: hotels,
});

const loadHotel = (hotel) => ({
  type: HOTEL,
  payload: hotel,
});

export {
  loadHotelList,
  loadHotel
};
