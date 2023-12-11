/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
import { NameSpace } from '../../store/root-reducer';


const PropertyInside = () => {
  const { propertyInsideItems } = useSelector((state) => state[NameSpace.INIT]);
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
