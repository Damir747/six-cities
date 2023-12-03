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

const FavoritePage = ({ authorizationStatus, loginName, onLoadFavorites }) => {
  const [fetchingFavorites, setFetchingFavorites] = useState(true);
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    onLoadFavorites()
      .then((data) => {
        setFetchingFavorites(false);
        setFavorites(data);
      })
      .catch((err) => console.log(err));
  }, [fetchingFavorites]);

  if (fetchingFavorites) {
    return (
      <>
        <Loading />
      </>
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
  onLoadFavorites: () => { }
};
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  loginName: getLoginName(state),
});

export { FavoritePage };
export default connect(mapStateToProps)(FavoritePage);
