import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import createAPI from './services/api';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middleware/redirect';

import rootReducer from './store/root-reducer';
import App from './components/app/app';

// ? редирект на логин после запроса к серверу, когда он возвращает 401 (в разборе 7.8)
// ? logout сделать?
// ? Не показывать значение (поле) избранного для неавторизованного пользователя

const api = createAPI();

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
