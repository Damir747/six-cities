import React from 'react';
import reviewType from '../../types/review';
import { roundRating } from '../../utils/utils';

const OldReview = ({ review }) => {
  const { id, author, img, reviewText, rating, date } = review;
  return (
    <React.Fragment>
      <li key={id} className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={img} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {author}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{ width: `${roundRating(rating)}%` }} ></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text" data-testid="review-text">
            {reviewText}
          </p>
          <time className="reviews__time" dateTime={new Date(date).toLocaleString(`en-CA`, { dateStyle: `short` })}>
            {new Date(date).toLocaleString(`en-US`, { year: `numeric`, month: `long` })}
          </time>
        </div>
      </li>
    </React.Fragment>
  );
};

OldReview.propTypes = {
  review: reviewType,
};

export default OldReview;
