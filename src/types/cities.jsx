import PropTypes, { shape } from 'prop-types';

export default PropTypes.arrayOf(
  shape({
    id: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired,
    places: PropTypes.number,
  }).isRequired
);


