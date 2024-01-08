import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import * as redux from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import { menuUpArray } from '../../mock/mock-menu';
import MenuUp from './menu-up';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should MenuUp render correctly`, () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  render(
    <redux.Provider store={store}>
      < Router history={history}>
        <MenuUp />
      </Router>
    </redux.Provider>
  );
  expect(screen.getAllByText(menuUpArray[0].title)[0]).toBeInTheDocument();
  expect(screen.getByText(menuUpArray[1].title)).toBeInTheDocument();
  expect(screen.getByText(menuUpArray[2].title)).toBeInTheDocument();
  expect(screen.getByText(menuUpArray[3].title)).toBeInTheDocument();
});
