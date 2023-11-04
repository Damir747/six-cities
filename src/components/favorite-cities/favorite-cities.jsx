/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FavoriteCityRooms from "../favorite-city-rooms/favorite-city-rooms";
import roomsType from '../../types/rooms';
import { AppRoute } from "../../const";
import { getCities, getFavoriteRooms } from "../../store/selectors";

const FavoriteCities = ({ cities, favoriteRooms }) => {
  return (
    <React.Fragment>
      {Object.keys(cities).sort((a, b) => a > b).map((city) => {
        const filteredRooms = favoriteRooms.filter((room) => room.cityName === city);
        if (filteredRooms.length > 0) {
          return (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={AppRoute.ROOT}>
                    <span>{city}</span>
                  </Link>
                </div>
              </div>

              <FavoriteCityRooms city={city} />

            </li>
          );
        }
        return '';
      })}
    </React.Fragment >
  );
};

FavoriteCities.propTypes = {
  cities: PropTypes.object,
  favoriteRooms: roomsType,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  favoriteRooms: getFavoriteRooms(state),
});

export { FavoriteCities };
export default connect(mapStateToProps)(FavoriteCities);
