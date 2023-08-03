import React, { useCallback, useState } from "react";

import roomsType from "../../types/rooms";
import Room from "../room/room";

const OfferCard = ({ rooms }) => {

  const [activeRoom, setActiveRoom] = useState(null);

  const handleMouseEnter = useCallback((item) => {
    setActiveRoom(item);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveRoom(null);
  }, []);
  // console.log(activeRoom);
  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {rooms.map((roomElement) => (
          < Room key={roomElement.id} roomElement={roomElement} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        )
        )}
      </div >
    </>
  );
};

OfferCard.propTypes = {
  rooms: roomsType,
};

export default OfferCard;
