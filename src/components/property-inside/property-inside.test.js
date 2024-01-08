import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import PropertyInside from './property-inside';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

it(`Should PropertyInside render correctly`, () => {
  render(
    <Provider store={store}>
      < Router history={history}>
        <PropertyInside />
      </Router>
    </Provider>
  );
  initialMockState.INIT.propertyInside.forEach((el) => expect(screen.getByText(el.title)).toBeInTheDocument());
});
