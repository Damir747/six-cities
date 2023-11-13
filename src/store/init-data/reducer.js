import menuUpArray from '../../mock/mock-menu';
import propertyInside from '../../mock/mock-property-inside';

const initialState = {
  menuUpArray,
  propertyInside,
};

const initReducer = (state = initialState, _action) => {
  return state;
};

export default initReducer;
