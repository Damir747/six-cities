import * as React from 'react';
import * as renderer from '@testing-library/react-hooks';
import CityMap from './city-map';
import { initialMockState } from '../../mock/mock-test';

const createNodeForMap = {
  createNodeMock: () => {
    const el = document.createElement(`div`);
    el.id = `map`;
    el.style.height = `400px`;

    return el;
  }
};
it(`Map correctly renders`, () => {

  const tree = renderer
    .create(<CityMap
      rooms={initialMockState.HOTEL.rooms}
      idActiveRoom={1}
      cityName={initialMockState.HOTEL.rooms[0].city.name}
      coordinates={initialMockState.HOTEL.rooms[0].city.location}
    />, createNodeForMap)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
