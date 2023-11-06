import { NameSpace } from '../root-reducer';

const getMenuUpArray = (state) => state[NameSpace.INIT].menuUpArray;
const getPropertyInside = (state) => state[NameSpace.INIT].propertyInside;

export { getMenuUpArray, getPropertyInside };
