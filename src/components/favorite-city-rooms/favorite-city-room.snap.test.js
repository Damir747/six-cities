import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import FavoriteCityRoom from './favorite-city-room';
import { initialMockState } from '../../mock/mock-test';

const mockStore = configureStore({});
it(`Should FavoriteCityRoom (snapshot) render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore(initialMockState);
  const { container } = render(
    <Provider store={store}>
      <Router history={history}>
        <FavoriteCityRoom room={initialMockState.HOTEL.rooms[0]} />
      </Router>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
