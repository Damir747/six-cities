import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import * as redux from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
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
          cityName={initialMockState.FAVORITES.favorites[0].city.name} />
      </Router>
    </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
