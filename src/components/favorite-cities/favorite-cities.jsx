/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';

import { getCities } from '../../store/city-data/selectors';
import { getFavoriteRooms } from '../../store/hotel-data/selectors';
import FavoriteCity from './favorite-city';

const FavoriteCities = () => {
  const cities = useSelector(getCities);
  const favoriteRooms = useSelector(getFavoriteRooms);
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
            />
          );
        }
        return '';
      }
      )}
    </React.Fragment>
  );
};

export default FavoriteCities;
