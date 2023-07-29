import React from "react";
import PropTypes from "prop-types";

import { room } from "../../types/room";
import { capitalizeFirstLetter, roundRating } from "../../utils/utils";
import { IN_BOOKMARKS } from "../../const";

const OfferCard = ({ rooms }) => {

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {rooms.map((roomElement) => {
          return (
            <article key={roomElement.id} className="cities__place-card place-card">
              <div className="place-card__mark" hidden={!roomElement.level}>
                <span>{roomElement.level}</span>
              </div>
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={roomElement.img} width="260" height="200" alt="Place image" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{roomElement.priceValue}</b>
                    <span className="place-card__price-text">&#47;&nbsp;{roomElement.priceText}</span>
                  </div>
                  <button className={['place-card__bookmark-button', 'button',
                    roomElement.bookmark === IN_BOOKMARKS ? 'place-card__bookmark-button--active' : ''].join(' ')} type="button">

                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{roomElement.bookmark}</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: `${roundRating(roomElement.rating)}%` }} ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">{roomElement.card}</a>
                </h2>
                <p className="place-card__type">{capitalizeFirstLetter(roomElement.type)}</p>
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
