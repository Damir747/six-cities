/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import roomsType from '../../types/rooms';
import FavoriteCityRoom from './favorite-city-room';
import { getFavoriteList } from '../../store/favorite-data/selectors';

const FavoriteCityRooms = ({ favoriteRooms, city }) => {
  favoriteRooms.map((room) => console.log(room));
  return (
    <React.Fragment>
      <div className="favorites__places">
        {favoriteRooms.map((room) => {
          (<><div>{room}</div>
            <FavoriteCityRoom
              key={room.id}
              room={room}
            /></>);
        })
        }
      </div>
    </React.Fragment>
  );
};

FavoriteCityRooms.propTypes = {
  favoriteRooms: roomsType,
  city: PropTypes.string
};

export default FavoriteCityRooms;
