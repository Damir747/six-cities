import { appendNotification } from '../notification-data/actions';
import { favoritesChange } from './actions';
import { serverLinks } from '../server-links';
import { getReverseFavorite } from './selectors';

const fetchFavorites = (idHotel) => (dispatch, getState, api) => {
  const status = getReverseFavorite(getState(), idHotel);
  return api.post(`${serverLinks.FAVORITE}/${idHotel}/${status}`)
    .then(({ data }) => {
      dispatch(favoritesChange(data));
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
