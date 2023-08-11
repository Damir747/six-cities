import React from "react";
import { connect } from "react-redux";

import reviewsType from "../../types/reviews";
import OldReviews from "../old-reviews/old-reviews";
import NewReview from "../new-review/new-review";
import { getReviews } from "../../store/selectors";

const Reviews = ({ reviews }) => {
  return (
    <React.Fragment>
      <section className="property__reviews reviews">

        <OldReviews />
        <NewReview />

      </section>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  reviews: reviewsType,
};


const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

export { Reviews };
export default connect(mapStateToProps)(Reviews);
