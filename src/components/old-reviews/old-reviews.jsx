import React from 'react';
import { connect } from 'react-redux';

import reviewsType from '../../types/reviews';
import { getReviews } from '../../store/comment-data/selectors';
import OldReview from './old-review';

const OldReviews = ({ reviews }) => {
  const countReviews = reviews.length;
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{countReviews}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => {
          return (
            <OldReview
              key={item.id}
              review={item}
            />);
        })}
      </ul>
    </React.Fragment>
  );
};

OldReviews.propTypes = {
  reviews: reviewsType.isRequired
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

export { OldReviews };
export default connect(mapStateToProps)(OldReviews);
