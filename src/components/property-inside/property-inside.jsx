/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
import { getPropertyInside } from '../../store/init-data/selectors';

const PropertyInside = () => {
  const propertyInsideItems = useSelector(getPropertyInside);
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
