import { useHistory } from "react-router-dom";
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
const history = useHistory();

// ? authorizationStatus / getAuthorizationStatus
const handleAddToFavorites = (authorizationStatus, onChangeFavorite, id) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    onChangeFavorite(id);
  } else {
    history.push(AppRoute.LOGIN);
  }
};

export default handleAddToFavorites;
