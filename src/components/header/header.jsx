/* eslint-disable indent */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import loginType from '../../types/login';
import { AppRoute, AuthorizationStatus } from "../../const";
import { connect } from "react-redux";
import { getAuthorizationStatus, getLoginName } from "../../store/selectors";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Header = ({ authorizationStatus, loginName }) => {
  const history = useHistory();
  const buttonStyle = { height: '50%', width: '80px', margin: '10px' };

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.ROOT}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
              <button style={buttonStyle} onClick={() => history.push(AppRoute.FAVORITES)}>Favorites</button>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={authorizationStatus === AuthorizationStatus.AUTH ? `` : AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      {authorizationStatus === AuthorizationStatus.AUTH ? loginName : 'Sign in'}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment >
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  loginName: loginType,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  loginName: getLoginName(state),
});

export { Header };
export default connect(mapStateToProps)(memo(Header));
