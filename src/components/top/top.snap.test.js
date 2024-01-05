import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import Top from './top';

it(`Should Top render correctly`, () => {
  const history = createMemoryHistory();
  const { container } = render(
    < Router history={history}>
      <Top />
    </ Router>
  );
  expect(container).toMatchSnapshot();
});
