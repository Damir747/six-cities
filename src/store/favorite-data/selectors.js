import { NameSpace } from "../root-reducer";

const getFavoriteList = (state) => state[NameSpace.FAVORITES].favorites;
const getIsFavoriteListLoaded = (state) => state[NameSpace.FAVORITES].isFavoriteListLoaded;

export {
  getFavoriteList,
  getIsFavoriteListLoaded,
};
