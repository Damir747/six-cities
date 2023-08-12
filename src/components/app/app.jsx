import React, { useCallback, useState } from 'react';
import PropTypes from "prop-types";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from '../main-page/main-page';
import { AppRoute } from '../../const';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorite-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';

import roomsType from '../../types/rooms';
import reviewsType from "../../types/reviews";
import loginType from '../../types/login';

const App = ({ rooms, loginName }) => {
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
              idActiveRoom={idActiveRoom}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <LoginPage
              loginName={loginName}
            />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <FavoritesPage />
          </Route>
          <Route exact path={AppRoute.OFFER}>
            <Property
              room={rooms[0]}
              neighbourhood={rooms.slice(2, 5)}
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
  reviews: reviewsType,
  cities: PropTypes.object,
  loginName: loginType,
};

export default App;
