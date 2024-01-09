import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { NameSpace } from '../../store/root-reducer';
import { initialMockState } from '../../mock/mock-test';

const mockStore = configureStore({});
let history;

describe(`Should PrivateRoute render correctly`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);
  });
  it(`Should be render component for public/non-private route for NO_AUTH`, () => {
    const store = mockStore({
      [NameSpace.LOGIN]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH
      }
    });
    store.dispatch = () => Promise.resolve();
    render(
      <Provider store={store}>
        < Router history={history}>
          <Route exact path={AppRoute.LOGIN}>
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute exact
            path={AppRoute.FAVORITES}
            render={() => (
              <h1>Private Route</h1>
            )}
          />
        </ Router>
      </Provider >
    );
    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`Should be render component for private route for AUTH`, () => {
    const store = mockStore(Object.assign({}, initialMockState, {
      [NameSpace.LOGIN]: {
        authorizationStatus: AuthorizationStatus.AUTH
      }
    }));
    store.dispatch = () => Promise.resolve();
    render(
      <Provider store={store}>
        < Router history={history}>
          <Route exact path={AppRoute.LOGIN}>
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute exact
            path={AppRoute.FAVORITES}
            render={() => (
              <h1>Private Route</h1>
            )}
          />
        </ Router>
      </Provider >
    );
    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
