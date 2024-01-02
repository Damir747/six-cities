import { COMMENT_POST } from "./actions-types";
import commentReducer from "./reducer";

describe(`Reducers work correctly`, () => {
  it(`Comment reducer works correctly`, () => {
    const state = { comment: ['1'] };
    expect(commentReducer({}, { type: COMMENT_POST, payload: ['2'] })).toEqual(state);
  });

});
