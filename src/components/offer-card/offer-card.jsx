import React from "react";
import PropTypes from "prop-types";

import roomsType from "../../types/rooms";
import Room from "../room/room";

const OfferCard = ({ rooms, onMouseEnter, onMouseLeave }) => {

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {rooms.map((roomElement) => (
          < Room
            key={roomElement.id}
            roomElement={roomElement}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        )
        )}
      </div >
    </>
  );
};

OfferCard.propTypes = {
  rooms: roomsType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default OfferCard;
