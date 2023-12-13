import React from 'react';

import OldReview from './old-review';
import { NameSpace } from '../../store/root-reducer';
import { useSelector } from 'react-redux';

const OldReviews = () => {
  const { reviews } = useSelector((state) => state[NameSpace.COMMENT]);
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
