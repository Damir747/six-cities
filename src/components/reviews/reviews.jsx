import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import reviewsType from "../../types/reviews";
import OldReviews from "../old-reviews/old-reviews";
import NewReview from "../new-review/new-review";
import { getAuthorizationStatus, getReviews } from "../../store/selectors";
import { AuthorizationStatus } from '../../const';

const Reviews = ({ reviews, authorizationStatus }) => {
  return (
    <React.Fragment>
      <section className="property__reviews reviews">

        <OldReviews reviews={reviews} />
        {authorizationStatus === AuthorizationStatus.AUTH ? <NewReview /> : ''}

      </section>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  reviews: reviewsType,
  authorizationStatus: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});
export { Reviews };
export default connect(mapStateToProps)(Reviews);
