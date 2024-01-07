import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import FavoriteCity from './favorite-city';

it(`Should FavoriteCity (snapshot) render correctly`, () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <FavoriteCity />
    </Router>
  );

  expect(container).toMatchSnapshot();
});
