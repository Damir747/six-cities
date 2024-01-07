import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';
import { initialMockState } from '../../mock/mock-test';
import * as redux from 'react-redux';
import FavoriteCity from './favorite-city';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should FavoriteCity (snapshot) render correctly`, () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  const { container } = render(
    <redux.Provider store={store}>
      <Router history={history}>
        <FavoriteCity
          filteredRooms={initialMockState.FAVORITES.favorites}
          city={initialMockState.FAVORITES.favorites[0].city} />
      </Router>
    </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
