import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
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

// Задайте себе три вопроса:

//     Передаются ли они от родителя через пропсы ? Если так, тогда эти данные не должны храниться в состоянии компонента.
//     Остаются ли они неизменными со временем ? Если так, тогда их тоже не следует хранить в состоянии.
//     Можете ли вы вычислить их на основании любых других данных в своём компоненте или пропсов ? Если так, тогда это тоже не состояние.

// Исходный список товаров передаётся через пропсы, так что не нужно хранить его в состоянии компонента.
// Поисковый запрос и состояние чекбокса изменяются со временем, и их нельзя вычислить из других данных, так что они вполне сойдут за состояние.
// Напоследок, отфильтрованный список товаров не является состоянием, так как его можно вычислить из оригинального списка, поискового запроса и значения чекбокса.

// В итоге, состоянием являются:

//     Поисковый запрос, введённый пользователем
//     Значение чекбокса

// Так как компоненты должны обновлять только относящееся к ним состояние, FilterableProductTable передаст колбэк в SearchBar.В свою очередь, SearchBar будет вызывать этот колбэк каждый раз, когда надо обновить состояние.Чтобы получать уведомления об изменениях элементов формы, мы можем использовать событие onChange.Колбэки, переданные из компонента FilterableProductTable, вызовут setState(), и приложение обновится.

// https://ru.legacy.reactjs.org/docs/thinking-in-react.html
