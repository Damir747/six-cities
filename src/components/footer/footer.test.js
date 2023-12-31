import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Footer from './footer';

it(`Should Footer render correctly`, () => {
  const history = createMemoryHistory();
  render(
    < Router history={history}>
      <Footer />
    </ Router>
  );
  expect(screen.getByTestId('footer__logo')).toMatchSnapshot();
  expect(screen.getByAltText('6 cities logo')).toMatchSnapshot();
});
