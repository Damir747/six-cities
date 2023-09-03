import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import createAPI from './services/api';

import App from './components/app/app';
import { legacy_createStore as createStore } from 'redux';

import rooms from './mock/mock-rooms';
import loginName from './mock/mock-login';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchHotelList } from './store/api-actions';
import ActionCreator from './store/actions';

const api = createAPI(
  () => store.dispatch(ActionCreator.loadHotelList)
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

store.dispatch(fetchHotelList());

ReactDom.render(
  <Provider store={store}>
    <App
      rooms={rooms}
      loginName={loginName}
    />
  </Provider>,
  document.getElementById(`root`),
);
