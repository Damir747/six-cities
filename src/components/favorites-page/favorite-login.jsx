import React from 'react';

import { AuthorizationStatus } from '../../const';
import { useSelector } from 'react-redux';
import FavoritePage from './favorite-page';
import LoginPage from '../login-page/login-page';
import { NameSpace } from '../../store/root-reducer';

const FavoriteLogin = () => {
  const { authorizationStatus } = useSelector((state) => state[NameSpace.LOGIN]);
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
