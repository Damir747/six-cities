import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import * as redux from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import Property from './property';
import ReactRouter from 'react-router';
import { AppRoute } from '../../const';

const mockStore = configureStore({});

it(`Should Property render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore(initialMockState);
  store.dispatch = () => Promise.resolve();
  // history.push(AppRoute.OFFER + '1');
  // console.log(history.location.pathname);
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: 1 });
  // jest.mock('react-router-dom', () => {
  //   return {
  //     __esModule: true,
  //     ...jest.requireActual('react-router-dom'),
  //     useParams: () => ({ id: 1, anotherField: 'bla-bla-bla' })
  //   };
  // });

  render(
    <redux.Provider store={store}>
      < Router history={history}>
        <Property />
      </ Router>
    </redux.Provider>
  );
  expect(screen.getByText(/What\'s inside/i)).toBeInTheDocument();
  expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  expect(screen.getByTestId('property')).toBeInTheDocument();
  expect(screen.getByTestId('neighbourhood')).toBeInTheDocument();
});
