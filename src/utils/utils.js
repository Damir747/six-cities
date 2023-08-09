import { IN_BOOKMARKS } from '../const';

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

const bookmarkClassname = (frame, bookmark) => {
  return classname(`${frame}__bookmark-button`, `button`,
    bookmark === IN_BOOKMARKS ? `${frame}__bookmark-button--active` : '');
};

export { capitalizeFirstLetter, roundRating, numberRating, classname, bookmarkClassname };
