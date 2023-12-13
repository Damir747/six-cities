/* eslint-disable indent */
import React from 'react';
import { connect, useSelector } from 'react-redux';

import propertyInsideItemsType from '../../types/property-inside-items';
import { getPropertyInside } from '../../store/init-data/selectors';


const PropertyInside = () => {
  const propertyInsideItems = useSelector((state) => getPropertyInside(state));
  return (
    <React.Fragment>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {propertyInsideItems.map((item) => {
            const { id, title } = item;
            return (
              <li key={id} className="property__inside-item">
                {title}
              </li>
            );
          })
          }
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PropertyInside;
