import React from "react";
import PropTypes from "prop-types";

import { room } from "../../types/room";
import { capitalizeFirstLetter, roundRating } from '../../utils/utils.js';

const FavoriteElements = ({ rooms }) => {
  return (
    <React.Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {rooms.map((roomElement) => {
                return (
                  <li key={roomElement.id} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>Amsterdam</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <article className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img className="place-card__image" src={roomElement.img} width="150" height="110" alt="Place image" />
                          </a>
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
                            <a href="#">{roomElement.card}</a>
                          </h2>
                          <p className="place-card__type">{roomElement.type}</p>
                        </div>
                      </article>

                      <article className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img className="place-card__image" src="img/room-small.jpg" width="150" height="110" alt="Place image" />
                          </a>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;80</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark" />
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{ width: `${roundRating(roundRating(roomElement.rating))}%` }} ></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <a href="#">{roomElement.card}</a>
                          </h2>
                          <p className="place-card__type">{capitalizeFirstLetter(room.type)}</p>
                        </div>
                      </article>
                    </div>
                  </li>
                );
              }
              )}
            </ul>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

FavoriteElements.propTypes = {
  rooms: PropTypes.arrayOf(
    room.isRequired
  ),
};

export default FavoriteElements;
