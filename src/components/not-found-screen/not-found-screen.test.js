import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFoundScreen from './not-found-screen';
import * as redux from 'react-redux';
import rootReducer from '../../store/root-reducer';
import configureStore from 'redux-mock-store';

const reducer = rootReducer;
const mockStore = configureStore({ reducer });
const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return { store, next, invoke };
};

it(`Should NotFoundScreen render correctly`, () => {
  const history = createMemoryHistory();

  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
  }));

  render(
    <redux.Provider store={mockStore({})}>
      <Router history={history}>
        <NotFoundScreen />
      </Router>
    </redux.Provider>
  );

  expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  expect(screen.getByText('Нажмите, чтобы перейти на главную страницу.')).toBeInTheDocument();
});
