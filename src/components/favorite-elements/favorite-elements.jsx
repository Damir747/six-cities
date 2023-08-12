import React from "react";
import PropTypes from "prop-types";

import FavoriteCities from "../favorite-cities/favorite-cities";
import roomsType from '../../types/rooms';

const FavoriteElements = ({ rooms, cities }) => {
  const favoriteRooms = rooms.slice().filter((item) => item.bookmark === 'In bookmarks');
  const uniqueCities = cities.slice().sort();  //? доделать

  return (
    <React.Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              <FavoriteCities cities={uniqueCities} rooms={favoriteRooms} />

            </ul>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

FavoriteElements.propTypes = {
  rooms: roomsType,
  cities: PropTypes.object,
};

export default FavoriteElements;
