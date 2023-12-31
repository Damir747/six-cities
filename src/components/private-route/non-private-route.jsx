import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/login-data/selectors';
import { useSelector } from 'react-redux';

const NonPrivateRoute = (props) => {
  const { path, exact, render } = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.NO_AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.ROOT} />
        );
      }
      }
    />
  );
};

NonPrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

export default NonPrivateRoute;
