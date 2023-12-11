import { AppRoute, AuthorizationStatus } from '../../const';

const handleAddToFavorites = (authorizationStatus, onChangeFavorite, id, historyPush) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return () => onChangeFavorite(id);
  } else {
    return () => historyPush(AppRoute.LOGIN);
  }
};

export default handleAddToFavorites;
