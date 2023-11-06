const getAuthorizationStatus = (state) => state.LOGIN.authorizationStatus;

const getLoginName = (state) => state.LOGIN.loginName ? state.LOGIN.loginName.email : null;

const getActiveCity = (state) => state.CITY.activeCity;

const getActiveCityCoordinates = (state) => getCities(state)[getActiveCity(state)];

const getCities = (state) => state.CITY.cities;

const getHotel = (state) => state.HOTEL.hotel;

const getMenuUpArray = (state) => state.INIT.menuUpArray;

const getPropertyInside = (state) => state.INIT.propertyInside;

const getRooms = (state) => state.HOTEL.rooms;

const getFavoriteRooms = (state) => {
  return getRooms(state).filter((item) => item.bookmark === 'In bookmarks');
};

const getReviews = (state) => state.COMMENT.reviews;

const getSort = (state) => state.SORT.sort;

const getIsDataLoaded = (state) => state.HOTEL.isDataLoaded;

const getIsHotelLoaded = (state) => state.HOTEL.isHotelLoaded;

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

export { getAuthorizationStatus, getLoginName, getCities, getHotel, getMenuUpArray, getPropertyInside, getRooms, getReviews, getSort, sortedRooms, getFilteredRooms, getActiveCity, getActiveCityCoordinates, getFavoriteRooms, getIsDataLoaded, getIsHotelLoaded, getNotifications };
