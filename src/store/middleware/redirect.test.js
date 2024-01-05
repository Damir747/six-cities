import { redirectToRoute } from '../login-data/actions';
import { AppRoute } from '../../const';
import { mockRedux } from '../../mock/mock-redux';

const fakeHistory = {
  location: { pathname: '' },
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`../../browser-history`, () => fakeHistory);

describe(`Custom middleware works correctly`, () => {
  it(`Action passes to next middleware`, () => {
    const { invoke, next } = mockRedux();
    const action = redirectToRoute(AppRoute.ROOT);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Redirect route should be added in fakeHistory`, () => {
    const { invoke } = mockRedux();
    invoke(redirectToRoute(AppRoute.LOGIN));
    expect(fakeHistory.location.pathname).toBe(AppRoute.LOGIN);
    invoke(redirectToRoute(AppRoute.FAVORITES));
    expect(fakeHistory.location.pathname).toBe(AppRoute.FAVORITES);
  });

  it(`Non redirect because bad action`, () => {
    const { invoke } = mockRedux();
    const wrongPath = '/test-path';
    invoke({ type: 'TEST_ACTION', payload: wrongPath });
    expect(fakeHistory.location.pathname).not.toBe(wrongPath);
  });
});
