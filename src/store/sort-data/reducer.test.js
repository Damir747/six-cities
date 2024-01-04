import { CHANGE_SORT } from './actions-types';
import sortReducer from "./reducer";

describe(`Login reducers work correctly`, () => {
  it(`CHANGE_SORT reducer works correctly`, () => {
    const startState = {};
    const expectedState = {
      sort: 2
    };
    expect(sortReducer(startState, { type: CHANGE_SORT, payload: 2 })).toEqual(expectedState);
  });

});
