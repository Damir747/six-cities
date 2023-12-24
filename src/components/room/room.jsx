/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import roomType from '../../types/room';
import { AppRoute, LevelFrame, RoomFrame } from '../../const';
import { capitalizeFirstLetter, roomClassname, roomImageClassname, roundRating } from '../../utils/utils';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ButtonAddToFavorites from '../button-add-to-favorites/button-add-to-favorites';

const Room = ({ roomElement, onMouseEnter, onMouseLeave, frame }) => {
  const { id, level, img, priceValue, priceText, bookmark, rating, card, type } = roomElement;

  return (
    <React.Fragment>
      <article
        key={id}
        className={roomClassname(frame)}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave()}>
        {(frame === LevelFrame.CITIES) && level && <div className="place-card__mark">
          <span>{level}</span>
        </div>}
        <div className={roomImageClassname(frame)}>
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

            <ButtonAddToFavorites
              id={id}
              bookmark={bookmark}
              frame={RoomFrame.PLACE_CARD}
            />

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
  frame: PropTypes.oneOf(Array.from(Object.values(LevelFrame))),
};

export default Room;
