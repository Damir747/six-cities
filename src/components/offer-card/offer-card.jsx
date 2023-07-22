import React from "react";
import { cities } from "../mock-data";
// 'place-card__bookmark-button--active' - в избранном

const OfferCard = () => {

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {cities.map((city) => {
          return (
            <article key={city.key} className="cities__place-card place-card">
              <div className="place-card__mark" hidden={!city.level}>
                <span>{city.level}</span>
              </div>
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={city.img} width="260" height="200" alt="Place image" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{city.priceValue}</b>
                    <span className="place-card__price-text">&#47;&nbsp;{city.priceText}</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{city.bookmark}</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: `${city.rating}%` }} ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">{city.card}</a>
                </h2>
                <p className="place-card__type">{city.type}</p>
              </div>
            </article >
          )
        }
        )}
      </div >
    </>
  );
}

export default OfferCard;
