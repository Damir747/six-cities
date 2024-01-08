import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import CityPlaces from './city-places';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should CityPlaces render correctly`, () => {
  render(
    <Provider store={store}>
      < Router history={history}>
        <CityPlaces />
      </ Router>
    </Provider>
  );
  expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
  expect(screen.getByTestId('city-places')).toBeInTheDocument();
  expect(screen.getByText('Places')).toBeInTheDocument();
});
