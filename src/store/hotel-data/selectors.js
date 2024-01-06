/* eslint-disable indent */
import { BOOKMARKS } from '../../const';
import { getActiveCity } from '../city-data/selectors';
import { NameSpace } from '../root-reducer';
import { getSort } from '../sort-data/selectors';
import { createSelector } from '@reduxjs/toolkit';

const getHotel = (state) => state[NameSpace.HOTEL].hotel;
const getRooms = (state) => state[NameSpace.HOTEL].rooms ? state[NameSpace.HOTEL].rooms : [];
const getRoom = (state, idRoom) => getRooms(state)[idRoom];
const getBookmark = (state, idRoom) => getRoom(state, idRoom).bookmark;

const getIsHotelListLoading = (state) => state[NameSpace.HOTEL].isHotelListLoading;
const getIsHotelListLoaded = (state) => state[NameSpace.HOTEL].isHotelListLoaded;
const getIsHotelLoading = (state) => state[NameSpace.HOTEL].isHotelLoading;
const getIsHotelLoaded = (state) => state[NameSpace.HOTEL].isHotelLoaded;
const getIsCommentLoading = (state) => state[NameSpace.HOTEL].isCommentLoading;
const getIsCommentLoaded = (state) => state[NameSpace.HOTEL].isCommentLoaded;
const getIsNeighbourhoodLoading = (state) => state[NameSpace.HOTEL].isNeighbourhoodLoading;
const getIsNeighbourhoodLoaded = (state) => state[NameSpace.HOTEL].isNeighbourhoodLoaded;

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

const getFavoriteRooms = (state) => getRooms(state).slice().filter((item) => item.bookmark === BOOKMARKS.IN);

const getFavorite = (state, idRoom) => {
  const findRoom = getRooms(state).slice().filter((room) => room.id === idRoom);
  if (!findRoom.length) {
    return -1;
  }
  return findRoom[0].bookmark;
};

const getReverseFavorite = (state, idRoom) => getFavorite(state, idRoom) === BOOKMARKS.IN ? 0 : 1;

const getNeighbourhood = (state) => state[NameSpace.HOTEL].neighbourhood;

export {
  getHotel,
  getRooms,
  getRoom,
  getBookmark,
  getIsHotelListLoading,
  getIsHotelListLoaded,
  getIsHotelLoading,
  getIsHotelLoaded,
  getIsCommentLoading,
  getIsCommentLoaded,
  getIsNeighbourhoodLoading,
  getIsNeighbourhoodLoaded,
  sortedRooms,
  getFilteredRooms,
  getFavoriteRooms,
  getFavorite,
  getReverseFavorite,
  getNeighbourhood,
};
