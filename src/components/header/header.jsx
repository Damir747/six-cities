/* eslint-disable indent */
import React, { memo } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { AppRoute, AuthorizationStatus } from '../../const';
<<<<<<< HEAD
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { NameSpace } from '../../store/root-reducer';

const Header = () => {

  const { authorizationStatus, loginName } = useSelector((state) => state[NameSpace.LOGIN]);
  const history = useHistory();
=======
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorizationStatus, getLoginAvatar, getLoginName } from '../../store/login-data/selectors';
import { fetchLogout, fetchGetLogin } from '../../store/login-data/api-actions';
import { fetchFavoriteList } from '../../store/favorite-data/api-actions';

const Header = () => {
>>>>>>> january
  const buttonStyle = { height: '50%', width: '80px', margin: '10px' };
  const dispatch = useDispatch();
  dispatch(fetchGetLogin());
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const loginName = useSelector(getLoginName);
  const loginAvatar = useSelector(getLoginAvatar);

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.ROOT}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <button style={buttonStyle} onClick={() => dispatch(fetchFavoriteList())}>fetchFavoriteList</button>
            <button style={buttonStyle} hidden={authorizationStatus !== AuthorizationStatus.AUTH} onClick={handleLogout}>Logout</button>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={authorizationStatus === AuthorizationStatus.AUTH ? AppRoute.FAVORITES : AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"><img src={loginAvatar} />
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

<<<<<<< HEAD
export default Header;
=======
export default memo(Header);
>>>>>>> january
