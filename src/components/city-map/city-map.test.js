import React from 'react';
import { render, screen } from '@testing-library/react';
import CityMap from './city-map';

jest.mock('./city-map', () => {
  const mockCityMap = () => <>This is mock CityMap</>
  mockCityMap.displayName = 'MockCityMap';
  return {
    __esModule: true,
    default: () => {
      return mockCityMap();
    }
  };
});

describe(`Test HOC CityMap`, () => {
  it(`Base component should be correct rendering when use with HOC`, () => {
    const BaseComponent = () => <H1>with CityMap</H1>;
    const BaseComponentWrapped = CityMap(BaseComponent);
    render(<BaseComponentWrapped />);

    expect(screen.getByText(/with CityMap/i)).toBeInTheDocument();
  });
});
