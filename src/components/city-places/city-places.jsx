import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import MenuUp from "../menu-up/menu-up";
import { cityPlaces } from "../mock-data";

const CityPlaces = (city) => {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <MenuUp></MenuUp>

      <OfferCard></OfferCard>

    </section>
  );
}

CityPlaces.propTypes = {
  city: PropTypes.string.isRequired,
}

export default CityPlaces;
