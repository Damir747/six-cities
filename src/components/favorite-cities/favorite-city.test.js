import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import FavoriteCity from './favorite-city';

it(`Should FavoriteCity render correctly`, () => {
  const history = createMemoryHistory();
  render(
    < Router history={history}>
      <FavoriteCity />
    </ Router>
  );
  expect(screen.getByTestId('footer__logo')).toMatchSnapshot();
  expect(screen.getByAltText('6 cities logo')).toMatchSnapshot();
});
