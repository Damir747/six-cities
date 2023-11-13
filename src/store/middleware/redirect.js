import browserHistory from "../../browser-history";
import { REDIRECT_TO_ROUTE } from "../login-data/actions-types";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
