import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import MenuUp from '../menu-up/menu-up';
import CityMap from '../city-map/city-map';
import Room from '../../components/room/room';

import { getActiveCity, getActiveCityCoordinates } from '../../store/city-data/selectors';
import { LevelFrame } from '../../const';
import { getFilteredRooms } from '../../store/hotel-data/selectors';

const CityPlaces = () => {
  const activeCity = useSelector(getActiveCity);
  const coordinates = useSelector(getActiveCityCoordinates);
  const filteredRooms = useSelector(getFilteredRooms);
  if (filteredRooms.length) {
    const [idActiveRoom, setActiveRoom] = useState(null);
    const handleMouseEnter = useCallback((item) => {
      setActiveRoom(item);
    }, []);
    const handleMouseLeave = useCallback(() => {
      setActiveRoom(null);
    }, []);

    return (
      <React.Fragment>
        <div className="cities" data-testid="city-places">
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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    frame={LevelFrame.CITIES}
                  />
                )
                )}
              </div >
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CityMap
                  cityName={activeCity}
                  coordinates={coordinates}
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

export default CityPlaces;
