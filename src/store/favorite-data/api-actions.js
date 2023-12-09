import { Room } from '../adapter';
import { loadFavoriteList } from './actions';
import { serverLinks } from '../server-links';
import { appendNotification } from '../notification-data/actions';

const fetchFavoriteList = () => (dispatch, _getState, api) => {
  return api.get(serverLinks.FAVORITE)
    .then(({ data }) => {
      data = data.map((el) => Room.convertDataHotel(el));
      dispatch(loadFavoriteList(data));
      return data;
    })
    .catch((error) => {
      console.log('error!', error);
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 7,
      }));
    });
};

export {
  fetchFavoriteList
};
