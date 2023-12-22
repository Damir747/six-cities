/* eslint-disable indent */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Top from '../top/top';
import Header from '../header/header';
import Footer from '../footer/footer';

import FavoriteCities from '../favorite-cities/favorite-cities';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading/loading';
import { getFavoriteList, getIsFavoriteListLoaded } from '../../store/favorite-data/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import { fetchFavoriteList } from '../../store/favorite-data/api-actions';

const FavoritePage = ({ historyPush }) => {
  const dispatch = useDispatch();
  const isFavoriteListLoaded = useSelector(getIsFavoriteListLoaded);
  const favorites = useSelector(getFavoriteList);

  useEffect(() => {
    if (!isFavoriteListLoaded) {
      dispatch(fetchFavoriteList());
    }
  }, [isFavoriteListLoaded]);

  if (!isFavoriteListLoaded) {
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
        <Header
          historyPush={historyPush}
        />

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

FavoritePage.propTypes = {
  historyPush: PropTypes.func,
};

export default FavoritePage;
