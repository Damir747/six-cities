import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';

import MainPage from '../main-page/main-page';
import { AppRoute } from '../../const';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorite-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';

import roomsType from '../../types/rooms';
import reviewsType from '../../types/reviews';
import { connect } from 'react-redux';
import { getIsDataLoaded } from '../../store/hotel-data/selectors';
import Loading from '../loading/loading';
import browserHistory from '../../browser-history';
// ? live 6. 01:46:19 - разобраться с остатками useHistory

const App = ({ rooms, isDataLoaded, onLoadData, onLoadHotel, onLoadComments, onPostComment }) => {
  const [idActiveRoom, setActiveRoom] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveRoom(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveRoom(null);
  }, []);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <MainPage
              idActiveRoom={idActiveRoom}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <LoginPage />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <FavoritesPage />
          </Route>
          <Route exact path={AppRoute.OFFER + ':id'}>
            <Property
              idActiveRoom={idActiveRoom}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onLoadHotel={(id) => onLoadHotel(id)}
              onLoadComments={(idHotel) => onLoadComments(idHotel)}
              onPostComment={onPostComment}
            />
          </Route>
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

App.propTypes = {
  rooms: roomsType,
  reviews: reviewsType,
  cities: PropTypes.object,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: () => { },
  onLoadHotel: () => { },
  onLoadComments: () => { },
  onPostComment: () => { },
};

const mapStateToProps = (state) => ({
  isDataLoaded: getIsDataLoaded(state)
});

export { App };
export default connect(mapStateToProps)(App);

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
