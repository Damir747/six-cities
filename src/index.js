import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import createAPI from './services/api';

import App from './components/app/app';
import { legacy_createStore as createStore } from 'redux';

import rooms from './mock/mock-rooms';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { checkAuthorizationStatus, fetchHotel, fetchHotelList } from './store/api-actions';
import ActionCreator from './store/actions';
import { AuthorizationStatus } from './const';

const api = createAPI(
  () => {
    store.dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
    store.dispatch(ActionCreator.loadHotelList);
    store.dispatch(ActionCreator.loadHotel);
  }
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

const onLoadData = () => {
  // store.dispatch(checkAuthorizationStatus());
  store.dispatch(fetchHotelList());
};

const onLoadHotel = (id) => {
  store.dispatch(fetchHotel(id));
};

ReactDom.render(
  <Provider store={store}>
    <App
      rooms={rooms}
      onLoadData={() => onLoadData()}
      onLoadHotel={(id) => onLoadHotel(id)}
    />
  </Provider>,
  document.getElementById(`root`),
);
