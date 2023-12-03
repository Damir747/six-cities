import { Room } from '../adapter';
import { loadFavoriteList } from './actions';
import { serverLinks } from '../server-links';

const fetchFavoriteList = () => (dispatch, _getState, api) => {
  return (
    api.get(serverLinks.FAVORITE)
      .then(({ data }) => {
        data = data.map((el) => Room.convertDataHotel(el));
        dispatch(loadFavoriteList(data));
        return data;
      })
  );
};

export {
  fetchFavoriteList
};
