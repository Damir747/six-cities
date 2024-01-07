import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';

import { initialMockState } from '../../mock/mock-test';
import FavoritesEmpty from './favorites-empty';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should FavoritesEmpty render correctly`, () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  render(
    <redux.Provider store={store}>
      < Router history={history}>
        <FavoritesEmpty />
      </Router>
    </redux.Provider>
  );
  expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
});
