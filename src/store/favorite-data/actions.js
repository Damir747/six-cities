import { FAVORITE_CHANGE, FAVORITE_LIST } from "./actions-types";

const loadFavoriteList = (favoriteHotels) => ({
  type: FAVORITE_LIST,
  payload: favoriteHotels,
});

const changeFavoriteList = (hotel) => ({
  type: FAVORITE_CHANGE,
  payload: hotel,
});

export {
  loadFavoriteList,
  changeFavoriteList,
};
