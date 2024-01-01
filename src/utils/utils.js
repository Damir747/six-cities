import { BOOKMARKS, LevelFrame } from '../const';

/**
 * Capitalize first letter in string
 * @param {string} str
 * @return {string}
 */
const capitalizeFirstLetter = (str) => {
  if (!str) {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * Convert rating to 100%-scale
 * @param {number} rating
 * @return {number}
 */
const roundRating = (rating) => {
  if (rating <= 5) {
    return Math.round(rating) * 20;
  }
  return Math.round(rating / 20) * 20;
};

/**
 * Convert rating from 100-scale to 5-scale
 * using in Property
 * @param {number} rating
 * @return {number}
 */
const numberRating = (rating) => Math.round(rating / 20).toFixed(1);

/**
 * Join classnames from array to string
 * @param {Array} arr
 * @return {string}
 */
const classname = (...arr) => arr.join(' ');

/**
 * Join classnames for bookmark-button for Forms (frame)
 * className для кнопки bookmark в зависимости от расположения кнопки (frame) и значения
 * @param {string} frame
 * @param {string} bookmark
 * @return {string}
 */
const bookmarkClassname = (frame, bookmark) => {
  return classname(`${frame}__bookmark-button`, `button`,
    bookmark === BOOKMARKS.IN ? `${frame}__bookmark-button--active` : '');
};

/**
 * Join classnames for room-card for using Forms (frame)
 * className для Room в зависимости от расположения компонента (frame)
 * using in Room
 * @param {string} frame
 * @return {string}
 */
const roomClassname = (frame) => {
  if (frame === LevelFrame.NEAR_PLACES) {
    return classname(`${frame}__card`, 'place-card');
  }
  return classname(`${frame}__place-card`, 'place-card');
};

/**
 * className for image in Room for using Form (frame)
 * className для картинки в Room в зависимости от расположения компонента (frame)
 * using in Room
 * @param {string} frame
 * @return {string}
 */
const roomImageClassname = (frame) => classname(`${frame}__image-wrapper`, 'place-card__image-wrapper');

export { capitalizeFirstLetter, roundRating, numberRating, classname, bookmarkClassname, roomClassname, roomImageClassname };
