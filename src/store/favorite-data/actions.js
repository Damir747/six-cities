import { FAVORITES_LIST } from "./actions-types";

const favoritesChange = (hotel) => ({
  type: FAVORITES_LIST,
  payload: hotel,
});

export {
  favoritesChange
};
