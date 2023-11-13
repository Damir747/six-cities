import { COMMENT_POST, REVIEW_LIST } from "./actions-types";

const commentPost = (comment) => ({
  type: COMMENT_POST,
  payload: comment,
});

const loadReviewList = (reviews) => ({
  type: REVIEW_LIST,
  payload: reviews,
});

export {
  commentPost,
  loadReviewList
};
