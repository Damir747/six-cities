const getAuthorizationStatus = (state) => state.authorizationStatus;

const getLoginName = (state) => state.loginName ? state.loginName.email : null;

const getActiveCity = (state) => state.activeCity;

const getActiveCityCoordinates = (state) => getCities(state)[getActiveCity(state)];

const getCities = (state) => state.cities;

const getMenuUpArray = (state) => state.menuUpArray;

const getPropertyInside = (state) => state.propertyInside;

const getRooms = (state) => state.rooms;

const getFavoriteRooms = (state) => {
  return getRooms(state).filter((item) => item.bookmark === 'In bookmarks');
};

const getReviews = (state) => state.reviews;

const getSort = (state) => state.sort;

const getIsDataLoaded = (state) => state.isDataLoaded;

const getNotifications = (state) => state.notifications;

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

export { getAuthorizationStatus, getLoginName, getCities, getMenuUpArray, getPropertyInside, getRooms, getReviews, getSort, sortedRooms, getFilteredRooms, getActiveCity, getActiveCityCoordinates, getFavoriteRooms, getIsDataLoaded, getNotifications };
