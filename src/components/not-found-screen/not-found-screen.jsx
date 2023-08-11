import React from "react";
import Top from "../top/top";
import Header from "../header/header";
import { AppRoute } from "../../const";
import { Link } from 'react-router-dom';
import loginType from '../../types/login';

const NotFoundScreen = ({ loginName }) => {
	return (
		<React.Fragment>
			<Top />

			<div className="page">
				<Header />

				<h1>404 Not Found</h1>
				<Link to={AppRoute.ROOT} >
					Нажмите, что перейти на главную страницу.
				</Link>

				<footer className="footer container">
					<Link className="footer__logo-link" href={AppRoute.ROOT}>
						<img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
					</Link>
				</footer>
			</div>
		</React.Fragment>
	);
};

NotFoundScreen.propTypes = {
	loginName: loginType,
};

export default NotFoundScreen;
