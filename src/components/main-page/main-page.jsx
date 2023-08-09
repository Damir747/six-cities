import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import CityPlaces from "../city-places/city-places";
import cities from '../../mock/mock-cities';
import menuType from "../../types/menu";
import roomsType from '../../types/rooms';
import Top from "../top/top";
import Header from "../header/header";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AppRoute } from "../../const";
import { classname } from "../../utils/utils";

const MainPage = ({ menuUpArray, rooms, idActiveRoom, onMouseEnter, onMouseLeave }) => {

  // Amsterdam
  const [idActiveCity, setActiveCity] = useState(4);
  const activeCity = cities.filter((city) => city.id === idActiveCity)[0];
  const filteredRooms = rooms.filter((room) => room.cityName === activeCity.cityName);

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
            city={activeCity}
            menuUpArray={menuUpArray}
            rooms={filteredRooms}
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
  menuUpArray: menuType,
  rooms: roomsType,
  idActiveRoom: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MainPage;
