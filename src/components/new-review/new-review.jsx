/* eslint-disable indent */
import React, { useCallback, useState } from "react";
import PropTypes from 'prop-types';
import stars from '../../mock/mock-rating-stars';

const NewReview = ({ idHotelParam, onPostComment }) => {
  const [commentText, setCommentText] = useState('');
  const [commentStars, setStars] = useState(0);

  const handleCommentText = (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.target.textLength, evt.target.value);
    // setCommentText(evt.target.value);
    setCommentText('777');
  };

  const handleStars = useCallback((evt) => {
    console.log('Звезды:', evt.target.value);
    setStars(evt.target.value);
  }, []);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    console.log(idHotelParam, commentText, commentStars);
    onPostComment(idHotelParam, commentText, commentStars)
      .then(() => {
        setCommentText('');
        setStars(0);
      });
  });

  return (
    <React.Fragment>
      <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {stars.map((star) => {
            const { id, value, title } = star;
            return (
              <React.Fragment key={id}>
                <input className="form__rating-input visually-hidden" name="rating" value={value}
                  id={`${value}-stars`} type="radio" onClick={handleStars} />
                <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
          onClick={handleCommentText}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    </React.Fragment >
  );
};

NewReview.propTypes = {
  idHotelParam: PropTypes.number.isRequired,
  onPostComment: () => { },
};
export default NewReview;
