import PropTypes, { shape } from 'prop-types';

export default PropTypes.arrayOf(
  shape({
    id: PropTypes.number.isRequired,
    level: PropTypes.string,
    img: PropTypes.string,
    priceValue: PropTypes.string,
    priceText: PropTypes.string,
    bookmark: PropTypes.string,
    rating: PropTypes.number,
    card: PropTypes.string,
    type: PropTypes.string,
  }).isRequired
);
