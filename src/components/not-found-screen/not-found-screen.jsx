import React from "react";
import Top from "../top/top";
import Header from "../header/header";
import AppRoute from "../../const";
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <React.Fragment>
      <Top />

      <div className="page">
        <Header />

        <h1>404 Not Found</h1>
        <Link to={AppRoute.ROOT} >
          Нажмите, что перейти на главную страницу.
        </Link>

        <footer className="footer container">
          <a className="footer__logo-link" href={AppRoute.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default NotFoundScreen;
