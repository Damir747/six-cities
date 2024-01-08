import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import Reviews from './reviews';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should Reviews render correctly`, () => {
  render(
    <Provider store={store}>
      < Router history={history}>
        <Reviews idHotel={1} />
      </ Router>
    </Provider>
  );
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  expect(screen.getByTestId('reviews-list')).toBeInTheDocument();
});
