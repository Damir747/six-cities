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
import { checkAuthorizationStatus, fetchHotelList } from './store/api-actions';
import ActionCreator from './store/actions';
import { AuthorizationStatus } from './const';

const api = createAPI(
  () => {
    store.dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
    store.dispatch(ActionCreator.loadHotelList);
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

ReactDom.render(
  <Provider store={store}>
    <App
      rooms={rooms}
      onLoadData={() => onLoadData()}
    />
  </Provider>,
  document.getElementById(`root`),
);
