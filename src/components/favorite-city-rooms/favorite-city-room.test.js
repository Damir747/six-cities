import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import FavoriteCityRoom from './favorite-city-room';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';

it(`Should FavoriteCity render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();
  const store = mockStore(initialMockState);
  render(
    <Provider store={store}>
      < Router history={history}>
        <FavoriteCityRoom room={initialMockState.HOTEL.rooms[0]} />
      </ Router>
    </Provider>
  );
  expect(screen.getByAltText(/Place image/i)).toMatchSnapshot();
  expect(screen.getByTestId('favorite-city-room-id-1')).toMatchSnapshot();
});
