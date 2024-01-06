import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';
import { AuthorizationStatus } from '../../const';
import cities from '../../mock/mock-cities';
import propertyInside from '../../mock/mock-property-inside';

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

it(`Should LoginPage render correctly`, () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  render(
    <redux.Provider store={store}>
      <Router history={history}>
        <LoginPage />
      </Router>
    </redux.Provider>
  );

  expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId('email'), 'damir_shakirov@list.ru');
  userEvent.type(screen.getByTestId('password'), '1234567');

  expect(screen.getByDisplayValue('damir_shakirov@list.ru')).toBeInTheDocument();
  expect(screen.getByDisplayValue('1234567')).toBeInTheDocument();
});
