import { CHANGE_SORT } from "./actions-types";

const selectSort = (sort) => ({
  type: CHANGE_SORT,
  payload: sort,
});

export {
  selectSort
};
