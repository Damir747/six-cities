import PropTypes, { shape } from 'prop-types';

export default shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
});

