import PropTypes, { shape } from 'prop-types';

export default shape({
  id: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  places: PropTypes.number,
}).isRequired;


