import React from "react";
import PropTypes from "prop-types";

import { room } from "../../types/room";

const OfferCard = ({ rooms }) => {

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {rooms.map((room) => {
          return (
            <article key={room.id} className="cities__place-card place-card">
              <div className="place-card__mark" hidden={!room.level}>
                <span>{room.level}</span>
              </div>
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={room.img} width="260" height="200" alt="Place image" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{room.priceValue}</b>
                    <span className="place-card__price-text">&#47;&nbsp;{room.priceText}</span>
                  </div>
                  <button className={['place-card__bookmark-button', 'button',
                    room.bookmark === 'In bookmarks' ? 'place-card__bookmark-button--active' : ''].join(' ')}
                    type="button">

                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{room.bookmark}</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: `${room.rating}%` }} ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">{room.card}</a>
                </h2>
                <p className="place-card__type">{room.type}</p>
              </div>
            </article >
          );
        }
        )}
      </div >
    </>
  );
};

OfferCard.propTypes = {
  rooms: PropTypes.arrayOf(
    room.isRequired
  ),
};

export default OfferCard;
