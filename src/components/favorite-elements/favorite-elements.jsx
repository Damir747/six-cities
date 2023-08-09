import React from "react";

import FavoriteCities from "../favorite-cities/favorite-cities";
import roomsType from '../../types/rooms';
import citiesType from '../../types/cities';

const FavoriteElements = ({ rooms, cities }) => {
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
  rooms: roomsType,
  cities: citiesType,
};

export default FavoriteElements;
