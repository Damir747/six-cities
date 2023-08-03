import React from "react";

import CityPlaces from "../city-places/city-places";
import cities from '../../mock/mock-cities';
import menuType from "../../types/menu";
import roomsType from '../../types/rooms';
import Top from "../top/top";
import Header from "../header/header";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AppRoute } from "../../const";

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
                      <Link className={['locations__item-link', 'tabs__item',
                        city.cityName === 'Amsterdam' ? 'tabs__item--active' : ''].join(' ')} to={AppRoute.ROOT}>
                        <span>{city.cityName}</span>
                      </Link>
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
  menuUpArray: menuType,
  rooms: roomsType,
};

export default MainPage;
