/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { NameSpace } from '../../store/root-reducer';


const PropertyInside = () => {
  const { propertyInsideItems } = useSelector((state) => state[NameSpace.INIT]);
=======
import { getPropertyInside } from '../../store/init-data/selectors';

const PropertyInside = () => {
  const propertyInsideItems = useSelector(getPropertyInside);
>>>>>>> january
  return (
    <React.Fragment>
      {propertyInsideItems.map((item) => {
        const { id, title } = item;
        return (
          <li key={id} className="property__inside-item">
            {title}
          </li>
        );
      })
      }
    </React.Fragment >
  );
};

export default PropertyInside;
