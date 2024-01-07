import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import * as redux from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import NotFoundScreen from './not-found-screen';

it(`Should NotFoundScreen render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();
  const store = mockStore(initialMockState);
  store.dispatch = () => Promise.resolve();

  const { container } = render(
    <redux.Provider store={store}>
      < Router history={history}>
        <NotFoundScreen />
      </ Router>
    </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
