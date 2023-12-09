import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import createAPI from './services/api';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middleware/redirect';

import rootReducer from './store/root-reducer';
import { AuthorizationStatus } from './const';
import { changeAuthorizationStatus } from './store/login-data/actions';
import { loadHotel, loadHotelList, changeFavorite } from './store/hotel-data/actions';
import { loadReviewList } from './store/comment-data/actions';

import App from './components/app/app';

// ? избавиться от connect: dispatch = useDispatch()
// ? редирект на логин после запроса к серверу, когда он возвращает 401
// ? logout сделать?

const api = createAPI(
  () => {
    store.dispatch(changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
    store.dispatch(loadHotelList);
    store.dispatch(loadHotel);
    store.dispatch(loadReviewList);
    store.dispatch(changeFavorite);
  }
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      redirect,
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    })
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`),
);
