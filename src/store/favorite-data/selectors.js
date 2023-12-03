import { NameSpace } from "../root-reducer";

const getFavoriteList = (state) => state[NameSpace.FAVORITES].hotel;

export {
  getFavoriteList
};
