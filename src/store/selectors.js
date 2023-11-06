const getAuthorizationStatus = (state) => state.INIT.authorizationStatus;

const getLoginName = (state) => state.INIT.loginName ? state.INIT.loginName.email : null;

const getActiveCity = (state) => state.INIT.activeCity;

const getActiveCityCoordinates = (state) => getCities(state)[getActiveCity(state)];

const getCities = (state) => state.INIT.cities;

const getHotel = (state) => state.INIT.hotel;

const getMenuUpArray = (state) => state.INIT.menuUpArray;

const getPropertyInside = (state) => state.INIT.propertyInside;

const getRooms = (state) => state.INIT.rooms;

const getFavoriteRooms = (state) => {
  return getRooms(state).filter((item) => item.bookmark === 'In bookmarks');
};

const getReviews = (state) => state.INIT.reviews;

const getSort = (state) => state.INIT.sort;

const getIsDataLoaded = (state) => state.INIT.isDataLoaded;

const getIsHotelLoaded = (state) => state.INIT.isHotelLoaded;

const getNotifications = (state) => state.INIT.notifications;

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
