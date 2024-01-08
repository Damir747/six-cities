import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import OldReview from './old-review';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should OldReview render correctly`, () => {
  render(
    <Provider store={store}>
      < Router history={history}>
        <OldReview review={{
          id: 1,
          author: 'Vasya',
          img: '',
          reviewText: 'nothing to write',
          rating: '',
          date: ''
        }} />
      </ Router>
    </Provider>
  );
  expect(screen.getByText(/Vasya/i)).toBeInTheDocument();
  expect(screen.getByTestId('review-text')).toBeInTheDocument();
});
