import React from 'react';
import { connect } from "react-redux";

import propertyInsideItemsType from "../../types/property-inside-items";
import { getPropertyInside } from "../../store/selectors";

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
	propertyInsideItems: propertyInsideItemsType,
};

const mapStateToProps = (state) => ({
	propertyInsideItems: getPropertyInside(state),
});

export { PropertyInside };
export default connect(mapStateToProps)(PropertyInside);
