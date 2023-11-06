import { NameSpace } from '../root-reducer';

const getSort = (state) => state[NameSpace.SORT].sort;

export { getSort };
