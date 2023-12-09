import { useHistory } from "react-router-dom";
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
const history = useHistory();
import { connect } from 'react-redux';
import { fetchFavorite } from "../../store/hotel-data/api-actions";

// ? authorizationStatus / getAuthorizationStatus
const handleAddToFavorites = (authorizationStatus, onChangeFavorite, id) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    onChangeFavorite(id);
  } else {
    history.push(AppRoute.LOGIN);
  }
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavorite(idHotel) {
    dispatch(fetchFavorite(idHotel));
  }
});

export { handleAddToFavorites };
export default connect(mapStateToProps, mapDispatchToProps)(handleAddToFavorites);
