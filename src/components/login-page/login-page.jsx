/* eslint-disable indent */
import React from 'react';
import Header from '../header/header';
import Top from '../top/top';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { AppRoute } from '../../const';
import { useCallback } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { login } from '../../store/api-actions';
import { connect } from 'react-redux';

const LoginPage = ({ onLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    setEmail(evt.target['email'].value);
    setPassword(evt.target['password'].value);
    onLogin({
      email: evt.target['email'].value,
      password: evt.target['password'].value
    })
      .then(() => history.push(AppRoute.ROOT));
  });

  return (
    <React.Fragment>
      <Top />

      <div className="page page--gray page--login">
        <Header />

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.ROOT}>
                  <span>Amsterdam</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = ({
  onLogin: login
});

export { LoginPage };
export default connect(null, mapDispatchToProps)(LoginPage);
