const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/`,
};

const IN_BOOKMARKS = 'In bookmarks';
const TO_BOOKMARKS = 'To bookmarks';
const BOOKMARKS = {
  IN: 'In bookmarks',
  TO: 'To bookmarks'
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

// отображение полоски с уровнем премиальности отеля в Room
const LevelFrame = {
  CITIES: 'cities',
  NEAR_PLACES: 'near-places',
};

// отображение кнопки "Добавить в избранное"
const RoomFrame = {
  PLACE_CARD: 'place-card',
  PROPERTY: 'property',
};

// размеры кнопки "Добавить в избранное"
const AddToFavoriteButtonSize = {
  [RoomFrame.PLACE_CARD]: {
    WIDTH: 18,
    HEIGHT: 19,
  },
  [RoomFrame.PROPERTY]: {
    WIDTH: 31,
    HEIGHT: 33,
  }
};

export { AppRoute, IN_BOOKMARKS, TO_BOOKMARKS, BOOKMARKS, AuthorizationStatus, LevelFrame, RoomFrame, AddToFavoriteButtonSize };
