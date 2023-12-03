import { appendNotification } from '../notification-data/actions';
import { favoritesChange } from './actions';
import { serverLinks } from '../server-links';
import { getFavorite, getReverseFavorite } from './selectors';

const fetchFavorites = (idHotel) => (dispatch, getState, api) => {
  const status = getReverseFavorite(getState(), idHotel);
  console.log(`status = ${status}`);
  return api.post(`${serverLinks.FAVORITE}/${idHotel}/${status}`)
    .then(({ data }) => {
      dispatch(favoritesChange(data));
      console.log(data.id, ':', data.is_favorite);
      console.log('Статус отеля в fetchFavorites:', getFavorite(getState(), idHotel));
      return data;
    })
    .catch((error) => {
      console.log('error!', error);
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 6,
      }));
    });
};

export {
  fetchFavorites
};
