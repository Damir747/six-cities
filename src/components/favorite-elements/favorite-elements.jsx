import React from "react";
import PropTypes from "prop-types";

import roomType from '../../types/room';
import cities from "../../mock/mock-cities";
import FavoriteCities from "../favorite-cities/favorite-cities";

const FavoriteElements = ({ rooms }) => {
  const filteredRooms = rooms.slice().filter((item) => item.bookmark === 'In bookmarks');
  const uniqueCities = cities.slice().sort();  //? доделать

  return (
    <React.Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              <FavoriteCities cities={uniqueCities} rooms={filteredRooms} />

            </ul>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

FavoriteElements.propTypes = {
  rooms: PropTypes.arrayOf(
    roomType.isRequired
  ),
};

export default FavoriteElements;
