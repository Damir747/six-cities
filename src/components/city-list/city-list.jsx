/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { classname } from "../../utils/utils";
import { getActiveCity, getCities } from "../../store/selectors";
import { selectCity } from "../../store/actions";

const CityList = ({ cities, activeCity, onClick = () => { } }) => {
  return (
    <>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.keys(cities).map((city) => {
              return (
                <li key={city} className="locations__item">
                  <a type="button"
                    className={classname('locations__item-link', 'tabs__item',
                      city === activeCity ? 'tabs__item--active' : '')}
                    onClick={() => onClick(city)}>
                    <span>{city}</span>
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

CityList.propTypes = {
  cities: PropTypes.object,
  activeCity: PropTypes.string,
  onClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(activeCity) {
    dispatch(selectCity(activeCity));
  },
});

export { CityList };
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
