import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import FavoritePage from './favorite-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../login-page/login-page';
import { NameSpace } from '../../store/root-reducer';
import { initialMockState } from '../../mock/mock-test';

const mockStore = configureStore({});
let history;

describe(`Should FavoriteLogin render correctly`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);
  });
  it(`Should FavoriteLogin (NO_AUTH) render correctly`, () => {
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
            <LoginPage />
          </Route>
          <PrivateRoute exact
            path={AppRoute.FAVORITES}
            render={() => (
              <FavoritePage />
            )}
          />
        </ Router>
      </Provider >
    );
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Should FavoriteLogin (AUTH) non-empty favorite list render correctly`, () => {
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
            <LoginPage></LoginPage>
          </Route>
          <PrivateRoute exact
            path={AppRoute.FAVORITES}
            render={() => (
              <FavoritePage />
            )}
          />
        </ Router>
      </Provider >
    );
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });
  it(`Should FavoriteLogin (AUTH) empty favorite list render correctly`, () => {
    const store = mockStore(Object.assign({}, initialMockState, {
      [NameSpace.LOGIN]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      [NameSpace.FAVORITES]: {
        favorites: [],
      }
    }));
    store.dispatch = () => Promise.resolve();
    render(
      <Provider store={store}>
        < Router history={history}>
          <Route exact path={AppRoute.LOGIN}>
            <LoginPage></LoginPage>
          </Route>
          <PrivateRoute exact
            path={AppRoute.FAVORITES}
            render={() => (
              <FavoritePage />
            )}
          />
        </ Router>
      </Provider >
    );
    expect(screen.getByText(/Favorites \(empty\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });
});
