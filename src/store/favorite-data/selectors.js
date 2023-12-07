import { NameSpace } from "../root-reducer";

const getFavoriteList = (state) => state[NameSpace.FAVORITES].hotel;
const getIsFavoriteListLoaded = (state) => state[NameSpace.FAVORITES].isFavoriteListLoaded;

export {
  getFavoriteList,
  getIsFavoriteListLoaded,
};
