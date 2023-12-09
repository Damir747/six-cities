/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Top from '../top/top';
import Header from '../header/header';
import CityPlaces from '../city-places/city-places';
import { getActiveCity, getCities } from '../../store/city-data/selectors';
import CityList from '../city-list/city-list';

const MainPage = ({ idActiveRoom, cities, activeCity }) => {

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

MainPage.propTypes = {
  idActiveRoom: PropTypes.number,
  cities: PropTypes.object,
  activeCity: PropTypes.string,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  activeCity: getActiveCity(state),
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
