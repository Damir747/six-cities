import React, { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cities from '../../mock/mock-cities';
import roomsType from '../../types/rooms';

const CityMap = ({ rooms, idActiveRoom }) => {
  const mapRef = useRef(null);
  const [mapSettings, setMapSettings] = useState(null);

  const activeCity = cities[3]; // Amsterdam
  useEffect(() => {
    const zoom = 12;
    const mapLeaflet = leaflet.map(mapRef.current, {
      center: {
        lat: activeCity.coordinates.lat,
        lng: activeCity.coordinates.lng,
      },
      zoom,
      zoomControl: false,
      marker: true
    });
    mapLeaflet.setView(activeCity.coordinates, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
      { attribution: '© OpenStreetMap contributors © CARTO' })
      .addTo(mapLeaflet);

    setMapSettings(mapLeaflet);

    return () => {
      mapRef.current.remove();
    };
  }, [mapRef, activeCity, setMapSettings]);

  useEffect(() => {
    if (mapSettings) {
      rooms.forEach((room) => {
        const isActive = (idActiveRoom !== null) ? room.id === idActiveRoom : false;

        const icon = leaflet.icon({
          iconUrl: isActive ? 'img/pin-active.svg' : 'img/pin.svg',
          iconSize: [30, 30],
        });

        leaflet.marker(
          {
            lat: room.coordinates.lat,
            lng: room.coordinates.lng
          },
          { icon })
          .addTo(mapSettings)
          .bindPopup(room.cityName);
      });
    }

  }, [rooms, idActiveRoom, mapSettings]);

  return (
    <div style={{ height: `100%` }} ref={mapRef} ></div >
  );
};

CityMap.propTypes = {
  rooms: roomsType,
  idActiveRoom: PropTypes.number,
};
export default CityMap;
