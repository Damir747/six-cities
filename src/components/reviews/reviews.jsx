import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import reviewsType from "../../types/reviews";
import OldReviews from "../old-reviews/old-reviews";
import NewReview from "../new-review/new-review";
import { getAuthorizationStatus, getReviews } from "../../store/selectors";
import { AuthorizationStatus } from '../../const';

const Reviews = ({ idHotelParam, reviews, authorizationStatus, onPostComment }) => {
  return (
    <React.Fragment>
      <section className="property__reviews reviews">

        <OldReviews reviews={reviews} />
        {authorizationStatus === AuthorizationStatus.AUTH
          ? <NewReview
            idHotelParam={idHotelParam}
            onPostComment={(idHotel, commentText, commentStars) => onPostComment(idHotel, commentText, commentStars)} />
          : ''}

      </section>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  idHotelParam: PropTypes.number.isRequired,
  reviews: reviewsType,
  authorizationStatus: PropTypes.string.isRequired,
  onPostComment: () => { },
};


const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});
export { Reviews };
export default connect(mapStateToProps)(Reviews);
