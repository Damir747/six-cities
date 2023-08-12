import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MenuUp from "../menu-up/menu-up";
import CityMap from "../city-map/city-map";
import Room from '../../components/room/room';

import roomsType from '../../types/rooms';
import cityType from '../../types/city';
import citiesType from '../../types/cities';

import { getActiveCity, getCities, getFilteredRooms, getIdActiveCity, getRooms } from "../../store/selectors";

const CityPlaces = ({ idActiveRoom, onMouseEnter, onMouseLeave,
  activeCity, filteredRooms }) => {

  return (
    <React.Fragment>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredRooms.length} places to stay in {activeCity.cityName}</b>
            <MenuUp />

            <div className="cities__places-list places__list tabs__content">
              {filteredRooms.map((roomElement) => (
                < Room
                  key={roomElement.id}
                  roomElement={roomElement}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  frame='cities'
                />
              )
              )}
            </div >
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <CityMap
                rooms={filteredRooms}
                idActiveRoom={idActiveRoom}
                activeCity={activeCity}
              />
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

CityPlaces.propTypes = {
  rooms: roomsType,
  idActiveRoom: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  filteredRooms: roomsType,
  activeCity: cityType,
};

const mapStateToProps = (state) => ({
  rooms: getRooms(state),
  filteredRooms: getFilteredRooms(state),
  activeCity: getActiveCity(state),
});

export { CityPlaces };
export default connect(mapStateToProps)(CityPlaces);
