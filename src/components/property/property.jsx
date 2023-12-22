import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import Top from '../top/top';
import Header from '../header/header';
import PropertyInside from '../property-inside/property-inside';
import Reviews from '../reviews/reviews';
import CityMap from '../city-map/city-map';
import Room from '../room/room';
import { classname, numberRating, roundRating } from '../../utils/utils';

import { getIsCommentLoaded, getIsHotelLoaded, getIsNeighbourhoodLoaded, getNeighbourhood, getRooms } from '../../store/hotel-data/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading/loading';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { LevelFrame, RoomFrame } from '../../const';
import { fetchHotel, fetchNeighbourhood } from '../../store/hotel-data/api-actions';
import { fetchCommentsList } from '../../store/comment-data/api-actions';
import { selectCurrentCity } from '../../store/city-data/actions';
import { getCurrentCity, getCurrentCityCoordinates } from '../../store/city-data/selectors';
import { initHotel } from '../../store/hotel-data/actions';
import ButtonAddToFavorites from '../button-add-to-favorites/button-add-to-favorites';

// ? доделать. Работает, но нужно навести красоту

const Property = ({ onLogin }) => {
  const rooms = useSelector(getRooms);
  const currentCity = useSelector(getCurrentCity);
  const coordinates = useSelector(getCurrentCityCoordinates);
  const neighbourhood = useSelector(getNeighbourhood);
  const isHotelLoaded = useSelector(getIsHotelLoaded);
  const isCommentLoaded = useSelector(getIsCommentLoaded);
  const isNeighbourhoodLoaded = useSelector(getIsNeighbourhoodLoaded);
  const dispatch = useDispatch();

  const idHotelParam = Number(useParams().id);
  const room = rooms.find((el) => el.id === idHotelParam);
  if (!room) {
    return (
      <NotFoundScreen />
    );
  }

  const [idActiveRoom, setActiveRoom] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveRoom(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveRoom(null);
  }, []);

  useEffect(() => {
    dispatch(initHotel());
  }, [idHotelParam]);

  useEffect(() => {
    if (!isHotelLoaded) {
      dispatch(fetchHotel(idHotelParam))
        .then((value) => {
          dispatch(selectCurrentCity(value.cityName));
        })
        .catch((err) => console.log(err));
    }
    if (!isCommentLoaded) {
      dispatch(fetchCommentsList(idHotelParam));
    }
    if (!isNeighbourhoodLoaded) {
      dispatch(fetchNeighbourhood(idHotelParam));
    }
  }, [isHotelLoaded, isCommentLoaded, isNeighbourhoodLoaded]);

  if (!isHotelLoaded || !isCommentLoaded || !isNeighbourhoodLoaded) {
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

                  <ButtonAddToFavorites
                    id={id}
                    bookmark={bookmark}
                    frame={RoomFrame.PROPERTY} />

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
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">

                    <PropertyInside />

                  </ul>
                </div >
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
                <section className="property__reviews reviews">

                  <Reviews
                    idHotel={idHotelParam}
                  />

                </section>
              </div>
            </div>
            <section className="property__map map">
              <CityMap
                city={currentCity}
                coordinates={coordinates}
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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    frame={LevelFrame.NEAR_PLACES}
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
  onLogin: PropTypes.func,
};

export default Property;
