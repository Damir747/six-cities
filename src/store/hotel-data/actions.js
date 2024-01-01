import { REVIEWS_LIST, FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, NEIGHBOURHOOD, HOTEL_INIT, HOTEL_LIST_INIT } from "./actions-types";

const initHotelList = () => ({
  type: HOTEL_LIST_INIT,
});

const loadHotelList = (hotels) => ({
  type: HOTEL_LIST,
  payload: hotels,
});

const initHotel = () => ({
  type: HOTEL_INIT,
});

const loadHotel = (hotel) => ({
  type: HOTEL,
  payload: hotel,
});

const loadComments = (reviews) => ({
  type: REVIEWS_LIST,
  payload: reviews,
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
  initHotelList,
  loadHotelList,
  initHotel,
  loadHotel,
  loadComments,
  changeFavorite,
  loadNeighbourhood,
  changeFavoriteNeighbourhood,
};
