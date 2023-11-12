/* eslint-disable indent */
import { getActiveCity } from '../city-data/selectors';
import { NameSpace } from '../root-reducer';
import { getSort } from '../sort-data/selectors';
import { createSelector } from '@reduxjs/toolkit';

// ? reselect для фильтрации

const getHotel = (state) => state[NameSpace.HOTEL].hotel;
const getRooms = (state) => state[NameSpace.HOTEL].rooms;
const getIsDataLoaded = (state) => state[NameSpace.HOTEL].isDataLoaded;
const getIsHotelLoaded = (state) => state[NameSpace.HOTEL].isHotelLoaded;
const sortedRooms = (rooms, sortType) => {
  switch (sortType) {
    case (1): {
      return rooms.sort((a, b) => +a.priceValue - +b.priceValue);
    }
    case (2): {
      return rooms.sort((a, b) => +b.priceValue - +a.priceValue);
    }
    case (3): {
      return rooms.sort((a, b) => b.rating - a.rating);
    }
    default: {
      return rooms;
    }
  }
};

const getFilteredRooms = (state) => {
  const filteredRooms = createSelector(
    getRooms,
    (rooms) => rooms.filter((room) => room.cityName === getActiveCity(state))
  );

  return sortedRooms(filteredRooms(state), getSort(state));
};

export { getHotel, getRooms, getIsDataLoaded, getIsHotelLoaded, sortedRooms, getFilteredRooms };
