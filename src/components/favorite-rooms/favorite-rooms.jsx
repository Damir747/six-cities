import React from "react";
import PropTypes from "prop-types";
import { roundRating } from '../../utils/utils';
import roomType from '../../types/room';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AppRoute } from "../../const";

const FavoriteRooms = ({ rooms }) => {
  return (
    <React.Fragment>
      <div className="favorites__places">
        {rooms.map((roomElement) => {
          return (
            <article key={roomElement.id} className="favorites__card place-card">
              <div className="favorites__image-wrapper place-card__image-wrapper">
                <Link to={AppRoute.ROOT}>
                  <img className="place-card__image" src={roomElement.img} width="150" height="110" alt="Place image" />
                </Link>
              </div>
              <div className="favorites__card-info place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{roomElement.priceValue}</b>
                    <span className="place-card__price-text">&#47;&nbsp;{roomElement.priceText}</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark" />
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
                  <Link to={AppRoute.ROOT}>{roomElement.card}</Link>
                </h2>
                <p className="place-card__type">{roomElement.type}</p>
              </div>
            </article>);
        }
        )}
      </div>
    </React.Fragment>
  );
};

FavoriteRooms.propTypes = {
  rooms: PropTypes.arrayOf(
    roomType.isRequired
  ),
};

export default FavoriteRooms;
