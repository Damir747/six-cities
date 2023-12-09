import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import roomsType from '../../types/rooms';

import { connect } from 'react-redux';

const CityMap = ({ rooms, idActiveRoom, city, coordinates }) => {
  const mapRef = useRef(null);
  const [mapSettings, setMapSettings] = useState(null);

  const zoom = 12;
  useEffect(() => {
    const mapLeaflet = leaflet.map(mapRef.current, {
      center: {
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
      zoom,
      zoomControl: false,
      marker: true
    });

    mapLeaflet.setView(coordinates, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
      { attribution: '© OpenStreetMap contributors © CARTO' })
      .addTo(mapLeaflet);

    setMapSettings(mapLeaflet);

    return () => {
      mapRef.current.remove();
    };
  }, [mapRef, setMapSettings]);

  useEffect(() => {
    const filteredRooms = rooms.filter((room) => room.cityName === city);
    const markers = [];
    if (mapSettings) {
      mapSettings.setView(coordinates, zoom);
      filteredRooms.forEach((room) => {
        const isActive = (idActiveRoom !== null) ? room.id === idActiveRoom : false;

        const icon = leaflet.icon({
          iconUrl: isActive ? 'img/pin-active.svg' : 'img/pin.svg',
          iconSize: [30, 30],
        });

        const marker = leaflet.marker(
          {
            lat: room.coordinates.lat,
            lng: room.coordinates.lng
          },
          { icon })
          .addTo(mapSettings)
          .bindPopup(room.cityName);
        markers.push(marker);
      });
    }
    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [rooms, idActiveRoom, city, mapSettings]);

  return (
    <div style={{ height: `100%` }} ref={mapRef} ></div >
  );
};

CityMap.propTypes = {
  rooms: roomsType,
  idActiveRoom: PropTypes.number,
  city: PropTypes.string,
  coordinates: PropTypes.object,
};

export default CityMap;
