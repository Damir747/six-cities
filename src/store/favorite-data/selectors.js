import { getRooms } from '../hotel-data/selectors';

const getFavoriteRooms = (state) => {
  return getRooms(state).filter((item) => item.bookmark === 'In bookmarks');
};

const getFavorite = (state, idRoom) => {
  const findRoom = getRooms(state).slice().filter((room) => room.id === idRoom);
  if (!findRoom.length) {
    return -1;
  }
  return findRoom[0].bookmark;
};

const getReverseFavorite = (state, idRoom) => getFavorite(state, idRoom) === 1 ? 0 : 1;

export { getFavoriteRooms, getFavorite, getReverseFavorite };
