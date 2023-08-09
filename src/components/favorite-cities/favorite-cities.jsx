import React from "react";
import FavoriteCityRooms from "../favorite-city-rooms/favorite-city-rooms";
import roomsType from '../../types/rooms';
import citiesType from '../../types/cities';
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

            <FavoriteCityRooms rooms={filteredRooms} />

          </li>
        );
      })}
    </React.Fragment >
  );
};

FavoriteCities.propTypes = {
  cities: citiesType,
  rooms: roomsType,
};
export default FavoriteCities;
