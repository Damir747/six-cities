import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Top from '../top/top';
import Header from '../header/header';
import Footer from '../footer/footer';

import FavoriteCities from '../favorite-cities/favorite-cities';
import loginType from '../../types/login';
import { getAuthorizationStatus, getLoginName } from '../../store/login-data/selectors';
import { connect } from 'react-redux';
import Loading from '../loading/loading';
import { getIsFavoriteListLoaded } from '../../store/favorite-data/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const FavoritePage = ({ authorizationStatus, loginName, onLoadFavorites, isFavoriteListLoaded }) => {
  const [fetchingFavorites, setFetchingFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    onLoadFavorites()
      .then((data) => {
        setFavorites(data);
        setFetchingFavorites(false);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, []);

  if (!favorites.length) {
    return (
      <FavoritesEmpty />
    );
  }
  if (fetchingFavorites || !isFavoriteListLoaded) {
    return (
      <Loading />
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

FavoritePage.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  loginName: loginType,
  onLoadFavorites: () => { },
  isFavoriteListLoaded: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  loginName: getLoginName(state),
  isFavoriteListLoaded: getIsFavoriteListLoaded(state),
});

export { FavoritePage };
export default connect(mapStateToProps)(FavoritePage);
