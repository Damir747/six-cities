import PropTypes from "prop-types";
import { shape } from 'prop-types';

const room = shape({
  id: PropTypes.number.isRequired,
  level: PropTypes.string,
  img: PropTypes.string,
  priceValue: PropTypes.string,
  priceText: PropTypes.string,
  bookmark: PropTypes.string,
  rating: PropTypes.number,
  card: PropTypes.string,
  type: PropTypes.string,
});

export { room };
