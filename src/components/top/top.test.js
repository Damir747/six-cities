import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Top from './top';

it(`Should Top render correctly`, () => {
	const history = createMemoryHistory();
	render(
		< Router history={history}>
			<Top />
		</ Router>
	);
	const idIconArrowSelect = screen.getByTestId('icon-arrow-select');
	const idIconBookmark = screen.getByTestId('icon-bookmark');
	const idIconStar = screen.getByTestId('icon-star');
	expect(idIconArrowSelect).toMatchSnapshot();
	expect(idIconBookmark).toMatchSnapshot();
	expect(idIconStar).toMatchSnapshot();
});
