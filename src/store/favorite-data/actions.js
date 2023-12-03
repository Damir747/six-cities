import { FAVORITE_LIST } from "./actions-types";

const loadFavoriteList = (favoriteHotels) => ({
  type: FAVORITE_LIST,
  payload: favoriteHotels,
});

export {
  loadFavoriteList,
};
