import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Loading from './loading';

it(`Should Loading render correctly`, () => {
	const history = createMemoryHistory();
	const { container } = render(
		< Router history={history}>
			<Loading />
		</ Router>
	);
	expect(container).toMatchSnapshot();
});
