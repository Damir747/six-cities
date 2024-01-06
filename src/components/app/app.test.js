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
    rooms: [{
      bookmark: "To bookmarks",
      card: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
      city: { name: "Brussels", location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 } },
      cityName: "Brussels",
      coordinates: { lat: 50.827557, lng: 4.336697, zoom: 16 },
      description: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.",
      features: [],
      goods: ["Laptop friendly workspace", "Breakfast"],
      host: { title: "Meet the host", user: {} },
      id: 1,
      images: [],
      img: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg",
      level: "",
      priceText: "night",
      priceValue: "939",
      rating: 76,
      title: "Loft Studio in the Central Area",
      type: "house",
    }],
    neighbourhood: [{
      city: {},
      images: [],
      title: '',
      rating: '',
      type: '',
      goods: [],
      host: {},
      description: '',
      id: 2,
      level: '',
      img: '',
      priceValue: '',
      priceText: '',
      bookmark: 'To bookmarks',
      card: '',
    }],
    isHotelListLoading: false,
    isHotelListLoaded: false,
    reviews: [],
    isHotelLoading: false,
    isHotelLoaded: false,
    isCommentLoading: false,
    isCommentLoaded: false,
    isNeighbourhoodLoading: false,
    isNeighbourhoodLoaded: false,
  },
  CITY: {
    activeCity: 'Brussels',
    cities,
    currentCity: 'Brussels',
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

describe(`Test routing`, () => {
  const history = createMemoryHistory();
  const store = mockStore(initialState);
  store.dispatch = () => Promise.resolve();
  jest.spyOn(redux, 'useSelector');
  jest.spyOn(redux, 'useDispatch');
  it(`Render App when user navigates to '/' url`, async () => {
    history.push(AppRoute.ROOT);
    render(
      <redux.Provider store={store}>
        < Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );
    await waitFor(() => expect(screen.getByText(/places to stay/i)).toBeInTheDocument());
  });
  it(`Render App when user navigates to '/login' url`, async () => {
    history.push(AppRoute.LOGIN);
    render(
      <redux.Provider store={store}>
        < Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent(/Sign in/i);
      expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    });
  });

  it(`Render Offer when user navigates to '/offer/1' url`, async () => {
    history.push(AppRoute.OFFER + '1');
    render(
      <redux.Provider store={store}>
        < Router history={history}>
          <App />
        </Router>
      </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Peaceful studio in the most wanted area in town/i)[0]).toBeInTheDocument();
    });
  });

});
