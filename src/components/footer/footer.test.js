import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import Footer from './footer';

it(`Should Footer render correctly`, () => {
  const history = createMemoryHistory();
  const { getByTestId, getByAltText } = render(
    < Router history={history}>
      <Footer />
    </ Router>
  );
  const footerLogo = getByTestId('footer__logo');
  const footerLogoAlt = getByAltText('6 cities logo');
  expect(footerLogo).toMatchSnapshot();
  expect(footerLogoAlt).toMatchSnapshot();
});
