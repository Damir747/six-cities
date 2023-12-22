import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { capitalizeFirstLetter, roundRating } from '../../utils/utils';
import { AppRoute, RoomFrame } from '../../const';
import roomType from '../../types/room';
import ButtonAddToFavorites from '../button-add-to-favorites/button-add-to-favorites';

const FavoriteCityRoom = ({ room }) => {
  const { id, img, priceValue, priceText, bookmark, rating, card, type } = room;

  return (
    <React.Fragment>
      <article key={id} className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to={AppRoute.OFFER + id}>
            <img className="place-card__image" src={img} width="150" height="110" alt="Place image" />
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{priceValue}</b>
              <span className="place-card__price-text">&#47;&nbsp;{priceText || 'ночь'}</span>
            </div>

            <ButtonAddToFavorites
              id={id}
              bookmark={bookmark}
              frame={RoomFrame.PLACE_CARD} />

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
      </article>
    </React.Fragment>
  );
};

FavoriteCityRoom.propTypes = {
  room: roomType,
};

export default FavoriteCityRoom;
