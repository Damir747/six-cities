import { NameSpace } from "../root-reducer";

const getFavoriteList = (state) => state[NameSpace.FAVORITES].favorites;
const getIsFavoriteListLoading = (state) => state[NameSpace.FAVORITES].isFavoriteListLoading;
const getIsFavoriteListLoaded = (state) => state[NameSpace.FAVORITES].isFavoriteListLoaded;

export {
  getFavoriteList,
  getIsFavoriteListLoading,
  getIsFavoriteListLoaded,
};
