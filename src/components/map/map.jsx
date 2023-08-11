import React, { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import roomsType from '../../types/rooms';
import cityType from '../../types/city';

const CityMap = ({ rooms, idActiveRoom, activeCity }) => {
  const mapRef = useRef(null);
  const [mapSettings, setMapSettings] = useState(null);

  useEffect(() => {
    console.log('первый UseEffect');
    const zoom = 12;
    console.log(mapRef);
    console.log(mapRef.current);
    mapRef.current = leaflet.map(mapRef.current, {
      center: {
        lat: activeCity.coordinates.lat,
        lng: activeCity.coordinates.lng,
      },
      zoom,
      zoomControl: false,
      marker: true
    });
    // mapLeaflet.setView(activeCity.coordinates, zoom);
    console.log('middle');
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
      { attribution: '© OpenStreetMap contributors © CARTO' })
      .addTo(mapRef.current);

    // setMapSettings(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [mapRef, activeCity, rooms]);

  console.log(mapRef);
  console.log(mapRef.current);
  useEffect(() => {
    console.log('второй UseEffect');
    if (mapRef.current) {
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
          .addTo(mapRef.current)
          .bindPopup(room.cityName);
      });
    }

  }, [rooms, idActiveRoom, mapRef]);

  return (
    <div style={{ height: `100%` }} ref={mapRef} ></div >
  );
};

CityMap.propTypes = {
  rooms: roomsType,
  idActiveRoom: PropTypes.number,
  activeCity: cityType,
};
export default CityMap;
