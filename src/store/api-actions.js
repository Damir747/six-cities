import ActionCreator from "./actions";
import Room from "./adapter";

const serverLinks = {
  HOTELS: `/hotels`,
};

const fetchHotelList = () => (dispatch, _getState, api) => (
  api.get(serverLinks.HOTELS)
    .then(({ data }) => {
      // console.log(data);
      data = data.map((el) =>
        Room.convertDataHotel(el)
      );
      // console.log(data);
      dispatch(ActionCreator.loadHotelList(data));
    })
);

export { fetchHotelList };
