import PropTypes from "prop-types";
import { shape } from 'prop-types';

const reviewType = shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.string,
  review: PropTypes.string,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string,
});

export default reviewType;
