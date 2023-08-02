import PropTypes from "prop-types";
import { shape } from 'prop-types';

const cityType = shape({
  id: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  places: PropTypes.number,
});

export default cityType;
