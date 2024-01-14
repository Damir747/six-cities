import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CityMap from './city-map';
import { initialMockState } from '../../mock/mock-test';


it(`Map correctly renders`, () => {
  render(<CityMap
    rooms={initialMockState.HOTEL.rooms}
    idActiveRoom={1}
    cityName={initialMockState.HOTEL.rooms[0].city.name}
    coordinates={initialMockState.HOTEL.rooms[0].city.location}
  />);

  expect(screen.getByTestId('map')).toBeInTheDocument();
});
