import React from 'react';
import PropTypes from 'prop-types';

import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { connect } from 'react-redux';
import FavoritePage from './favorite-page';
import LoginPage from '../login-page/login-page';

const FavoriteLogin = ({ authorizationStatus }) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <FavoritePage />
    );
  }
  return (
    <LoginPage />
  );
};

FavoriteLogin.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export { FavoriteLogin };
export default connect(mapStateToProps)(FavoriteLogin);
