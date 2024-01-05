import browserHistory from "../../browser-history";
import { REDIRECT_TO_ROUTE } from "../login-data/actions-types";

const redirect = (_store) => (dispatch) => (action) => {
  if (action.type === REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return dispatch(action);
};

export { redirect };
