import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import FavoriteCity from './favorite-city';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should FavoriteCity render correctly`, () => {
  const cityName = initialMockState.FAVORITES.favorites[0].city.name;
  render(
    <Provider store={store}>
      < Router history={history}>
        <FavoriteCity
          filteredRooms={initialMockState.FAVORITES.favorites}
          cityName={cityName} />
      </ Router>
    </Provider>
  );
  expect(screen.getByTestId(cityName)).toMatchSnapshot();
});
