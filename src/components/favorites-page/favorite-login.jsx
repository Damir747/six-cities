import React from 'react';

import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import FavoritePage from './favorite-page';
import LoginPage from '../login-page/login-page';
import { useSelector } from 'react-redux';

const FavoriteLogin = () => {
  const authorizationStatus = useSelector((state) => getAuthorizationStatus(state));
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <FavoritePage />
    );
  }
  return (
    <LoginPage />
  );
};

export default FavoriteLogin;
