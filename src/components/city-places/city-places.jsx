import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuUp from '../menu-up/menu-up';
import CityMap from '../city-map/city-map';
import Room from '../../components/room/room';

import roomsType from '../../types/rooms';


import { getActiveCity } from '../../store/city-data/selectors';
import { Frame } from '../../const';
import { useWhyDidYouUpdate } from 'ahooks';
import { getFilteredRooms, getRooms } from '../../store/hotel-data/selectors';

const CityPlaces = ({ idActiveRoom, onMouseEnter, onMouseLeave,
  activeCity, filteredRooms, onChangeFavorite }) => {
  if (filteredRooms.length) {
    return (
      <React.Fragment>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredRooms.length} places to stay in {activeCity}</b>
              <MenuUp />

              <div className="cities__places-list places__list tabs__content">
                {filteredRooms.map((roomElement) => (
                  <Room
                    key={roomElement.id}
                    roomElement={roomElement}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onChangeFavorite={onChangeFavorite}
                    frame={Frame.CITIES}
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

                />
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
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
  onChangeFavorite: PropTypes.func.isRequired,
  activeCity: PropTypes.string,
  filteredRooms: roomsType,
};

const mapStateToProps = (state) => ({
  rooms: getRooms(state),
  activeCity: getActiveCity(state),
  filteredRooms: getFilteredRooms(state),
});

export { CityPlaces };
export default connect(mapStateToProps)(CityPlaces);
