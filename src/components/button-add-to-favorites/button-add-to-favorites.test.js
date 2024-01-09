import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus, BOOKMARKS, RoomFrame } from '../../const';
import { initialMockState } from '../../mock/mock-test';
import ButtonAddToFavorites from './button-add-to-favorites';

const mockStore = configureStore({});

describe(`Should ButtonAddToFavorites render correctly`, () => {
  it(`Should ButtonAddToFavorites for RoomFrame.PROPERTY render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore(initialMockState);
    store.dispatch = () => Promise.resolve();
    render(
      <Provider store={store}>
        < Router history={history}>
          <ButtonAddToFavorites
            id={1}
            bookmark={BOOKMARKS.TO}
            frame={RoomFrame.PROPERTY}
          />
        </ Router>
      </Provider >
    );
    expect(screen.getByTestId('bookmark')).toBeInTheDocument();
  });
  it(`Should ButtonAddToFavorites for RoomFrame.PLACE_CARD render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore(initialMockState);
    store.dispatch = () => Promise.resolve();
    render(
      <Provider store={store}>
        < Router history={history}>
          <ButtonAddToFavorites
            id={1}
            bookmark={BOOKMARKS.IN}
            frame={RoomFrame.PLACE_CARD}
          />
        </ Router>
      </Provider >
    );
    expect(screen.getByTestId('bookmark')).toBeInTheDocument();
  });
});
