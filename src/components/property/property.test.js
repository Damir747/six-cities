import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import * as redux from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import Property from './property';
import ReactRouter from 'react-router';

const mockStore = configureStore({});

it(`Should Property render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore(initialMockState);
  store.dispatch = () => Promise.resolve();
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: 1 });
  render(
    <redux.Provider store={store}>
      < Router history={history}>
        <Property />
      </ Router>
    </redux.Provider>
  );
  expect(screen.getByText(/What\'s inside/i)).toBeInTheDocument();
  expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  expect(screen.getByTestId('property')).toBeInTheDocument();
  expect(screen.getByTestId('neighbourhood')).toBeInTheDocument();
});
