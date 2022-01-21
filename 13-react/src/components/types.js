import PropTypes from 'prop-types';

const types = {
  title: PropTypes.string,
  content: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  createdAt: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default types;
