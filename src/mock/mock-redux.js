import { redirect } from "../store/middleware/redirect";

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = (action) => redirect(action)(next)(action);
  return { store, next, invoke };
};

export { mockRedux };
