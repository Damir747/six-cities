import { NameSpace } from '../root-reducer';

const getReviews = (state) => state[NameSpace.HOTEL].reviews;

export { getReviews };
