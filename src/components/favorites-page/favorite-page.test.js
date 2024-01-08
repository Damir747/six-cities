import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import FavoritePage from './favorite-page';
import { AuthorizationStatus } from '../../const';
import { NameSpace } from '../../store/root-reducer';
import { initialMockState } from '../../mock/mock-test';

const mockStore = configureStore({});

describe(`Should FavoriteLogin render in (un-Private-mode) correctly`, () => {
  it(`Should FavoriteLogin (AUTH) non-empty favorite list render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore(Object.assign({}, initialMockState, {
      [NameSpace.LOGIN]: {
        authorizationStatus: AuthorizationStatus.AUTH
      }
    }));
    store.dispatch = () => Promise.resolve();
    render(
      <Provider store={store}>
        < Router history={history}>
          <FavoritePage />
        </ Router>
      </Provider >
    );
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });
  it(`Should FavoriteLogin (AUTH) empty favorite list render correctly`, () => {
    const history = createMemoryHistory();
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
          <FavoritePage />
        </ Router>
      </Provider >
    );
    expect(screen.getByText(/Favorites \(empty\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });
});
