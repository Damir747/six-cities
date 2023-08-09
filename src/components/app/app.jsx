import React, { useCallback, useState } from 'react';
import PropTypes from "prop-types";

import MainPage from '../main-page/main-page';
import menuUpArray from '../../mock/mock-menu';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorite-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute } from '../../const';
import Property from '../property/property';
import roomsType from '../../types/rooms';

const App = ({ rooms }) => {
  const [idActiveRoom, setActiveRoom] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveRoom(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveRoom(null);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <MainPage
              menuUpArray={menuUpArray}
              rooms={rooms}
              idActiveRoom={idActiveRoom}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <LoginPage />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <FavoritesPage rooms={rooms} />
          </Route>
          <Route exact path={AppRoute.OFFER}>
            <Property
              room={rooms[0]}
              idActiveRoom={idActiveRoom}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Route>
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

App.propTypes = {
  rooms: roomsType,
};

export default App;
