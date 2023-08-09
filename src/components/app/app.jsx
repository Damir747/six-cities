import React, { useCallback, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from '../main-page/main-page';
import { AppRoute } from '../../const';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorite-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';

import roomsType from '../../types/rooms';
import reviewsType from "../../types/reviews";
import citiesType from '../../types/cities';
import propertyInsideType from "../../types/property-inside-items";
import menuUpType from '../../types/menu';
import loginType from '../../types/login';

const App = ({ rooms, reviews, cities, propertyInside, menuUpArray, loginName }) => {
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
              cities={cities}
              rooms={rooms}
              idActiveRoom={idActiveRoom}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              loginName={loginName}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <LoginPage
              loginName={loginName}
            />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <FavoritesPage
              rooms={rooms}
              cities={cities}
              loginName={loginName}
            />
          </Route>
          <Route exact path={AppRoute.OFFER}>
            <Property
              room={rooms[0]}
              reviews={reviews}
              propertyInside={propertyInside}
              neighbourhood={rooms.slice(1, 4)}
              idActiveRoom={idActiveRoom}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              loginName={loginName}
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
  cities: citiesType,
  propertyInside: propertyInsideType,
  menuUpArray: menuUpType,
  loginName: loginType,
};

export default App;
