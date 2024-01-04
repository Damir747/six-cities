import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

it(`Should Header render correctly`, () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
