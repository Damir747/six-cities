import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import Footer from './footer';

it(`Should NotFoundScreen render correctly`, () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <Footer />
    </Router>
  );

  expect(container).toMatchSnapshot();
});
