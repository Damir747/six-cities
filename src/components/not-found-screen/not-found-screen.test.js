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
it(`Should NotFoundScreen render correctly`, () => {
  const history = createMemoryHistory();
  jest.spyOn(redux, 'useDispatch');
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
