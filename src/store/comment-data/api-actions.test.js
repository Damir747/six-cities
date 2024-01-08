import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api';
import { serverLinks } from '../server-links';
import { COMMENT_POST } from './actions-types';
import { fetchCommentsList, fetchPostComment } from './api-actions';
import { REVIEWS_LIST } from '../hotel-data/actions-types';

const api = createAPI();

describe(`Async Comments operation works correctly`, () => {
  it(`Should make correct API fetchCommentsList call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeIdHotel = 1;
    const fakeReviews = [{
      id: 1,
      rating: 3,
      comment: "The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.",
      user: {
        name: 'Вася',
        id: 16,
        is_pro: true,
        avatar_url: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg"
      }
    },
    {
      id: 2,
      rating: 4,
      comment: "The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.",
      user: {
        name: 'Вася',
        id: 16,
        is_pro: true,
        avatar_url: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg"
      }
    }];
    const fakeAdaptedReviews = [{
      id: 1,
      rating: 3,
      reviewText: "The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.",
      author: 'Вася',
      img: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg"
    },
    {
      id: 2,
      rating: 4,
      reviewText: "The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.",
      author: 'Вася',
      img: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg"
    }];
    const checkFetchCommentsList = fetchCommentsList(fakeIdHotel);
    apiMock
      .onGet(`${serverLinks.COMMENTS}/${fakeIdHotel}`)
      .reply(200, fakeReviews);
    const fakeAction1 = {
      type: REVIEWS_LIST,
      payload: fakeAdaptedReviews
    };

    return checkFetchCommentsList(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
      });

  });

  it(`Should make correct API fetchPostComment call`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeIdHotel = 3;
    const fakeTextComment = 'fakeText of the comment';
    const fakeCommentObj = {
      comment: fakeTextComment,
      rating: 5,
    };
    const fakeAdaptedCommentObj = [{
      author: 'user-name@none.ru',
      img: 'fake-url-to-image',
      reviewText: fakeTextComment,
      user: {
        name: '',
        avatar_url: ''
      }
    }];
    const checkFetchPostComment = fetchPostComment(fakeIdHotel, fakeCommentObj, () => { });
    apiMock
      .onPost(`${serverLinks.COMMENTS}/${fakeIdHotel}`, fakeCommentObj)
      .reply(200, fakeAdaptedCommentObj);
    const fakeAction1 = {
      type: COMMENT_POST,
      payload: fakeAdaptedCommentObj
    };

    return checkFetchPostComment(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, fakeAction1);
      });

  });
});
