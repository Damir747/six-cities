import React from 'react';
import { render } from '@testing-library/react';
import NotFoundScreen from './not-found-screen';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';

it(`Should NotFoundScreen render correctly`, () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <NotFoundScreen />
    </Router>
  );

  expect(container).toMatchSnapshot();
});
