import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import Top from './top';

it(`Should Top render correctly`, () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    < Router history={history}>
      <Top />
    </ Router>
  );
  const idIconArrowSelect = getByTestId('icon-arrow-select');
  const idIconBookmark = getByTestId('icon-bookmark');
  const idIconStar = getByTestId('icon-star');
  expect(idIconArrowSelect).toMatchSnapshot();
  expect(idIconBookmark).toMatchSnapshot();
  expect(idIconStar).toMatchSnapshot();
});
