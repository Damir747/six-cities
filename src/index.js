import React from 'react';
import ReactDom from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middleware/redirect';

import createAPI from './services/api';
import App from './components/app/app';

import rooms from './mock/mock-rooms';
import { Provider } from 'react-redux';
import rootReducer from './store/root-reducer';
import { AuthorizationStatus } from './const';
import { changeAuthorizationStatus } from './store/login-data/actions';
import { loadHotel, loadHotelList, changeFavorite } from './store/hotel-data/actions';
import { loadReviewList } from './store/comment-data/actions';
import { fetchCommentsList, postComment } from './store/comment-data/api-actions';
import { fetchHotel, fetchHotelList, fetchFavorite } from './store/hotel-data/api-actions';
import { fetchFavoriteList } from './store/favorite-data/api-actions';
// ? избавиться от connect: dispatch = useDispatch()
// ? редирект на логин после запроса к серверу, когда он возвращает 401

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
      redirect
    })
});

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

const onLoadFavorites = () => {
  return store.dispatch(fetchFavoriteList());
};

ReactDom.render(
  <Provider store={store}>
    <App
      rooms={rooms}
      onLoadData={() => onLoadData()}
      onLoadHotel={(id) => onLoadHotel(id)}
      onLoadComments={(idHotel) => onLoadComments(idHotel)}
      onPostComment={onPostComment}
      onLoadFavorites={() => onLoadFavorites()}
    />
  </Provider>,
  document.getElementById(`root`),
);
