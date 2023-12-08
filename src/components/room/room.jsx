/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import roomType from '../../types/room';
import { AppRoute, AuthorizationStatus, Frame } from '../../const';
import { bookmarkClassname, capitalizeFirstLetter, classname, frameClassname, roundRating } from '../../utils/utils';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';

import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { useHistory } from "react-router-dom";

const Room = ({ roomElement, onMouseEnter, onMouseLeave, frame, authorizationStatus, onChangeFavorite }) => {
  const { id, level, img, priceValue, priceText, bookmark, rating, card, type } = roomElement;
  const history = useHistory();

  const handleAddToFavorites = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onChangeFavorite(id)
        .then((_value) => {
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      history.push(AppRoute.LOGIN);
    }
  };

  return (
    <React.Fragment>
      <article
        key={id}
        className={frameClassname(frame)}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave()}>
        {(frame === Frame.CITIES) && level && <div className="place-card__mark">
          <span>{level}</span>
        </div>}
        <div className={classname(frame + '__image-wrapper', 'place-card__image-wrapper')}>
          <Link to={AppRoute.ROOT}>
            <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{priceValue}</b>
              <span className="place-card__price-text">&#47;&nbsp;{priceText || 'ночь'}</span>
            </div>
            <button className={bookmarkClassname('place-card', bookmark)} type="button" onClick={handleAddToFavorites}>

              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{bookmark}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${roundRating(rating)}%` }} ></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={AppRoute.OFFER + id}>{card}</Link>
          </h2>
          <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
        </div>
      </article >
    </React.Fragment>
  );
};

Room.propTypes = {
  roomElement: roomType,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onChangeFavorite: PropTypes.func,
  frame: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});
export { Room };
export default connect(mapStateToProps)(Room);
