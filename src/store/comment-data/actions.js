import { COMMENT_POST } from "./actions-types";

const commentPost = (comment) => ({
  type: COMMENT_POST,
  payload: comment,
});

export {
  commentPost,
};
