import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { useHistory } from "react-router-dom";
import { fetchFavorite } from '../../store/hotel-data/api-actions';

const handleAddToFavorites = function (idHotel) {
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return () => dispatch(fetchFavorite(idHotel));
  } else {
    return () => history.push(AppRoute.LOGIN);
  }
};

// const handleAddToFavorites = () => {
//   if (authorizationStatus === AuthorizationStatus.AUTH) {
//     dispatch(fetchFavorite(id));
//   } else {
//     history.push(AppRoute.LOGIN);
//   }
// };

export default handleAddToFavorites;
