import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import CityList from './city-list';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should CityList render correctly`, () => {
  const cityName = initialMockState.FAVORITES.favorites[0].city.name;
  render(
    <Provider store={store}>
      < Router history={history}>
        <CityList />
      </ Router>
    </Provider>
  );
  expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
  expect(screen.getByText(cityName)).toBeInTheDocument();
});
