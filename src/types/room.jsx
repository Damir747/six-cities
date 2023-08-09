import PropTypes, { shape } from 'prop-types';
import imagesType from './images';

export default shape({
  id: PropTypes.number.isRequired,
  level: PropTypes.string,
  img: PropTypes.string,
  priceValue: PropTypes.string,
  priceText: PropTypes.string,
  bookmark: PropTypes.string,
  rating: PropTypes.number,
  card: PropTypes.string,
  type: PropTypes.string,
  images: imagesType
});

