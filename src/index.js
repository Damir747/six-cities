import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middleware/redirect';

import createAPI from './services/api';
import App from './components/app/app';

import rooms from './mock/mock-rooms';
import { Provider } from 'react-redux';
import rootReducer from './store/root-reducer';
import { AuthorizationStatus } from './const';
import { changeAuthorizationStatus } from './store/login-data/actions';
import { loadHotel, loadHotelList } from './store/hotel-data/actions';
import { loadReviewList } from './store/comment-data/actions';
import { checkAuthorizationStatus } from './store/login-data/api-actions';
import { fetchCommentsList, postComment } from './store/comment-data/api-actions';
import { fetchHotel, fetchHotelList } from './store/hotel-data/api-actions';
import { fetchFavorites } from './store/favorite-data/api-actions';
import { getReverseFavorite } from './store/favorite-data/selectors';

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
// ? configureStore (вместо createStore) вызывает ошибку

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: api,
//       },
//       redirect
//     })
// });

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

const onChangeFavorite = (idHotel) => {
  return store.dispatch(fetchFavorites(idHotel));
};

ReactDom.render(
  <Provider store={store}>
    <App
      rooms={rooms}
      onLoadData={() => onLoadData()}
      onLoadHotel={(id) => onLoadHotel(id)}
      onLoadComments={(idHotel) => onLoadComments(idHotel)}
      onPostComment={onPostComment}
      onChangeFavorite={(idHotel) => onChangeFavorite(idHotel)}
    />
  </Provider>,
  document.getElementById(`root`),
);
