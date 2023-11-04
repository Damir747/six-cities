/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import roomsType from '../../types/rooms';
import { AppRoute } from '../../const';
import { capitalizeFirstLetter, roundRating } from '../../utils/utils';
import { getFavoriteRooms } from '../../store/selectors';
import FavorityCityRoom from './favority-city-room';

const FavoriteCityRooms = ({ favoriteRooms, city }) => {
  const filteredRooms = favoriteRooms.filter((room) => room.cityName === city);
  return (
    <React.Fragment>
      <div className="favorites__places">
        {filteredRooms.map((room) => {
          <FavorityCityRoom
            key={room.id}
            room={room}
          />;
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

const mapStateToProps = (state) => ({
  favoriteRooms: getFavoriteRooms(state),
});

export { FavoriteCityRooms };
export default connect(mapStateToProps)(FavoriteCityRooms);
