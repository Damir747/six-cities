import { selectSort } from './actions';
import { CHANGE_SORT } from './actions-types';

describe(`Actions in hotels work correctly`, () => {
  it(`Action selectSort AUTH works correctly`, () => {
    const sort = 'by Intelect';
    const expectedAction = {
      type: CHANGE_SORT,
      payload: sort,
    };
    expect(selectSort(sort)).toEqual(expectedAction);
  });

});
