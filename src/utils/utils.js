import { BOOKMARKS, LevelFrame } from '../const';

const capitalizeFirstLetter = (str) => {
  if (!str) {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1);
};

const roundRating = (rating) => {
  if (rating <= 5) {
    return Math.round(rating) * 20;
  }
  return Math.round(rating / 20) * 20;
};

const numberRating = (rating) => Math.round(rating / 20).toFixed(1);

const classname = (...arr) => arr.join(' ');

// className для кнопки bookmark в зависимости от расположения кнопки (frame) и значения
const bookmarkClassname = (frame, bookmark) => {
  return classname(`${frame}__bookmark-button`, `button`,
    bookmark === BOOKMARKS.IN ? `${frame}__bookmark-button--active` : '');
};

// className для Room в зависимости от расположения компонента (frame)
const roomClassname = (frame) => {
  if (frame === LevelFrame.NEAR_PLACES) {
    return classname(`${frame}__card`, 'place-card');
  }
  return classname(`${frame}__place-card`, 'place-card');
};

// className для картинки в Room в зависимости от расположения компонента (frame)
const roomImageClassname = (frame) => classname(`${frame}__image-wrapper`, 'place-card__image-wrapper');

export { capitalizeFirstLetter, roundRating, numberRating, classname, bookmarkClassname, roomClassname, roomImageClassname };
