/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FavoriteCityRooms from '../favorite-city-rooms/favorite-city-rooms';
import roomsType from '../../types/rooms';
import { AppRoute } from '../../const';

const FavoriteCity = ({ city, filteredRooms }) => {
  return (
    <React.Fragment>
      <li key={city} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoute.ROOT}>
              <span>{city}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          <FavoriteCityRooms
            favoriteRooms={filteredRooms}
          />
        </div>
      </li>
    </React.Fragment>
  );
};

FavoriteCity.propTypes = {
  city: PropTypes.string,
  filteredRooms: roomsType,
};

export default FavoriteCity;
