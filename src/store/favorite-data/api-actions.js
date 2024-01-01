import { Room } from '../adapter';
import { loadFavoriteList } from './actions';
import { serverLinks } from '../server-links';
import { appendNotification } from '../notification-data/actions';

// ? после logout обнуляется список Избранного
const fetchFavoriteList = () => async (dispatch, _getState, api) => {

  function onSuccess({ data }) {
    console.log(data);
    data = data.map((el) => Room.convertDataHotel(el));
    dispatch(loadFavoriteList(data));
    return data;
  }

  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 7,
    }));
    dispatch(loadFavoriteList([]));
  }

  try {
    const success = await api.get(serverLinks.FAVORITE);
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }
};

export {
  fetchFavoriteList
};
