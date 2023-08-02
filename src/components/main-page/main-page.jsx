import React from "react";
import PropTypes from "prop-types";

import CityPlaces from "../city-places/city-places";
import cities from '../../mock/mock-cities';
import menuType from "../../types/menu";
import roomType from "../../types/room";
import Top from "../top/top";
import Header from "../header/header";

const MainPage = ({ menuUpArray, rooms }) => {
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
                      <a className={['locations__item-link', 'tabs__item',
                        city.cityName === 'Amsterdam' ? 'tabs__item--active' : ''].join(' ')} href="#">
                        <span>{city.cityName}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <CityPlaces cityName={"Amsterdam"} menuUpArray={menuUpArray} rooms={rooms}></CityPlaces>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  menuUpArray: PropTypes.arrayOf(
    menuType.isRequired
  ),
  rooms: PropTypes.arrayOf(
    roomType.isRequired
  ),
};

export default MainPage;
