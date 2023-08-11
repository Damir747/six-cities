import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import citiesType from '../../types/cities';

import Top from "../top/top";
import Header from "../header/header";
import CityPlaces from "../city-places/city-places";
import { getCities, getIdActiveCity } from "../../store/selectors";
import CityList from "../city-list/city-list";

const MainPage = ({ cities, idActiveCity, idActiveRoom,
  onMouseEnter = () => { }, onMouseLeave = () => { } }) => {

  return (
    <React.Fragment>
      <Top />

      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CityList
            cities={cities}
            idActiveCity={idActiveCity}
          />

          <CityPlaces
            idActiveRoom={idActiveRoom}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </main >
      </div >
    </React.Fragment >
  );
};

MainPage.propTypes = {
  cities: citiesType,
  idActiveCity: PropTypes.number,
  idActiveRoom: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  idActiveCity: getIdActiveCity(state),
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
