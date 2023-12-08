/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import roomsType from '../../types/rooms';
import { getCities } from '../../store/city-data/selectors';
import { getFavoriteRooms } from '../../store/hotel-data/selectors';
import FavoriteCity from './favorite-city';

const FavoriteCities = ({ cities, favoriteRooms, onChangeFavorite }) => {

  return (
    <React.Fragment>
      {Object.keys(cities).sort((a, b) => a > b).map((city) => {
        const filteredRooms = favoriteRooms.slice().filter((room) => room.cityName === city);
        if (filteredRooms.length > 0) {
          return (
            <FavoriteCity
              key={city}
              city={city}
              filteredRooms={filteredRooms}
              onChangeFavorite={onChangeFavorite}
            />
          );
        }
        return '';
      }
      )}
    </React.Fragment>
  );
};

FavoriteCities.propTypes = {
  cities: PropTypes.object,
  favoriteRooms: roomsType,
  onChangeFavorite: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  favoriteRooms: getFavoriteRooms(state),
});

export { FavoriteCities };
export default connect(mapStateToProps)(FavoriteCities);
