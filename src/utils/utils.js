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

// className для кнопки bookmark в зависимости от расположения кнопки (frame)
const bookmarkClassname = (frame, bookmark) => {
  return classname(`${frame}__bookmark-button`, `button`,
    bookmark === BOOKMARKS.IN ? `${frame}__bookmark-button--active` : '');
};

// ? сделать названия более наглядные
// для Room в зависимости от расположения формы
const frameClassname = (frame) => {
  if (frame === LevelFrame.NEAR_PLACES) {
    return classname(`${frame}__card`, 'place-card');
  }
  return classname(`${frame}__place-card`, 'place-card');
};

export { capitalizeFirstLetter, roundRating, numberRating, classname, bookmarkClassname, frameClassname };
