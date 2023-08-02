import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import MenuUp from "../menu-up/menu-up";
import cities from '../../mock/mock-cities';
import menuType from "../../types/menu";
import roomType from "../../types/room";

const CityPlaces = ({ cityName, menuUpArray, rooms }) => {
  const cityFind = cities.filter((item) => item.cityName === cityName);
  const city = cityFind[0];
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{city.places} places to stay in {city.cityName}</b>
      <MenuUp menuUpArray={menuUpArray}></MenuUp>

      <OfferCard rooms={rooms}></OfferCard>

    </section>
  );
};

CityPlaces.propTypes = {
  cityName: PropTypes.string.isRequired,
  menuUpArray: PropTypes.arrayOf(
    menuType.isRequired
  ),
  rooms: PropTypes.arrayOf(
    roomType.isRequired
  ),
};

export default CityPlaces;
