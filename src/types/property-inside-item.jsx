import PropTypes from "prop-types";
import { shape } from 'prop-types';

const propertyInsideItemType = shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});

export default propertyInsideItemType;
