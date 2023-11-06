import { getActiveCity } from "./city-data/selectors";

const getMenuUpArray = (state) => state.INIT.menuUpArray;

const getPropertyInside = (state) => state.INIT.propertyInside;

const getHotel = (state) => state.HOTEL.hotel;

const getRooms = (state) => state.HOTEL.rooms;

const getIsDataLoaded = (state) => state.HOTEL.isDataLoaded;

const getIsHotelLoaded = (state) => state.HOTEL.isHotelLoaded;

const getFavoriteRooms = (state) => {
  return getRooms(state).filter((item) => item.bookmark === 'In bookmarks');
};

const getReviews = (state) => state.COMMENT.reviews;

const getSort = (state) => state.SORT.sort;

const getNotifications = (state) => state.NOTIFICATION.notifications;

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
  const filteredRooms = getRooms(state).filter((room) => room.cityName === getActiveCity(state)).slice();
  return sortedRooms(filteredRooms, getSort(state));
};

export { getHotel, getMenuUpArray, getPropertyInside, getRooms, getReviews, getSort, sortedRooms, getFilteredRooms, getFavoriteRooms, getIsDataLoaded, getIsHotelLoaded, getNotifications };
