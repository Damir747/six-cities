import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import MenuUp from "../menu-up/menu-up";
import menuType from "../../types/menu";
import roomsType from '../../types/rooms';
import cityType from "../../types/city";
import CityMap from "../map/map";

const CityPlaces = ({ city, menuUpArray, rooms, idActiveRoom, onMouseEnter, onMouseLeave }) => {

  return (
    <React.Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{city.places} places to stay in {city.cityName}</b>
        <MenuUp menuUpArray={menuUpArray}></MenuUp>

        <OfferCard
          rooms={rooms}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <CityMap
            rooms={rooms}
            idActiveRoom={idActiveRoom}
          />
        </section>
      </div>
    </React.Fragment>
  );
};

CityPlaces.propTypes = {
  city: cityType,
  menuUpArray: menuType,
  rooms: roomsType,
  idActiveRoom: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default CityPlaces;
