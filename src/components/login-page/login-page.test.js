import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import rootReducer from '../../store/root-reducer';
import LoginPage from './login-page';

const mockStore = configureStore({ reducer: rootReducer });
it(`Should LoginPage render correctly`, () => {
  const history = createMemoryHistory();
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  render(
    <redux.Provider store={mockStore({})}>
      <Router history={history}>
        <LoginPage />
      </Router>
    </redux.Provider>
  );

  expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  expect(screen.getByText('Нажмите, чтобы перейти на главную страницу.')).toBeInTheDocument();
  expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId('email'), 'damir_shakirov@list.ru');
  userEvent.type(screen.getByTestId('password'), '1234567');

  expect(screen.getByDisplayValue('damir_shakirov@list.ru')).toBeInTheDocument();
  expect(screen.getByDisplayValue('1234567')).toBeInTheDocument();
});
