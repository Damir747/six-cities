import React from "react";
import PropTypes from "prop-types";

import { AppRoute } from "../../const";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Top from "../top/top";
import Header from "../header/header";

import FavoriteCities from "../favorite-cities/favorite-cities";
import roomsType from '../../types/rooms';
import loginType from '../../types/login';
import { connect } from "react-redux";
import { getCities, getFavoriteRooms, getRooms } from "../../store/selectors";

const FavoritesPage = ({ cities, loginName, favoriteRooms }) => {

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

        <footer className="footer container">
          <Link className="footer__logo-link" href={AppRoute.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    </React.Fragment>
  );
};

FavoritesPage.propTypes = {
  cities: PropTypes.object,
  loginName: loginType,
  favoriteRooms: roomsType,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  favoriteRooms: getFavoriteRooms(state),
});

export { FavoritesPage };
export default connect(mapStateToProps)(FavoritesPage);
