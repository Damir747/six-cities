import { NameSpace } from '../root-reducer';

const getReviews = (state) => state[NameSpace.COMMENT].reviews;

export { getReviews };
