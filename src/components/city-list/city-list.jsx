/* eslint-disable indent */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { classname } from '../../utils/utils';
import { getActiveCity, getCities } from '../../store/city-data/selectors';
import { selectActiveCity } from '../../store/city-data/actions';

const CityList = () => {

  const cities = useSelector(getCities);
  const activeCity = useSelector(getActiveCity);
  const dispatch = useDispatch();
  const onClick = (city) => {
    dispatch(selectActiveCity(city));
  };

  return (
    <>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.keys(cities).map((cityName) => {
              return (
                <li key={cityName} className="locations__item">
                  <a type="button"
                    className={classname('locations__item-link', 'tabs__item',
                      cityName === activeCity ? 'tabs__item--active' : '')}
                    onClick={() => onClick(cityName)}>
                    <span>{cityName}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};


export default CityList;
