import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import NotFoundScreen from './not-found-screen';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should NotFoundScreen render correctly`, () => {

  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
  }));

  render(
    <Provider store={store}>
      <Router history={history}>
        <NotFoundScreen />
      </Router>
    </Provider>
  );

  expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  expect(screen.getByText('Нажмите, чтобы перейти на главную страницу.')).toBeInTheDocument();
});
