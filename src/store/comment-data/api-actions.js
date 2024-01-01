import { Comment } from '../adapter';
import { appendNotification } from '../notification-data/actions';
import { commentPost } from './actions';
import { serverLinks } from '../server-links';
import { loadComments } from '../hotel-data/actions';

const fetchCommentsList = (idHotel) => async (dispatch, _getState, api) => {

  function onSuccess({ data }) {
    const commentList = [];
    data.map((el) => {
      commentList.push(Object.assign({}, Comment.convertDataToComment(el)));
    });
    dispatch(loadComments(commentList));
    return commentList;
  }

  function onError(error) {
    console.log('error!');
    dispatch(appendNotification({
      message: error.message,
      type: 'error',
      id: 3
    }));
    dispatch(loadComments([]));
    return error;
  }

  try {
    const success = await api.get(`${serverLinks.COMMENTS}/${idHotel}`);
    return onSuccess(success);
  } catch (error) {
    return onError(error);
  }

};

const fetchPostComment = (idHotel, commentObj, onAfterSendComment) => async function (dispatch, _getState, api) {

  function onSuccess({ data }) {
    dispatch(commentPost(data));
    const commentList = [];
    data.map((el) => {
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

export {
  fetchCommentsList,
  fetchPostComment
};
