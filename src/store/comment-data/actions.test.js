import { commentPost } from "./actions";
import { COMMENT_POST } from "./actions-types";

describe(`Actions comment-data work correctly`, () => {
  it(`Actions for new 50-letters comment work correctly`, () => {
    const expectedAction = {
      type: COMMENT_POST,
      payload: '12345678901234567890123456789012345678901234567890',
    };
    const textComment = '12345678901234567890123456789012345678901234567890';
    expect(commentPost(textComment)).toEqual(expectedAction);
  });

  it(`Actions for new 152-letters comment work correctly`, () => {
    const expectedAction = {
      type: COMMENT_POST,
      payload: '12345678901234567890123456789012345678901234567890 12345678901234567890123456789012345678901234567890 12345678901234567890123456789012345678901234567890',
    };
    const textComment = '12345678901234567890123456789012345678901234567890 12345678901234567890123456789012345678901234567890 12345678901234567890123456789012345678901234567890';
    expect(commentPost(textComment)).toEqual(expectedAction);
  });
});
