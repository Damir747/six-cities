import PropTypes, { shape } from 'prop-types';

export default PropTypes.arrayOf(
  shape({
    id: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
);

