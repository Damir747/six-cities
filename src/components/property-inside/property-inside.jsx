import React from "react";
import PropTypes from "prop-types";
import propertyInsideItemType from "../../types/property-inside-item";

const PropertyInside = ({ propertyInsideItems }) => {
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

PropertyInside.propTypes = {
  propertyInsideItems: PropTypes.arrayOf(
    propertyInsideItemType.isRequired),
};

export default PropertyInside;
