import React from "react";
import PropTypes from "prop-types";
import roomType from '../../types/room';
import { AppRoute, IN_BOOKMARKS } from "../../const";
import { capitalizeFirstLetter, roundRating } from "../../utils/utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Room = ({ roomElement, onMouseEnter, onMouseLeave }) => {
  const { id, level, img, priceValue, priceText, bookmark, rating, card, type } = roomElement;

  const handleMouseEnter = () => {
    onMouseEnter(roomElement);
  };

  const handleMouseLeave = () => {
    onMouseLeave(null);
  };

  return (
    <React.Fragment>
      <article key={id} className="cities__place-card place-card"
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {level && <div className="place-card__mark">
          <span>{level}</span>
        </div>}
        <div className="cities__image-wrapper place-card__image-wrapper">
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
            <button className={['place-card__bookmark-button', 'button',
              bookmark === IN_BOOKMARKS ? 'place-card__bookmark-button--active' : ''].join(' ')} type="button">

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
            <Link to={AppRoute.ROOT}>{card}</Link>
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
};

export default Room;
