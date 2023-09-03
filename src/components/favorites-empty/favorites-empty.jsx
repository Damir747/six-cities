import React from 'react';
import Top from "../top/top";
import Header from "../header/header";
import Footer from "../footer/footer";

import loginType from '../../types/login';

const FavoritesEmpty = ({ loginName }) => {
	return (
		<React.Fragment>
			<Top />

			<div className="page">
				<Header />

				<main className="page__main page__main--favorites page__main--favorites-empty">
					<div className="page__favorites-container container">
						<section className="favorites favorites--empty">
							<h1 className="visually-hidden">Favorites (empty)</h1>
							<div className="favorites__status-wrapper">
								<b className="favorites__status">Nothing yet saved.</b>
								<p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
							</div>
						</section>
					</div>
				</main>

				<Footer />
			</div>
		</React.Fragment>
	);
};

FavoritesEmpty.propTypes = {
	loginName: loginType,
};

export default FavoritesEmpty;
