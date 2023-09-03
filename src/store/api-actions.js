import ActionCreator from "./actions";

const serverLinks = {
  HOTELS: `/hotels`,
};

const fetchHotelList = () => (dispatch, _getState, api) => (
  api.get(serverLinks.HOTELS)
    .then(({ data }) => dispatch(ActionCreator.))
);
