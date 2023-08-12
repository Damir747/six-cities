import PropTypes, { shape } from 'prop-types';

export default PropTypes.arrayOf(
  shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
);

