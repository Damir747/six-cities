import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { classname } from "../../utils/utils";
import citiesType from "../../types/cities";
import { getCities, getIdActiveCity } from "../../store/selectors";
import ActionCreator from "../../store/actions";

const CityList = ({ cities, idActiveCity, onClick = () => { } }) => {
  return (
    <>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => {
              return (
                <li key={city.id} className="locations__item">
                  <a type="button"
                    className={classname('locations__item-link', 'tabs__item',
                      city.id === idActiveCity ? 'tabs__item--active' : '')}
                    onClick={() => onClick(city.id)}>
                    <span>{city.cityName}</span>
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
  cities: citiesType,
  idActiveCity: PropTypes.number,
  onClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  idActiveCity: getIdActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(idActiveCity) {
    dispatch(ActionCreator.selectCity(idActiveCity));
  },
});

export { CityList };
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
