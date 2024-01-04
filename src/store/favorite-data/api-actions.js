import { Room } from '../adapter';
import { loadFavoriteList } from './actions';
import { serverLinks } from '../server-links';
import { appendNotification } from '../notification-data/actions';

// ? после logout обнуляется список Избранного
const fetchFavoriteList = () => (dispatch, _getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 7,
    }));
    dispatch(loadFavoriteList([]));
  }

  return api.get(serverLinks.FAVORITE)
    .then(({ data }) => {
      data = data.map((el) => Room.convertDataHotel(el));
      return dispatch(loadFavoriteList(data));
    })
    .catch((error) => onError(error));

};

export {
  fetchFavoriteList
};
