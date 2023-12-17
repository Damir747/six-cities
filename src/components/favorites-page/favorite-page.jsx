/* eslint-disable indent */
import React, { useEffect, useState } from 'react';

import Top from '../top/top';
import Header from '../header/header';
import Footer from '../footer/footer';

import FavoriteCities from '../favorite-cities/favorite-cities';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading/loading';
import { getIsFavoriteListLoaded } from '../../store/favorite-data/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import { fetchFavoriteList } from '../../store/favorite-data/api-actions';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const isFavoriteListLoaded = useSelector((state) => getIsFavoriteListLoaded(state));
  const [fetchingFavorites, setFetchingFavorites] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    dispatch(fetchFavoriteList())
      .then((data) => {
        setFavorites(data);
        setFetchingFavorites(false);
      });
  }, []);
  // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  //   in FavoritePage(created by Connect(FavoritePage))
  //   in Connect(FavoritePage)(created by FavoriteLogin)
  //   in FavoriteLogin(created by Connect(FavoriteLogin))
  //   in Connect(FavoriteLogin)(created by App) favorites: 13024: 25

  if (fetchingFavorites || !isFavoriteListLoaded) {
    return (
      <Loading />
    );
  }

  if (!favorites.length) {
    return (
      <FavoritesEmpty />
    );
  }

  return (
    <React.Fragment>
      <Top />

      <div className="page">
        <Header />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                <FavoriteCities />

              </ul>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default FavoritePage;
