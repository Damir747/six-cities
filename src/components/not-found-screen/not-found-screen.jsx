import React from 'react';
import PropTypes from 'prop-types';
import Top from '../top/top';
import Header from '../header/header';
import Footer from '../footer/footer';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

const NotFoundScreen = ({ historyPush }) => {
  return (
    <React.Fragment>
      <Top />

      <div className="page">
        <Header
          historyPush={historyPush}
        />

        <h1>404 Not Found</h1>
        <Link to={AppRoute.ROOT} >
          Нажмите, чтобы перейти на главную страницу.
        </Link>

        <Footer />
      </div>
    </React.Fragment>
  );
};

NotFoundScreen.propTypes = {
  historyPush: PropTypes.func,
};

export default NotFoundScreen;
