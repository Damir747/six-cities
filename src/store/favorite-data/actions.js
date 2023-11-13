import { FAVORITES_LIST } from "./actions-types";

const favoritesChange = (city) => ({
  type: FAVORITES_LIST,
  payload: city,
});

export {
  favoritesChange
};
