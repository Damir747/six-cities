import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import createAPI from './services/api';

import App from './components/app/app';
import { legacy_createStore as createStore } from 'redux';

import rooms from './mock/mock-rooms';
import { Provider } from 'react-redux';
import rootReducer from './store/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchCommentsList, fetchHotel, fetchHotelList, postComment } from './store/api-actions';
import { changeAuthorizationStatus, loadHotel, loadHotelList, loadReviewList } from './store/actions';
import { AuthorizationStatus } from './const';
import { redirect } from './store/middleware/redirect';

const api = createAPI(
  () => {
    store.dispatch(changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
    store.dispatch(loadHotelList);
    store.dispatch(loadHotel);
    store.dispatch(loadReviewList);
  }
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
  )
);

const onLoadData = () => {
  // store.dispatch(checkAuthorizationStatus());
  store.dispatch(fetchHotelList());
};

const onLoadHotel = (id) => {
  return store.dispatch(fetchHotel(id));
};

const onLoadComments = (idHotel) => {
  return store.dispatch(fetchCommentsList(idHotel));
};

const onPostComment = (idHotel, commentText, commentStars) => {
  return store.dispatch(postComment(idHotel, {
    'comment': commentText,
    'rating': commentStars,
  }));
};

ReactDom.render(
  <Provider store={store}>
    <App
      rooms={rooms}
      onLoadData={() => onLoadData()}
      onLoadHotel={(id) => onLoadHotel(id)}
      onLoadComments={(idHotel) => onLoadComments(idHotel)}
      onPostComment={onPostComment}
    />
  </Provider>,
  document.getElementById(`root`),
);
