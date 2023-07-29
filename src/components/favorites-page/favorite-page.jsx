import React from "react";
import Top from "../top/top";
import Header from "../header/header";
import FavoriteElements from "../favorite-elements/favorite-elements";
import { AppRoute } from "../../const";
import { rooms } from "../mock-data";

const FavoritesPage = () => {
  return (
    <React.Fragment>
      <Top />

      <div className="page">
        <Header />

        <FavoriteElements rooms={rooms} />

        <footer className="footer container">
          <a className="footer__logo-link" href={AppRoute.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default FavoritesPage;
