import React from "react";
import PropTypes from "prop-types";
import cityType from '../../types/city';
import FavoriteCityRooms from "../favorite-city-rooms/favorite-city-rooms";
import roomType from '../../types/room';
import { AppRoute } from "../../const";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FavoriteCities = ({ cities, rooms }) => {

  return (
    <React.Fragment>
      {cities.map((city) => {
        const filteredRooms = rooms.filter((room) => room.cityName === city.cityName);
        if (filteredRooms.length < 1) {
          return null;
        }
        return (
          <li key={city.id} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.ROOT}>
                  <span>{city.cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              <FavoriteCityRooms rooms={filteredRooms} />
            </div>
          </li>
        );
      })}
    </React.Fragment>
  );
};

FavoriteCities.propTypes = {
  cities: PropTypes.arrayOf(
    cityType.isRequired
  ),
  rooms: PropTypes.arrayOf(
    roomType.isRequired
  ),
};
export default FavoriteCities;
