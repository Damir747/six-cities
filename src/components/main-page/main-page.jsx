import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import citiesType from '../../types/cities';

import Top from "../top/top";
import Header from "../header/header";
import CityPlaces from "../city-places/city-places";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AppRoute } from "../../const";
import { classname } from "../../utils/utils";
import { getCities, getIdActiveCity } from "../../store/selectors";

const MainPage = ({ cities, idActiveCity, idActiveRoom, onMouseEnter, onMouseLeave }) => {

  return (
    <React.Fragment>
      <Top />

      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                {cities.map((city) => {
                  return (
                    <li key={city.id} className="locations__item">
                      <Link className={classname('locations__item-link', 'tabs__item',
                        city.id === idActiveCity ? 'tabs__item--active' : '')} to={AppRoute.ROOT}>
                        <span>{city.cityName}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

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
