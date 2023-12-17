import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import OldReviews from '../old-reviews/old-reviews';
import NewReview from '../new-review/new-review';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/login-data/selectors';

const Reviews = ({ idHotel }) => {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <React.Fragment>
      <section className="property__reviews reviews">

        <OldReviews />
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
