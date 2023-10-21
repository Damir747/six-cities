import React, { useEffect, useState } from 'react';
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

import { getHotel, getIsHotelLoaded, getPropertyInside, getRooms } from "../../store/selectors";
import { connect } from "react-redux";
import Loading from '../loading/loading';

const Property = ({ idActiveRoom, onMouseEnter, onMouseLeave, rooms, neighbourhood, isHotelLoaded, onLoadHotel, onLoadComments }) => {
  const [fetchingHotel, setFetchingHotel] = useState(true);
  const [fetchingComments, setFetchingComments] = useState(true);

  const idRoom = Number(useParams().id);
  const [room, setRoom] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    onLoadHotel(idRoom)
      .then((value) => {
        setFetchingHotel(false);
        setRoom(value);
      });
    onLoadComments(idRoom)
      .then((value) => {
        setFetchingComments(false);
        setReviews(value);
      });
  }, [fetchingHotel, fetchingComments]);

  // useEffect(() => {
  //   fetchCommentsList(id);
  // }, [id, fetchCommentsList]);

  if (fetchingHotel || fetchingComments || !isHotelLoaded || !room) {
    return (
      <Loading />
    );
  }
  const { id, level, img, priceValue, priceText, bookmark, rating, card, type, description, host, images, cityName } = room;

  return (
    <React.Fragment>
      <Top />

      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images && images.map((image) => (
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
                  {room.features && room.features.map((feature) => (
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
                  <h2 className="property__host-title">{host && host.title}</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={room.host && room.host.user && room.host.user.img} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {room.host && room.host.user && room.host.user.name}
                    </span>
                    <span className="property__user-status">
                      {host && host.user && host.user.status}
                    </span>
                  </div>
                  <div className="property__description">

                    <p className="property__text">
                      {description}
                    </p>

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
  neighbourhood: roomsType,
  isHotelLoaded: PropTypes.bool.isRequired,
  onLoadHotel: () => { },
  onLoadComments: () => { },
};

const mapStateToProps = (state) => ({
  rooms: getRooms(state),
  neighbourhood: getRooms(state).slice(2, 5),
  isHotelLoaded: getIsHotelLoaded(state),
});

export { Property };
export default connect(mapStateToProps)(Property);
