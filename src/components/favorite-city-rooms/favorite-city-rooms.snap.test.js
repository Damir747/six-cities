import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import FavoriteCityRooms from './favorite-city-rooms';

const mockStore = configureStore({});
it(`Should FavoriteCityRooms (snapshot) render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore(initialMockState);
  const { container } = render(
    <Provider store={store}>
      <Router history={history}>
        <FavoriteCityRooms favoriteRooms={initialMockState.FAVORITES.favorites} />
      </Router>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
