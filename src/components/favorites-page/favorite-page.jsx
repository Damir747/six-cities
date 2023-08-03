import React from "react";
import Top from "../top/top";
import Header from "../header/header";
import FavoriteElements from "../favorite-elements/favorite-elements";
import { AppRoute } from "../../const";
import roomsType from "../../types/rooms";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FavoritesPage = ({ rooms }) => {
  return (
    <React.Fragment>
      <Top />

      <div className="page">
        <Header />

        <FavoriteElements rooms={rooms} />

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
};
export default FavoritesPage;
