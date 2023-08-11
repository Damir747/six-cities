import React from "react";

import { AppRoute } from "../../const";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Top from "../top/top";
import Header from "../header/header";

import FavoriteCities from "../favorite-cities/favorite-cities";
import roomsType from '../../types/rooms';
import citiesType from '../../types/cities';
import loginType from '../../types/login';
import { connect } from "react-redux";
import { getCities, getRooms } from "../../store/selectors";

const FavoritesPage = ({ rooms, cities, loginName }) => {
  const filteredRooms = rooms.filter((item) => item.bookmark === 'In bookmarks');
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

                <FavoriteCities
                  cities={cities.slice().sort((a, b) => b.cityName < a.cityName)}
                  rooms={filteredRooms} />

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
  rooms: roomsType,
  cities: citiesType,
  loginName: loginType,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  rooms: getRooms(state),
});

export { FavoritesPage };
export default connect(mapStateToProps)(FavoritesPage);
