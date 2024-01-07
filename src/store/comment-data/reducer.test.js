import { COMMENT_POST } from "./actions-types";
import commentReducer from "./reducer";

describe(`Comment Reducers work correctly`, () => {
  it(`Reducer COMMENT_POST empty comment works correctly`, () => {
    const state = { comment: [] };
    expect(commentReducer({}, { type: COMMENT_POST, payload: [] })).toEqual(state);
  });
  it(`Reducer COMMENT_POST array comment works correctly`, () => {
    const state = { comment: ['1'] };
    expect(commentReducer({}, { type: COMMENT_POST, payload: ['1'] })).toEqual(state);
  });
  it(`Reducer COMMENT_POST string comment works correctly`, () => {
    const state = { comment: '1' };
    expect(commentReducer({}, { type: COMMENT_POST, payload: '1' })).toEqual(state);
  });

});
