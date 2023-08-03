import React from "react";

import reviewsType from "../../types/reviews";
import OldReviews from "../old-reviews/old-reviews";
import NewReview from "../new-review/new-review";

const Reviews = ({ reviews }) => {
  return (
    <React.Fragment>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>

        <OldReviews reviews={reviews} />
        <NewReview />

      </section>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  reviews: reviewsType,
};
export default Reviews;
