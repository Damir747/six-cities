import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import Header from './header';
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

it(`Should Header render correctly`, () => {
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  render(
    <redux.Provider store={store}>
      < Router history={history}>
        <Header />
      </Router>
    </redux.Provider>
  );
  expect(screen.getByText(/Logout/i)).toBeInTheDocument();
});
