import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import Top from '../top/top';
import Header from '../header/header';
import PropertyInside from '../property-inside/property-inside';
import Reviews from '../reviews/reviews';
import CityMap from '../city-map/city-map';
import Room from '../room/room';
import { bookmarkClassname, classname, numberRating, roundRating } from '../../utils/utils';
import roomsType from '../../types/rooms';

import { getIsHotelLoaded, getNeighbourhood, getRooms } from '../../store/hotel-data/selectors';
import { connect } from 'react-redux';
import Loading from '../loading/loading';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus, Frame } from '../../const';
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { useHistory } from "react-router-dom";
import { fetchFavorite, fetchHotel, fetchNeighbourhood } from '../../store/hotel-data/api-actions';
import { fetchCommentsList } from '../../store/comment-data/api-actions';
import { selectCurrentCity } from '../../store/city-data/actions';
import { getCurrentCity, getCurrentCityCoordinates } from '../../store/city-data/selectors';

const Property = ({ rooms, isHotelLoaded, currentCity, coordinates, neighbourhood,
  onLoadHotel, onLoadComments, onChangeFavorite, onLoadNeighbourhood, onSelectCurrentCity, authorizationStatus }) => {
  const history = useHistory();

  const [fetchingHotel, setFetchingHotel] = useState(true);
  const [fetchingComments, setFetchingComments] = useState(true);
  const [fetchingNeighbourhood, setFetchingNeighbourhood] = useState(true);

  const idHotelParam = Number(useParams().id);
  const room = rooms.find((el) => el.id === idHotelParam);
  // ? доделать. Работает, но нужно навести красоту

  const [idActiveRoom, setActiveRoom] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveRoom(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveRoom(null);
  }, []);

  useEffect(() => {
    onLoadHotel(idHotelParam)
      .then((value) => {
        onSelectCurrentCity(value.cityName);
        setFetchingHotel(false);
      })
      .catch((err) => console.log(err));
    onLoadComments(idHotelParam)
      .then((_value) => {
        setFetchingComments(false);
      })
      .catch((err) => console.log(err));
    onLoadNeighbourhood(idHotelParam)
      .then((_value) => {
        setFetchingNeighbourhood(false);
      })
      .catch((err) => console.log(err));
  }, [fetchingHotel, fetchingComments, fetchingNeighbourhood, idHotelParam]);

  if (fetchingHotel || fetchingComments || fetchingNeighbourhood || !isHotelLoaded) {
    return (
      <Loading />
    );
  }

  if (!room) {
    return (
      <NotFoundScreen />
    );
  }

  const { id, level, img, priceValue, priceText, bookmark, rating, card, type, description, host, images, cityName } = room;

  const handleAddToFavorites = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onChangeFavorite(id);
    } else {
      history.push(AppRoute.LOGIN);
    }
  };

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
                  <button className={bookmarkClassname('property', bookmark)} type="button" onClick={handleAddToFavorites}>
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

                <Reviews
                  idHotel={idHotelParam}
                />

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
                    frame={Frame.NEAR_PLACES}
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
  rooms: roomsType,
  isHotelLoaded: PropTypes.bool.isRequired,
  currentCity: PropTypes.string,
  coordinates: PropTypes.object,
  onLoadHotel: PropTypes.func.isRequired,
  onSelectCurrentCity: PropTypes.func.isRequired,
  onLoadNeighbourhood: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  onChangeFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  neighbourhood: roomsType,
};

const mapStateToProps = (state) => ({
  rooms: getRooms(state),
  currentCity: getCurrentCity(state),
  coordinates: getCurrentCityCoordinates(state),
  isHotelLoaded: getIsHotelLoaded(state),
  authorizationStatus: getAuthorizationStatus(state),
  neighbourhood: getNeighbourhood(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(idHotel) {
    return dispatch(fetchCommentsList(idHotel));
  },
  onChangeFavorite(idHotel) {
    dispatch(fetchFavorite(idHotel));
  },
  onLoadHotel(idHotel) {
    return dispatch(fetchHotel(idHotel));
  },
  onSelectCurrentCity(city) {
    dispatch(selectCurrentCity(city));
  },
  onLoadNeighbourhood(idHotel) {
    return dispatch(fetchNeighbourhood(idHotel));
  },
});

export { Property };
export default connect(mapStateToProps, mapDispatchToProps)(Property);
