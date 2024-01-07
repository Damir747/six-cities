import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from './app';
import { AppRoute } from '../../const';
import { initialMockState } from '../../mock/mock-test';

const mockStore = configureStore({});

describe(`Test routing`, () => {
  const history = createMemoryHistory();
  const store = mockStore(initialMockState);
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
