import { useHistory } from "react-router-dom";
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
const history = useHistory();

// ? authorizationStatus / getAuthorizationStatus
const handleAddToFavorites = (onChangeFavorite, id) => {
  if (getAuthorizationStatus === AuthorizationStatus.AUTH) {
    onChangeFavorite(id)
      .then((_value) => {
        console.log(_value.is_favorite);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    history.push(AppRoute.LOGIN);
  }
};

export default handleAddToFavorites;
