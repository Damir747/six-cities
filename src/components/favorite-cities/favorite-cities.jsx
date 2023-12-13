/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';

import { getCities } from '../../store/city-data/selectors';
import { getFavoriteRooms } from '../../store/hotel-data/selectors';
import FavoriteCity from './favorite-city';
import { NameSpace } from '../../store/root-reducer';

const FavoriteCities = () => {
  const { cities } = useSelector((state) => state[NameSpace.CITY]);
  const favoriteRooms = useSelector((state) => getFavoriteRooms(state));
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
