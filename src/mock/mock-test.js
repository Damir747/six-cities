import cities from '../mock/mock-cities';
import propertyInside from '../mock/mock-property-inside';
import { AuthorizationStatus, BOOKMARKS } from '../const';

const room = {
  bookmark: BOOKMARKS.TO,
  card: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
  city: { name: "Brussels", location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 } },
  cityName: "Brussels",
  coordinates: { lat: 50.827557, lng: 4.336697, zoom: 16 },
  description: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
  features: [
    {
      "className": "property__feature--entire",
      "featureName": "house",
      "id": 0,
    },
    {
      "className": "property__feature--bedrooms",
      "featureName": "5 Bedrooms",
      "id": 1,
    },
    {
      "className": "property__feature--adults",
      "featureName": "Max 5 adults",
      "id": 2,
    },
  ],
  goods: ["Laptop friendly workspace", "Breakfast"],
  host: { title: "Meet the host", user: { id: 25, name: "Angelina", img: "img/avatar-angelina.jpg", status: "Pro" } },
  id: 1,
  images: [{ id: 0, src: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg", alt: "Photo room" }, { id: 1, src: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg", alt: "Photo room" }, { id: 2, src: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg", alt: "Photo room" }],
  img: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg",
  level: "",
  priceText: "night",
  priceValue: "939",
  rating: 76,
  title: "Loft Studio in the Central Area",
  type: "house",
};
const serverRoom = {
  bedrooms: 5,
  city: { name: "Brussels", location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 } },
  description: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
  goods: ["Laptop friendly workspace", "Breakfast"],
  host: { id: 25, name: "Angelina", is_pro: true, avatar_url: "img/avatar-angelina.jpg" },
  id: 1,
  images: ["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg", "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg", "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg"],
  is_favorite: false,
  is_premium: false,
  location: { latitude: 50.827557, longitude: 4.336697, zoom: 16 },
  max_adults: 5,
  preview_image: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg",
  price: 939,
  rating: 3.8,
  title: "Loft Studio in the Central Area",
  type: "house"
};

const initialMockState = {
  HOTEL: {
    hotel: null,
    rooms: [room],
    serverRooms: [serverRoom],
    neighbourhood: [room],
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
    favorites: [room],
    serverRooms: [serverRoom],
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
