import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import Header from './header';
import rootReducer from '../../store/root-reducer';

const mockStore = configureStore({ reducer: rootReducer });

it(`Should Header render correctly`, () => {
  const history = createMemoryHistory();
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  render(
    <redux.Provider store={mockStore({})}>
      < Router history={history}>
        <Header />
      </Router>
    </redux.Provider>
  );
  expect(screen.getByText(/Logout/i)).toBeInTheDocument();
});
