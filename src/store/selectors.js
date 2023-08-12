const getLoginName = (state) => state.loginName;

const getIdActiveCity = (state) => state.idActiveCity;

const getNameActiveCity = (state) => {
  const cities = getCities(state);
  const idActiveCity = cities.findIndex((city) => city.id === getIdActiveCity(state));
  return cities[idActiveCity].cityName;
};

const getActiveCity = (state) => {
  return getCities(state).filter((city) => city.id === getIdActiveCity(state))[0];
};

const getCities = (state) => state.cities;

const getMenuUpArray = (state) => state.menuUpArray;

const getPropertyInside = (state) => state.propertyInside;

const getRooms = (state) => state.rooms;

const getReviews = (state) => state.reviews;

const getSort = (state) => state.sort;

const sortedRooms = (rooms, sortType) => {
  switch (sortType) {
    case (1): {
      return rooms.sort((a, b) => a.priceValue - b.priceValue);
    }
    case (2): {
      return rooms.sort((a, b) => b.priceValue - a.priceValue);
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
  const filteredRooms = getRooms(state).filter((room) => room.cityName === getNameActiveCity(state)).slice();
  return sortedRooms(filteredRooms, getSort(state));
};

export { getLoginName, getIdActiveCity, getCities, getMenuUpArray, getPropertyInside, getRooms, getReviews, getSort, sortedRooms, getFilteredRooms, getActiveCity };
