import React from 'react';
import PropTypes from 'prop-types';

import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { connect } from 'react-redux';
import FavoritePage from './favorite-page';
import LoginPage from '../login-page/login-page';

const FavoriteLogin = ({ authorizationStatus, onLoadFavorites, onChangeFavorite }) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <>
        <FavoritePage
          onLoadFavorites={() => onLoadFavorites()}
          onChangeFavorite={onChangeFavorite}
        />
      </>
    );
  }
  return (
    <>
      <LoginPage />
    </>
  );
};

FavoriteLogin.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLoadFavorites: () => { },
  onChangeFavorite: PropTypes.func,
};
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export { FavoriteLogin };
export default connect(mapStateToProps)(FavoriteLogin);
