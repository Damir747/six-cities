import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../main-page/main-page';
import { AppRoute } from '../../const';
import LoginPage from '../login-page/login-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';

import reviewsType from '../../types/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getIsHotelListLoaded, getIsHotelListLoading } from '../../store/hotel-data/selectors';
import Loading from '../loading/loading';
import { fetchHotelList } from '../../store/hotel-data/api-actions';
import PrivateRoute from '../private-route/private-route';
import FavoritePage from '../favorites-page/favorite-page';
import { getIsCityListIsLoaded, getIsCityListIsLoading } from '../../store/city-data/selectors';
import browserHistory from '../../browser-history';
import NonPrivateRoute from '../private-route/non-private-route';
import { initHotelList } from '../../store/hotel-data/actions';
import { initCitylList } from '../../store/city-data/actions';

const App = () => {
  const isHotelListLoading = useSelector(getIsHotelListLoading);
  const isHotelListLoaded = useSelector(getIsHotelListLoaded);
  const isCityListLoading = useSelector(getIsCityListIsLoading);
  const isCityListLoaded = useSelector(getIsCityListIsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isHotelListLoaded && !isCityListLoaded) {
      dispatch(initHotelList());
      dispatch(initCitylList());
      dispatch(fetchHotelList());
    }
  }, [isHotelListLoaded, isCityListLoaded]);

  if (isHotelListLoading || isCityListLoading) {
    return (
      <Loading />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainPage />
      </Route>
      <NonPrivateRoute exact
        path={AppRoute.LOGIN}
        render={() => (
          <LoginPage
            onAfterLoginRedirect={() => browserHistory.push(AppRoute.ROOT)}
          />)}
      />
      <PrivateRoute exact
        path={AppRoute.FAVORITES}
        render={() => (
          <FavoritePage />
        )}
      />
      <Route exact path={AppRoute.OFFER + ':id'}>
        <Property />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch >
  );
};

App.propTypes = {
  reviews: reviewsType,
  cities: PropTypes.object,
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
