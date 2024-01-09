import { Comment } from '../adapter';
import { appendNotification } from '../notification-data/actions';
import { commentPost } from './actions';
import { serverLinks } from '../server-links';
import { loadComments } from '../hotel-data/actions';

const fetchCommentsList = (idHotel) => (dispatch, _getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 3
    }));
    dispatch(loadComments([]));
    return error;
  }

  return api.get(`${serverLinks.COMMENTS}/${idHotel}`)
    .then(({ data }) => {
      const commentList = [];
      data.map((el) => {
        commentList.push(Object.assign({}, Comment.convertDataToComment(el)));
      });
      dispatch(loadComments(commentList));
      return commentList;
    })
    .catch((error) => onError(error));

};

const fetchPostComment = (idHotel, commentObj, onAfterSendComment, onSubmittingFinally) => (dispatch, _getState, api) => {
  function onError(error) {
    console.log('error!', error);
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 5,
    }));
    return error;
  }

  return api.post(`${serverLinks.COMMENTS}/${idHotel}`, commentObj)
    .then(({ data }) => {
      dispatch(commentPost(data));
      const commentList = [];
      data.map((el) => {
        commentList.push(Object.assign({}, Comment.convertDataToComment(el)));
      });
      dispatch(loadComments(commentList));
      onAfterSendComment();
      return commentList;
    })
    .finally(() => onSubmittingFinally())
    .catch((error) => onError(error));

};

export {
  fetchCommentsList,
  fetchPostComment,
};
