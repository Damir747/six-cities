import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { initialMockState } from '../../mock/mock-test';
import Room from './room';
import { LevelFrame } from '../../const';

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialMockState);
store.dispatch = () => Promise.resolve();

describe(`Should Room render correctly`, () => {
  it(`Should Room (CITIES) render correctly`, () => {
    render(
      <Provider store={store} >
        < Router history={history}>
          <Room
            roomElement={initialMockState.HOTEL.hotel}
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
            frame={LevelFrame.CITIES}
          />
        </ Router>
      </Provider>
    );
    expect(screen.getByText(initialMockState.HOTEL.hotel.card)).toBeInTheDocument();
    expect(screen.getByText(initialMockState.HOTEL.hotel.description)).toBeInTheDocument();
    expect(screen.getByTestId(initialMockState.HOTEL.hotel.id)).toBeInTheDocument();
  });

  it(`Should Room (NEAR_PLACES) render correctly`, () => {
    render(
      <Provider store={store}>
        < Router history={history}>
          <Room
            roomElement={initialMockState.HOTEL.hotel}
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
            frame={LevelFrame.NEAR_PLACES}
          />
        </ Router>
      </Provider>
    );
    expect(screen.getByText(initialMockState.HOTEL.hotel.card)).toBeInTheDocument();
    expect(screen.getByText(initialMockState.HOTEL.hotel.description)).toBeInTheDocument();
    expect(screen.getByTestId(initialMockState.HOTEL.hotel.id)).toBeInTheDocument();
  });
});
