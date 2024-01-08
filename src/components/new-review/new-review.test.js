import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import { initialMockState } from '../../mock/mock-test';
import NewReview from './new-review';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should NewReview render correctly`, () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  render(
    <redux.Provider store={store}>
      <Router history={history}>
        <NewReview idHotel={1} />
      </Router>
    </redux.Provider>
  );

  expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId('stars'), '5');
  userEvent.type(screen.getByTestId('review'), '1234567');

  expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  expect(screen.getByDisplayValue('1234567')).toBeInTheDocument();
});
