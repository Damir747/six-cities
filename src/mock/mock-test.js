import cities from '../mock/mock-cities';
import propertyInside from '../mock/mock-property-inside';
import { AuthorizationStatus } from '../const';

const initialMockState = {
  HOTEL: {
    hotel: null,
    rooms: [{
      bookmark: "To bookmarks",
      card: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
      city: { name: "Brussels", location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 } },
      cityName: "Brussels",
      coordinates: { lat: 50.827557, lng: 4.336697, zoom: 16 },
      description: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
      features: [],
      goods: ["Laptop friendly workspace", "Breakfast"],
      host: { title: "Meet the host", user: {} },
      id: 1,
      images: [],
      img: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg",
      level: "",
      priceText: "night",
      priceValue: "939",
      rating: 76,
      title: "Loft Studio in the Central Area",
      type: "house",
    }],
    neighbourhood: [{
      city: {},
      images: [],
      title: '',
      rating: '',
      type: '',
      goods: [],
      host: {},
      description: '',
      id: 2,
      level: '',
      img: '',
      priceValue: '',
      priceText: '',
      bookmark: 'To bookmarks',
      card: '',
    }],
    isHotelListLoading: false,
    isHotelListLoaded: false,
    reviews: [],
    isHotelLoading: false,
    isHotelLoaded: false,
    isCommentLoading: false,
    isCommentLoaded: false,
    isNeighbourhoodLoading: false,
    isNeighbourhoodLoaded: false,
  },
  CITY: {
    activeCity: 'Brussels',
    cities,
    currentCity: 'Brussels',
    isCityListLoaded: false,
    isCityListLoading: false,
  },
  FAVORITES: {
    favorites: [{
      bookmark: "To bookmarks",
      card: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
      city: { name: "Brussels", location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 } },
      cityName: "Brussels",
      coordinates: { lat: 50.827557, lng: 4.336697, zoom: 16 },
      description: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
      features: [],
      goods: ["Laptop friendly workspace", "Breakfast"],
      host: { title: "Meet the host", user: {} },
      id: 1,
      images: [],
      img: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg",
      level: "",
      priceText: "night",
      priceValue: "939",
      rating: 76,
      title: "Loft Studio in the Central Area",
      type: "house",
    }],
    isFavoriteListLoading: false,
    isFavoriteListLoaded: false,
  },
  COMMENT: {
    comment: '',
  },
  INIT: {
    propertyInside,
  },
  LOGIN: {
    loginName: '',
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
  NOTIFICATION: {
    notifications: [],
  },
  SORT: {
    sort: 0,
  }
};

export { initialMockState };
