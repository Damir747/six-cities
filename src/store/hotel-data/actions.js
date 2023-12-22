import { REVIEWS_LIST, FAVORITE, FAVORITE_NEIGHBOURHOOD, HOTEL, HOTEL_LIST, NEIGHBOURHOOD, HOTEL_INIT } from "./actions-types";

const loadHotelList = (hotels) => ({
  type: HOTEL_LIST,
  payload: hotels,
});

const initHotel = () => ({
  type: HOTEL_INIT,
  payload: false,
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
  loadHotelList,
  initHotel,
  loadHotel,
  loadComments,
  changeFavorite,
  loadNeighbourhood,
  changeFavoriteNeighbourhood,
};
