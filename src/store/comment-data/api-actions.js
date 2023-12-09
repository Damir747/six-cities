import { Comment } from '../adapter';
import { appendNotification } from '../notification-data/actions';
import { commentPost, loadReviewList } from './actions';
import { serverLinks } from '../server-links';

const fetchCommentsList = (idHotel) => (dispatch, _getState, api) => {
  return api.get(`${serverLinks.COMMENTS}/${idHotel}`)
    .then(({ data }) => {
      const commentList = [];
      data.map((el) => {
        commentList.push(Object.assign({}, Comment.convertDataToComment(el)));
      });
      dispatch(loadReviewList(commentList));
      return commentList;
    })
    .catch((error) => {
      console.log('error!');
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 3
      }));
    });
};

const fetchPostComment = (idHotel, commentObj) => (dispatch, _getState, api) => {
  return api.post(`${serverLinks.COMMENTS}/${idHotel}`, commentObj)
    .then(({ data }) => {
      dispatch(commentPost(data));

      const commentList = [];
      data.map((el) => {
        commentList.push(Object.assign({}, Comment.convertDataToComment(el)));
      });
      dispatch(loadReviewList(commentList));
      return commentList;
    })
    .catch((error) => {
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 5,
      }));
    });
};

export {
  fetchCommentsList,
  fetchPostComment
};
