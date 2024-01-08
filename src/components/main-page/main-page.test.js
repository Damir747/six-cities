import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import * as redux from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import MainPage from './main-page';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should MainPage render correctly`, () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  render(
    <redux.Provider store={store}>
      < Router history={history}>
        <MainPage />
      </Router>
    </redux.Provider>
  );
  expect(screen.getByText(/Cities/i)).toBeInTheDocument();
});
