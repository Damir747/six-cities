import PropTypes from "prop-types";
import { shape } from 'prop-types';

const menu = shape({
  id: PropTypes.number.isRequired,
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export { menu };
