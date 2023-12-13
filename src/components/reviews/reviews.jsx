import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import OldReviews from '../old-reviews/old-reviews';
import NewReview from '../new-review/new-review';
import { AuthorizationStatus } from '../../const';
import { NameSpace } from '../../store/root-reducer';

const Reviews = ({ idHotel }) => {
  const { reviews } = useSelector((state) => state[NameSpace.COMMENT]);
  const { authorizationStatus } = useSelector((state) => state[NameSpace.LOGIN]);

  return (
    <React.Fragment>
      <section className="property__reviews reviews">

        <OldReviews reviews={reviews} />
        {authorizationStatus === AuthorizationStatus.AUTH
          ? <NewReview
            idHotel={idHotel}
          />
          : ''}

      </section>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  idHotel: PropTypes.number.isRequired,
};


export default Reviews;
