const menuUpArray = [
  {
    id: 0,
    class: 'places__option--active',
    title: 'Popular',
  },
  {
    id: 1,
    class: '',
    title: 'Price: low to high',
  },
  {
    id: 2,
    class: '',
    title: 'Price: high to low',
  },
  {
    id: 3,
    class: '',
    title: 'Top rated first',
  }];

const rooms = [
  {
    id: 0,
    level: 'Premium',
    img: '../img/apartment-01.jpg',
    priceValue: '120',
    priceText: 'night',
    bookmark: 'To bookmarks',
    rating: 80,
    card: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 1,
    level: '',
    img: 'img/room.jpg',
    priceValue: '80',
    priceText: 'night',
    bookmark: 'In bookmarks',
    rating: 30,
    card: 'Wood and stone placen',
    type: 'Private room',
  },
  {
    id: 2,
    level: '',
    img: 'img/apartment-02.jpg',
    priceValue: '132',
    priceText: 'night',
    bookmark: 'To bookmarks',
    rating: 50,
    card: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 3,
    level: 'Premium',
    img: 'img/apartment-03.jpg',
    priceValue: '180',
    priceText: 'night',
    bookmark: 'To bookmarks',
    rating: 100,
    card: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 4,
    level: '',
    img: 'img/room.jpg',
    priceValue: '80',
    priceText: 'night',
    bookmark: 'In bookmarks',
    rating: 80,
    card: 'Wood and stone place',
    type: 'Private room',
  }
];

const cities = [
  {
    id: 0,
    cityName: 'Paris',
    places: 310,
  },
  {
    id: 2,
    cityName: 'Cologne',
    places: 311,
  },
  {
    id: 3,
    cityName: 'Brussels',
    places: 212,
  },
  {
    id: 4,
    cityName: 'Amsterdam',
    places: 312,
  },
  {
    id: 5,
    cityName: 'Hamburg',
    places: 313,
  },
  {
    id: 6,
    cityName: 'Dusseldorf',
    places: 314,
  }
];

export { menuUpArray, rooms, cities };
