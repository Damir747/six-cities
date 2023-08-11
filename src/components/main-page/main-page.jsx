import React, { useState } from "react";
import PropTypes from "prop-types";

import menuType from "../../types/menu";
import citiesType from '../../types/cities';
import roomsType from '../../types/rooms';
import loginType from '../../types/login';

import Top from "../top/top";
import Header from "../header/header";
import CityPlaces from "../city-places/city-places";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AppRoute } from "../../const";
import { classname } from "../../utils/utils";
import { connect } from "react-redux";
import { getLogin } from "../../store/selectors";

const MainPage = ({ menuUpArray, cities, rooms, idActiveRoom, onMouseEnter, onMouseLeave, loginName }) => {

  // Amsterdam
  const [idActiveCity, setActiveCity] = useState(4);
  const activeCity = cities.filter((city) => city.id === idActiveCity)[0];
  const filteredRooms = rooms.filter((room) => room.cityName === activeCity.cityName);

  return (
    <React.Fragment>
      <Top />

      <div className="page page--gray page--main">
        <Header loginName={loginName} />

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
            activeCity={activeCity}
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
  cities: citiesType,
  rooms: roomsType,
  idActiveRoom: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  loginName: loginType,
};

const mapStateToProps = (state) => ({
  loginName: getLogin(state),
});

export { MainPage };
export default connect(mapStateToProps)(MainPage);
