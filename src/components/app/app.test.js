import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from './app';
import cities from '../../mock/mock-cities';
import propertyInside from '../../mock/mock-property-inside';
import { AppRoute, AuthorizationStatus } from '../../const';
const initialState = {
  HOTEL: {
    hotel: null,
    rooms: [],
    isHotelListLoading: false,
    isHotelListLoaded: false,
    reviews: [],
    isHotelLoading: true,
    isHotelLoaded: false,
    isCommentLoading: true,
    isCommentLoaded: false,
    isNeighbourhoodLoading: true,
    isNeighbourhoodLoaded: false,
  },
  CITY: {
    activeCity: 'Paris',
    cities,
    currentCity: '',
    isCityListLoaded: false,
    isCityListLoading: false,
  },
  FAVORITES: {
    favorites: [],
    isFavoriteListLoading: false,
    isFavoriteListLoaded: false,
  },
  COMMENT: {
    comment: '',
  },
  INIT: {
    propertyInside,
  },
  LOGIN: {
    loginName: '',
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
  NOTIFICATION: {
    notifications: [],
  },
  SORT: {
    sort: 0,
  }
};

const mockStore = configureStore({});
const history = createMemoryHistory();
const store = mockStore(initialState);
store.dispatch = () => Promise.resolve();

describe(`Test routing`, () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  it(`Render App when user navigates to '/' url`, async () => {
    render(
      <redux.Provider store={store}>
        < Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );
    await waitFor(() => expect(screen.getByText(/places to stay/i)).toBeInTheDocument());
  });
  it(`Render App when user navigates to '/login' url`, () => {
    history.push(AppRoute.LOGIN);
    render(
      <redux.Provider store={store}>
        < Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );
    expect(screen.getByRole('button')).toHaveTextContent(/Sign in/i);
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

});
