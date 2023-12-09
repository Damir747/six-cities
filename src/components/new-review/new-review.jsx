/* eslint-disable indent */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import stars from '../../mock/mock-rating-stars';
import { connect } from 'react-redux';
import { fetchPostComment } from '../../store/comment-data/api-actions';

// ? при комментарии без оценки требуется проверка. Сейчас просто слетает отзыв пользователя

const NewReview = ({ idHotel, onPostComment }) => {
  const [commentText, setCommentText] = useState('');
  const [commentStars, setStars] = useState(0);

  const handleCommentText = useCallback((evt) => {
    setCommentText(evt.target.value);
  }, []);

  const handleStars = useCallback((evt) => {
    setStars(evt.target.value);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onPostComment(idHotel, commentText, commentStars);
    setCommentText('');
    setStars(0);
  };

  return (
    <React.Fragment>
      <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {stars.map((star) => {
            const { value, title } = star;
            const id = `${value}-stars`;
            return (
              <React.Fragment key={id}>
                <input className="form__rating-input visually-hidden"
                  name="rating"
                  value={value}
                  id={id}
                  type="radio"
                  checked={+value === +commentStars}
                  onChange={handleStars} />
                <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })}
        </div>
        <textarea className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={commentText}
          onChange={handleCommentText}
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
  idHotel: PropTypes.number.isRequired,
  onPostComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onPostComment(idHotel, commentText, commentStars) {
    dispatch(fetchPostComment(idHotel, {
      'comment': commentText,
      'rating': commentStars,
    }));
  }
});

export { NewReview };
export default connect(null, mapDispatchToProps)(NewReview);
