import PropTypes from "prop-types";
import { shape } from 'prop-types';

const menuType = shape({
  id: PropTypes.number.isRequired,
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export default menuType;
