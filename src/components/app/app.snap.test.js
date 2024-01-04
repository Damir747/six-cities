import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

it(`Should Header render correctly`, () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
