/* eslint-disable indent */
import React from 'react';
import Header from '../header/header';
import Top from '../top/top';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { AppRoute } from '../../const';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../store/login-data/api-actions';

// ? надо через onAfterLoginRedirect передавать адрес страницы, на которой пользователь кликнул Логин,
// ? чтобы вернуться после авторизации точно на эту же страницу
// ? но проблема в том, что идёт переход на страницу, а там уже по этому адресу компонент, а компонент запрашивает fetchLogin

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchLogin({
      email: evt.target['email'].value,
      password: evt.target['password'].value
    }));
  };

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
                  <label className="visually-hidden" htmlFor="email">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    id="email"
                    data-testid="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="password">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    id="password"
                    data-testid="password"
                    placeholder="Password"
                    required=""
                  />
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

export default LoginPage;
