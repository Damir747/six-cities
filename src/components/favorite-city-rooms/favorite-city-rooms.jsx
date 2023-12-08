/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

import roomsType from '../../types/rooms';
import FavoriteCityRoom from './favorite-city-room';

const FavoriteCityRooms = ({ favoriteRooms, onChangeFavorite }) => {
  return (
    <React.Fragment>
      {favoriteRooms.map((room) => {
        return (
          <FavoriteCityRoom
            key={room.id}
            room={room}
            onChangeFavorite={onChangeFavorite}
          />
        );
      })
      }
    </React.Fragment>
  );
};

FavoriteCityRooms.propTypes = {
  favoriteRooms: roomsType,
  onChangeFavorite: PropTypes.func.isRequired,
};

export default FavoriteCityRooms;
