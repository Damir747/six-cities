import { Comment } from '../adapter';
import { appendNotification } from '../notification-data/actions';
import { commentPost } from './actions';
import { serverLinks } from '../server-links';
import { loadComments } from '../hotel-data/actions';

const fetchCommentsList = (idHotel) => (dispatch, _getState, api) => {
  return api.get(`${serverLinks.COMMENTS}/${idHotel}`)
    .then(({ data }) => {
      const commentList = [];
      data.map((el) => {
        commentList.push(Object.assign({}, Comment.convertDataToComment(el)));
      });
      dispatch(loadComments(commentList));
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

function fetchPostComment(idHotel, commentObj, onAfterSendComment) {
  return async function (dispatch, _getState, api) {

    function onSuccess(success) {
      dispatch(commentPost(success.data));
      const commentList = [];
      success.data.map((el) => {
        commentList.push(Object.assign({}, Comment.convertDataToComment(el)));
      });
      dispatch(loadComments(commentList));
      onAfterSendComment();
      return commentList;
    }

    function onError(error) {
      console.log('error!', error);
      dispatch(appendNotification({
        message: error.message,
        type: 'error',
        id: 5,
      }));
      return error;
    }

    try {
      const success = await api.post(`${serverLinks.COMMENTS}/${idHotel}`, commentObj);
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }

  };
}

export {
  fetchCommentsList,
  fetchPostComment
};
