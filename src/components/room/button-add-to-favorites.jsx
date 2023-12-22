import React from 'react';
import PropTypes from 'prop-types';
import { bookmarkClassname } from '../../utils/utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { AddToFavoriteButtonSize, AppRoute, AuthorizationStatus, RoomFrame } from '../../const';
import { fetchFavorite } from '../../store/hotel-data/api-actions';

const ButtonAddToFavorites = ({ id, bookmark, frame }) => {

  const handleAddToFavorites = function (idHotel) {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return () => dispatch(fetchFavorite(idHotel));
    } else {
      return () => history.push(AppRoute.LOGIN);
    }
  };

  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <button className={bookmarkClassname(frame, bookmark)} type="button"
        onClick={handleAddToFavorites(id)}>

        <svg
          className={`${frame}__bookmark-icon`}
          width={AddToFavoriteButtonSize[frame].WIDTH}
          height={AddToFavoriteButtonSize[frame].HEIGHT}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{bookmark}</span>
      </button>
    </React.Fragment>
  );
};

ButtonAddToFavorites.propTypes = {
  id: PropTypes.number.isRequired,
  bookmark: PropTypes.string.isRequired,
  frame: PropTypes.oneOf(Array.from(Object.values(RoomFrame))),
};

export default ButtonAddToFavorites;
