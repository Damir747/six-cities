/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

import roomsType from '../../types/rooms';
import FavoriteCityRoom from './favorite-city-room';

const FavoriteCityRooms = ({ favoriteRooms }) => {
  return (
    <React.Fragment>
      {favoriteRooms.map((room) => {
        return (
          <FavoriteCityRoom
            key={room.id}
            room={room}
          />
        );
      })
      }
    </React.Fragment>
  );
};

FavoriteCityRooms.propTypes = {
  favoriteRooms: roomsType,
};

export default FavoriteCityRooms;
