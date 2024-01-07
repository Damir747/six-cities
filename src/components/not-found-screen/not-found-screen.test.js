import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFoundScreen from './not-found-screen';
import rootReducer from '../../store/root-reducer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore({ reducer: rootReducer });

it(`Should NotFoundScreen render correctly`, () => {
  const history = createMemoryHistory();

  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
  }));

  render(
    <Provider store={mockStore({})}>
      <Router history={history}>
        <NotFoundScreen />
      </Router>
    </Provider>
  );

  expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  expect(screen.getByText('Нажмите, чтобы перейти на главную страницу.')).toBeInTheDocument();
});
