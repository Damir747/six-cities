import React from 'react';
import { useSelector } from 'react-redux';

import { getReviews } from '../../store/comment-data/selectors';
import OldReview from './old-review';

const OldReviews = () => {
  const reviews = useSelector(getReviews);
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

export default OldReviews;
