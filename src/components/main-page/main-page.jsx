/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Top from '../top/top';
import Header from '../header/header';
import CityPlaces from '../city-places/city-places';
import { getActiveCity, getCities } from '../../store/city-data/selectors';
import CityList from '../city-list/city-list';

const MainPage = ({ historyPush }) => {
  const cities = useSelector(getCities);
  const activeCity = useSelector(getActiveCity);

  return (
    <React.Fragment>
      <Top />

      <div className="page page--gray page--main">
        <Header
          historyPush={historyPush}
        />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CityList
            cities={cities}
            activeCity={activeCity}
          />
          <CityPlaces
            historyPush={historyPush}
          />
        </main >
      </div >
    </React.Fragment >
  );
};

MainPage.propTypes = {
  historyPush: PropTypes.func,
};

export default MainPage;
