import { IN_BOOKMARKS, TO_BOOKMARKS } from "../const";

const rooms = [
  {
    id: 0,
    level: 'Premium',
    img: '../img/apartment-01.jpg',
    priceValue: '120',
    priceText: 'night',
    bookmark: IN_BOOKMARKS,
    rating: 80,
    card: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    cityName: 'Amsterdam',
    description: [
      {
        id: 0,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
      },
      {
        id: 1,
        text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
      }
    ],
    host: {
      title: 'Meet the host',
      user: {
        name: 'Angelina',
        img: 'img/avatar-angelina.jpg',
        status: 'Pro',
      }
    },
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
    images: [
      {
        id: 0,
        src: 'img/room.jpg',
        alt: 'Photo room'
      },
      {
        id: 1,
        src: 'img/apartment-01.jpg',
        alt: 'Photo apartment'
      },
      {
        id: 2,
        src: 'img/apartment-02.jpg',
        alt: 'Photo apartment'
      },
      {
        id: 3,
        src: 'img/apartment-03.jpg',
        alt: 'Photo apartment'
      },
      {
        id: 4,
        src: 'img/studio-01.jpg',
        alt: 'Photo studio'
      },
      {
        id: 5,
        src: 'img/apartment-01.jpg',
        alt: 'Photo apartment'
      }
    ],
    features: [
      {
        id: 0,
        featureName: 'Apartment',
        className: 'property__feature--entire',
      },
      {
        id: 1,
        featureName: '3 Bedrooms',
        className: 'property__feature--bedrooms',
      },
      {
        id: 2,
        featureName: 'Max 4 adults',
        className: 'property__feature--adults',
      },
    ],
  },
  {
    id: 1,
    level: '',
    img: 'img/room.jpg',
    priceValue: '80',
    priceText: '',
    bookmark: IN_BOOKMARKS,
    rating: 30,
    card: 'Wood and stone placen',
    type: 'room',
    cityName: 'Cologne',
    coordinates: {
      lat: 52.390955394350,
      lng: 4.939309666406198,
    },
  },
  {
    id: 2,
    level: '',
    img: 'img/apartment-02.jpg',
    priceValue: '132',
    priceText: 'night',
    bookmark: TO_BOOKMARKS,
    rating: 50,
    card: 'Canal View Prinsengracht',
    type: 'apartment',
    cityName: 'Amsterdam',
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
  },
  {
    id: 3,
    level: 'Premium',
    img: 'img/apartment-03.jpg',
    priceValue: '180',
    priceText: 'night',
    bookmark: TO_BOOKMARKS,
    rating: 100,
    card: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    cityName: 'Amsterdam',
    coordinates: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
  },
  {
    id: 4,
    level: '',
    img: 'img/room.jpg',
    priceValue: '80',
    priceText: 'night',
    bookmark: TO_BOOKMARKS,
    rating: 80,
    card: 'Wood and stone place',
    type: 'private room',
    cityName: 'Amsterdam',
    coordinates: {
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },
  }
];

export default rooms;
