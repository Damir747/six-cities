import { getRooms } from '../hotel-data/selectors';

const getFavoriteRooms = (state) => {
  return getRooms(state).filter((item) => item.bookmark === 'In bookmarks');
};

export { getFavoriteRooms };
