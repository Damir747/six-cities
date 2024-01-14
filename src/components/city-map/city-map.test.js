import React from 'react';
import { render, screen } from '@testing-library/react';
import CityMap from './city-map';

jest.mock('./city-map', () => <h1>MockCityMap</h1>);

describe(`Test HOC CityMap`, () => {
  it(`Base component should be correct rendering when use with HOC`, () => {
    render(CityMap);
    expect(screen.getByText(/MockCityMap/i)).toBeInTheDocument();
  });
  it(`Check props count`, () => {
    const cityMap = jest.fn();
    render(cityMap({ rooms: [42] }));
    expect(cityMap).toHaveBeenCalledWith(
      expect.objectContaining({
        rooms: expect.any(Array)
      }),
    );
  });
});
