import PropTypes, { shape } from 'prop-types';

export default shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.string,
  review: PropTypes.string,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string,
}).isRequired;
