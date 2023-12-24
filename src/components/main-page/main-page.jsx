/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';

import Top from '../top/top';
import Header from '../header/header';
import CityPlaces from '../city-places/city-places';
import { getActiveCity, getCities } from '../../store/city-data/selectors';
import CityList from '../city-list/city-list';

const MainPage = () => {
  const cities = useSelector(getCities);
  const activeCity = useSelector(getActiveCity);

  return (
    <React.Fragment>
      <Top />

      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CityList
            cities={cities}
            activeCity={activeCity}
          />
          <CityPlaces />
        </main >
      </div >
    </React.Fragment >
  );
};

export default MainPage;
