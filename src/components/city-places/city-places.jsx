import React from "react";
import PropTypes from "prop-types";
import MenuUp from "../menu-up/menu-up";
import menuType from "../../types/menu";
import roomsType from '../../types/rooms';
import cityType from "../../types/city";
import CityMap from "../map/map";
import Room from '../../components/room/room';

const CityPlaces = ({ activeCity, menuUpArray, rooms, idActiveRoom, onMouseEnter, onMouseLeave }) => {

  return (
    <React.Fragment>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{activeCity.places} places to stay in {activeCity.cityName}</b>
            <MenuUp menuUpArray={menuUpArray}></MenuUp>

            <div className="cities__places-list places__list tabs__content">
              {rooms.map((roomElement) => (
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
                rooms={rooms}
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
  activeCity: cityType,
  menuUpArray: menuType,
  rooms: roomsType,
  idActiveRoom: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default CityPlaces;
