import { FAVORITE_CHANGE, FAVORITE_LIST, FAVORITE_LIST_INIT } from "./actions-types";

const initFavoriteList = () => ({
  type: FAVORITE_LIST_INIT,
});

const loadFavoriteList = (favoriteHotels) => ({
  type: FAVORITE_LIST,
  payload: favoriteHotels,
});

const changeFavoriteList = (hotel) => ({
  type: FAVORITE_CHANGE,
  payload: hotel,
});

export {
  initFavoriteList,
  loadFavoriteList,
  changeFavoriteList,
};
