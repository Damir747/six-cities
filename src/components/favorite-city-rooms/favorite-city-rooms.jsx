import React from 'react';
import PropTypes from "prop-types";
import roomType from '../../types/room';
import { roundRating } from '../../utils/utils';

const FavoriteCityRooms = ({ rooms }) => {
  return (
    <React.Fragment>
      {rooms.map((room) => {
        return (
          <article key={room.id} className="favorites__card place-card">
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src={room.img} width="150" height="110" alt="Place image" />
              </a>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{room.priceValue}</b>
                  <span className="place-card__price-text">&#47;&nbsp;{room.priceText}</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{room.bookmark}</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: `${roundRating(room.rating)}%` }} ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">{room.card}</a>
              </h2>
              <p className="place-card__type">{room.type}</p>
            </div>
          </article>
        );
      })
      }
    </React.Fragment>
  );
};

FavoriteCityRooms.propTypes = {
  rooms: PropTypes.arrayOf(
    roomType.isRequired
  ),
};
export default FavoriteCityRooms;
