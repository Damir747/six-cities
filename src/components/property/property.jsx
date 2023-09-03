import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Top from "../top/top";
import Header from "../header/header";
import PropertyInside from "../property-inside/property-inside";
import Reviews from "../reviews/reviews";
import CityMap from "../city-map/city-map";
import Room from "../room/room";
import { bookmarkClassname, classname, numberRating, roundRating } from "../../utils/utils";

import roomsType from "../../types/rooms";
import reviewsType from "../../types/reviews";

import { getRooms } from "../../store/selectors";
import { connect } from "react-redux";

const Property = ({ idActiveRoom, onMouseEnter, onMouseLeave, rooms, reviews, neighbourhood }) => {
  const room = rooms.slice().filter((el) => el.id === (idActiveRoom ? idActiveRoom : 0))[0];
  const { id, level, img, priceValue, priceText, bookmark, rating, card, type, description, host, images, cityName } = room;
  const idOffer = useParams();

  return (
    <React.Fragment>
      <Top />

      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image) => (
                  <div key={image.id} className="property__image-wrapper">
                    <img className="property__image" src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {level && <div className="property__mark">
                  <span>{level}</span>
                </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {card}
                  </h1>
                  <button className={bookmarkClassname('property', bookmark)} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{bookmark}</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${roundRating(rating)}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{numberRating(rating)}</span>
                </div>
                <ul className="property__features">
                  {room.features.map((feature) => (
                    <li key={feature.id} className={classname('property__feature', feature.className)}>
                      {feature.featureName}
                    </li>
                  ))}
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{priceValue}</b>
                  <span className="property__price-text">&nbsp;{priceText || 'ночь'}</span>
                </div>

                <PropertyInside />

                <div className="property__host">
                  <h2 className="property__host-title">{host.title}</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.user.img} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.user.name}
                    </span>
                    <span className="property__user-status">
                      {host.user.status}
                    </span>
                  </div>
                  <div className="property__description">
                    {description.map((item) => (
                      <p key={item.id} className="property__text">
                        {item.text}
                      </p>
                    ))}
                  </div>
                </div>

                <Reviews />

              </div>
            </div>
            <section className="property__map map">
              <CityMap
                rooms={neighbourhood}
                idActiveRoom={idActiveRoom}

              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {neighbourhood.map((neighbour) => (
                  <Room
                    key={neighbour.id}
                    roomElement={neighbour}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    frame='near-places'
                  />
                ))
                }
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment >
  );
};

Property.propTypes = {
  idActiveRoom: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  rooms: roomsType,
  reviews: reviewsType,
  neighbourhood: roomsType,
};

const mapStateToProps = (state) => ({
  rooms: getRooms(state),
  neighbourhood: getRooms(state).slice(2, 5),
});

export { Property };
export default connect(mapStateToProps)(Property);
