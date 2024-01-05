import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import Loading from './loading';

it(`Should Loading render correctly`, () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    < Router history={history}>
      <Loading />
    </ Router>
  );
  const header = getByText(/Loading/i);
  expect(header).toMatchSnapshot();
});
